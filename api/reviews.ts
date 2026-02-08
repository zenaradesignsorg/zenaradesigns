import type { VercelRequest, VercelResponse } from '@vercel/node';

// TypeScript interfaces for Google Places API (New)
interface GooglePlaceReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  originalText: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri?: string;
  };
  publishTime: string;
}

interface GooglePlaceResponse {
  name: string;
  rating?: number | {
    rating?: number;
    userRatingCount?: number;
  };
  reviews?: GooglePlaceReview[];
  displayName?: {
    text: string;
    languageCode: string;
  };
}

// Security headers
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
};

// Rate limiting store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 10; // More lenient for read-only endpoint
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes
let lastCleanup = Date.now();

function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
  lastCleanup = now;
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  
  if (now - lastCleanup > CLEANUP_INTERVAL) {
    cleanupExpiredEntries();
  }
  
  const key = ip;
  const userLimit = rateLimitStore.get(key);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set security headers
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  // Set CORS headers
  const allowedOrigin = process.env.ALLOWED_ORIGIN || 'https://zenaradesigns.com';
  const allowedOrigins = [
    'https://zenaradesigns.com',
    'https://www.zenaradesigns.com',
  ];
  
  const origin = req.headers.origin;
  const isAllowedOrigin = origin && allowedOrigins.includes(origin);
  
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', isAllowedOrigin ? origin : allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Max-Age', '86400');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const clientIP = req.headers['x-forwarded-for'] as string || 
                   req.headers['x-real-ip'] as string || 
                   req.connection?.remoteAddress || 
                   'unknown';
  
  if (!checkRateLimit(clientIP)) {
    return res.status(429).json({ 
      error: 'Too many requests. Please try again later.',
      success: false 
    });
  }

  // Validate environment variables
  if (!process.env.GOOGLE_PLACE_ID) {
    console.error('GOOGLE_PLACE_ID environment variable is not set');
    return res.status(500).json({ 
      error: 'Server configuration error',
      success: false 
    });
  }

  if (!process.env.GOOGLE_PLACES_API_KEY) {
    console.error('GOOGLE_PLACES_API_KEY environment variable is not set');
    return res.status(500).json({ 
      error: 'Server configuration error',
      success: false 
    });
  }

  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    
    // Fetch from Google Places API (New)
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        method: 'GET',
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'reviews,rating,userRatingCount,displayName',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Places API error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: 'Failed to fetch reviews from Google Places API',
        success: false 
      });
    }

    const data: GooglePlaceResponse = await response.json();

    // Extract and format the data
    const reviews = data.reviews || [];
    // Handle rating - it might be directly a number or an object
    const rating = typeof data.rating === 'number' 
      ? data.rating 
      : (typeof data.rating === 'object' && data.rating !== null && 'rating' in data.rating)
        ? (data.rating as { rating?: number }).rating || 0
        : 0;
    const userRatingCount = typeof data.rating === 'object' && data.rating !== null && 'userRatingCount' in data.rating
      ? (data.rating as { userRatingCount?: number }).userRatingCount || 0
      : 0;
    const displayName = data.displayName?.text || data.name || '';

    // Return only the latest 5 reviews, sorted by publish time (newest first)
    const latestReviews = reviews
      .sort((a, b) => {
        const timeA = a.publishTime ? new Date(a.publishTime).getTime() : 0;
        const timeB = b.publishTime ? new Date(b.publishTime).getTime() : 0;
        return timeB - timeA; // Sort descending (newest first)
      })
      .slice(0, 5)
      .map(review => ({
        name: review.authorAttribution?.displayName || 'Anonymous',
        rating: review.rating || 5,
        text: review.text?.text || review.originalText?.text || '',
        relativeTime: review.relativePublishTimeDescription || 'Recently',
        publishTime: review.publishTime || new Date().toISOString(),
        photoUri: review.authorAttribution?.photoUri,
      }));

    return res.status(200).json({
      success: true,
      data: {
        displayName,
        rating,
        userRatingCount,
        reviews: latestReviews,
      },
    });

  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      success: false 
    });
  }
}
