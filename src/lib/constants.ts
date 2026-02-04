// Business contact information constants
export const BUSINESS_EMAIL = 'zenaradesigns.co@gmail.com';
export const BUSINESS_DOMAIN = 'mail.zenaradesigns.com';
export const BUSINESS_NAME = 'Zenara Designs';
export const BUSINESS_PHONE = '(647) 835-1077';

// Email configuration
export const EMAIL_CONFIG = {
  from: `${BUSINESS_NAME} <noreply@${BUSINESS_DOMAIN}>`,
  to: [BUSINESS_EMAIL] as string[],
  replyTo: BUSINESS_EMAIL,
};

// Navigation constants
export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
] as const;

// Footer additional links
export const FOOTER_ADDITIONAL_LINKS = [
  { href: '/faq', label: 'FAQ' },
  { href: '/locations', label: 'Locations' },
  { href: '/process', label: 'Our Process' },
  { href: '/security', label: 'Security' },
  { href: '/mobile', label: 'Mobile' },
] as const;

// Animation constants
export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 1000,
} as const;

// Performance constants
export const PERFORMANCE_THRESHOLDS = {
  INTERSECTION_OBSERVER: 0.3,
  SCROLL_DEBOUNCE: 100,
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS_PER_WINDOW: 3,
} as const;

// Form validation constants
export const FORM_LIMITS = {
  NAME_MIN: 2,
  NAME_MAX: 100,
  EMAIL_MAX: 254,
  COMPANY_MAX: 100,
  PROJECT_TYPE_MAX: 50,
  BUDGET_MAX: 50,
  TIMELINE_MAX: 50,
  MESSAGE_MIN: 10,
  MESSAGE_MAX: 2000,
} as const;

// Breakpoint constants
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;
