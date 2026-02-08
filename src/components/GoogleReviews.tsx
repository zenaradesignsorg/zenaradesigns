import { useState, useEffect } from 'react';
import { Star, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

// TypeScript interfaces for Google Reviews
interface GoogleReview {
  name: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string;
  photoUri?: string;
}

interface GoogleReviewsData {
  displayName: string;
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
}

interface GoogleReviewsResponse {
  success: boolean;
  data?: GoogleReviewsData;
  error?: string;
}

const GoogleReviews = () => {
  const [reviewsData, setReviewsData] = useState<GoogleReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/reviews');
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data: GoogleReviewsResponse = await response.json();
        
        if (data.success && data.data) {
          setReviewsData(data.data);
        } else {
          throw new Error(data.error || 'Failed to load reviews');
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError(err instanceof Error ? err.message : 'Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const toggleReview = (index: number) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const formatRelativeTime = (relativeTime: string): string => {
    // Google API already provides formatted relative time like "2 months ago"
    return relativeTime;
  };

  if (loading) {
    return (
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !reviewsData) {
    return null; // Fail silently - don't show error to users
  }

  const { rating, userRatingCount, reviews } = reviewsData;
  const averageRating = rating || 0;
  const totalReviews = userRatingCount || 0;

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8" style={{ color: '#6b21a8' }}>
            What Our <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
            Real reviews from real businesses who trusted us with their digital transformation
          </p>
        </div>

        {/* Summary Card */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-lg border border-purple-200 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 sm:h-7 sm:w-7 ${
                          i < Math.round(averageRating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900 ml-2">
                    {averageRating.toFixed(1)}
                  </span>
                </div>
                <p className="text-slate-600 text-base sm:text-lg">
                  Based on {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
                </p>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-sm sm:text-base font-semibold">Verified Google Business</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => {
            const isExpanded = expandedReviews.has(index);
            const textLength = review.text.length;
            const shouldShowReadMore = textLength > 150;
            const displayText = isExpanded || !shouldShowReadMore 
              ? review.text 
              : `${review.text.substring(0, 150)}...`;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Review Header */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Profile Picture */}
                  <div className="flex-shrink-0">
                    {review.photoUri ? (
                      <img
                        src={review.photoUri}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-lg">
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  
                  {/* Name and Rating */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 text-base sm:text-lg mb-1 truncate">
                      {review.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      {formatRelativeTime(review.relativeTime)}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <div className="flex-1 mb-4">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {displayText}
                  </p>
                </div>

                {/* Read More/Less Button */}
                {shouldShowReadMore && (
                  <button
                    onClick={() => toggleReview(index)}
                    className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm font-medium mt-auto transition-colors duration-200 self-start"
                  >
                    {isExpanded ? (
                      <>
                        <span>Read Less</span>
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        <span>Read More</span>
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Verified Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-purple-200">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-slate-700 text-sm sm:text-base font-medium">
              Verified Google Business
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
