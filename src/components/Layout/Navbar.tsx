'use client';

import { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAVIGATION_LINKS } from '@/lib/constants';

const logo = '/images/zenara-logo-v5.svg';

/** useLayoutEffect warns during SSR; this component renders on the server too. */
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousBodyOverflow = useRef<string>('');

  const navLinks = NAVIGATION_LINKS;
  const isActive = (href: string) => pathname === href;

  // Each hover advances the mark by a full turn. It never rewinds — a pinwheel
  // that snapped back would read as a mistake rather than a spin.
  const [logoTurns, setLogoTurns] = useState(0);

  /*
   * One shared indicator travels between the desktop links instead of each link
   * owning an underline that fades in and out. It follows the pointer (and
   * keyboard focus), then settles back onto the current route's link.
   */
  const navRowRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const hoveredIndexRef = useRef<number | null>(null);
  const activeIndexRef = useRef<number>(-1);
  const [indicator, setIndicator] = useState({ x: 0, w: 0, visible: false });

  const activeIndex = navLinks.findIndex((link) => isActive(link.href));

  const measure = useCallback((index: number | null) => {
    const row = navRowRef.current;
    const el = index === null || index < 0 ? null : linkRefs.current[index];
    // No link matches the current route (a city or blog page) — park the comet.
    if (!row || !el) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }
    const rowRect = row.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setIndicator({ x: rect.left - rowRect.left, w: rect.width, visible: true });
  }, []);

  const moveTo = useCallback(
    (index: number) => {
      hoveredIndexRef.current = index;
      measure(index);
    },
    [measure]
  );

  const settle = useCallback(() => {
    hoveredIndexRef.current = null;
    measure(activeIndexRef.current);
  }, [measure]);

  // Position before first paint so the indicator doesn't slide in from the left
  // on load, and re-settle whenever the route changes.
  useIsomorphicLayoutEffect(() => {
    activeIndexRef.current = activeIndex;
    if (hoveredIndexRef.current === null) measure(activeIndex);
  }, [activeIndex, measure]);

  // Link widths change with the viewport, and again once the webfont swaps in.
  useEffect(() => {
    let cancelled = false;
    const remeasure = () => {
      if (!cancelled) measure(hoveredIndexRef.current ?? activeIndexRef.current);
    };
    window.addEventListener('resize', remeasure);
    document.fonts?.ready.then(remeasure);
    return () => {
      cancelled = true;
      window.removeEventListener('resize', remeasure);
    };
  }, [measure]);

  // Handle menu open
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  // Handle menu close
  const closeMobileMenu = () => {
    const menuElement = mobileMenuRef.current;
    if (menuElement) {
      menuElement.classList.add('mobile-menu-exiting');
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        menuElement.classList.remove('mobile-menu-exiting');
      }, 300);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = (href: string) => {
    closeMobileMenu();
    requestAnimationFrame(() => {
      setTimeout(() => {
        router.push(href);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 200);
    });
  };

  // Prevent body scroll when mobile menu is open - optimized for mobile devices
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      previousBodyOverflow.current = document.body.style.overflow;
      
      // Lock scroll - method that works on all devices
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      
      // Prevent iOS bounce scroll
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.width = '100%';
      document.documentElement.style.height = '100%';
      
      // Focus close button after animation starts
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 150);
    } else {
      // Restore scroll
      const scrollY = document.body.style.top;
      
      // Restore body styles
      document.body.style.overflow = previousBodyOverflow.current || '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      
      // Restore html styles
      document.documentElement.style.overflow = '';
      document.documentElement.style.position = '';
      document.documentElement.style.width = '';
      document.documentElement.style.height = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = previousBodyOverflow.current || '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.position = '';
      document.documentElement.style.width = '';
      document.documentElement.style.height = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on route change (back/forward navigation)
  useEffect(() => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen]);

  // Mobile Menu Component
  const MobileMenu = () => {
    if (!isMobileMenuOpen) return null;

    return (
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className="lg:hidden fixed inset-0 z-[10001] mobile-menu-container"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Backdrop */}
        <div
          className="mobile-menu-backdrop"
          onClick={closeMobileMenu}
          aria-hidden="true"
        >
          {/* Clean gradient background - minimal decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/98 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-black via-purple-900/20 to-black"></div>
        </div>

        {/* Menu Content */}
        <div className="mobile-menu-content">
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 flex-shrink-0">
            <Link
              href="/"
              className="flex items-center touch-manipulation"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
            >
              <Image
                src={logo}
                alt="Zenara Designs"
                className="h-9 sm:h-10 w-auto"
                width={40}
                height={40}
                priority
              />
            </Link>

            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={closeMobileMenu}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-700/80 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 relative group touch-manipulation"
              aria-label="Close navigation menu"
              type="button"
            >
              <X className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors duration-200" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 flex flex-col justify-center px-5 sm:px-6 py-8 overflow-y-auto overscroll-contain">
            {/* Navigation Links */}
            <nav className="space-y-3 mb-8" aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href);
                  }}
                  className={`mobile-menu-item block py-4 px-5 rounded-xl font-light text-lg transition-all duration-200 relative overflow-hidden group touch-manipulation min-h-[56px] flex items-center ${
                    isActive(link.href)
                      ? 'bg-slate-800/60 border border-cyan-400/40 text-cyan-300'
                      : 'text-white/90 hover:text-white active:text-white hover:bg-slate-800/40 active:bg-slate-800/60 border border-transparent hover:border-slate-700/30'
                  }`}
                  style={{
                    animationDelay: `${index * 60}ms`,
                  }}
                >
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-200 rounded-xl"></div>
                  <span className="relative z-10 flex items-center justify-between w-full">
                    <span>{link.label}</span>
                    {isActive(link.href) && (
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 ml-3"></div>
                    )}
                  </span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="pt-2">
              <div className="relative w-full rounded-full p-[2px] bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300">
                <Button
                  asChild
                  className="relative overflow-hidden bg-black rounded-full text-white shadow-lg transition-all duration-200 w-full py-4 px-6 text-base font-semibold group active:scale-[0.98] touch-manipulation"
                >
                  <Link
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('/contact');
                    }}
                    className="flex items-center justify-center gap-2 relative z-10 group-hover:text-white group-active:text-white"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 transform -translate-x-full group-hover:translate-x-0 group-active:translate-x-0 transition-transform duration-300 ease-in-out z-0 rounded-full"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Let's Talk
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
    <nav 
      id="navigation"
        className="fixed left-1/2 -translate-x-1/2 z-[100] w-[95%] sm:w-[92%] md:w-[88%] lg:w-[85%] xl:w-[82%] max-w-[1400px]"
        style={{ top: 'max(16px, env(safe-area-inset-top, 0px))' }}
      role="navigation"
      aria-label="Main navigation"
    >
        <div className="bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl px-4 sm:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5">
          <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo */}
            <Link
              href="/"
              className="group relative flex items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              onMouseEnter={() => setLogoTurns((turns) => turns + 1)}
              // Keyboard focus only — a mouse click focuses the link too, and
              // would otherwise stack a second turn on top of the hover's.
              onFocus={(e) => {
                if (e.target.matches(':focus-visible')) setLogoTurns((turns) => turns + 1);
              }}
            >
              {/* Bloom the mark casts while it turns */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2.5 rounded-full bg-[radial-gradient(circle,rgba(134,49,201,0.35),rgba(47,171,218,0.18)_45%,transparent_70%)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
              />
              <Image
                src={logo}
                alt="Zenara Designs - Professional Web Design Agency Toronto"
                className="relative h-6 sm:h-8 w-auto"
                style={{
                  transform: `rotate(${logoTurns * 360}deg)`,
                  // Not the site's usual expo-out — that front-loads ~70% of the
                  // travel into the first 150ms, which turns a full turn into a
                  // flicker. Ease-in-out keeps the whole rotation readable.
                  transition: 'transform 750ms cubic-bezier(0.65, 0, 0.35, 1)',
                }}
                width={32}
                height={32}
                priority
              />
          </Link>

            {/* Vertical Divider */}
            <div className="hidden lg:block h-8 w-px bg-gradient-to-b from-transparent via-cyan-400/60 via-purple-400/60 to-transparent mx-8 xl:mx-10"></div>

          {/* Desktop Navigation */}
            {/* gap rather than space-x: space-x would put a margin on the
                absolutely positioned indicator and throw off its offset. */}
            <div
              ref={navRowRef}
              className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-start relative"
              onMouseLeave={settle}
              onBlur={settle}
            >
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                onMouseEnter={() => moveTo(index)}
                onFocus={() => moveTo(index)}
                  className={`relative py-1.5 font-light text-sm xl:text-base transition-colors duration-300 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${
                    isActive(link.href) ? 'text-cyan-300' : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* The comet: one body that travels the row and stretches to fit */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 will-change-transform"
              style={{
                width: `${indicator.w}px`,
                transform: `translateX(${indicator.x}px)`,
                opacity: indicator.visible ? 1 : 0,
                transition:
                  'transform 480ms cubic-bezier(0.22, 1, 0.36, 1), width 480ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease-out',
              }}
            >
              {/* light it throws up onto the label */}
              <span className="absolute inset-x-0 bottom-0 h-6 rounded-full bg-[radial-gradient(65%_100%_at_50%_100%,rgba(103,232,249,0.16),transparent_72%)]" />
              {/* the streak, plus a blurred purple pass for chromatic bleed */}
              <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
              <span className="absolute inset-x-0 -bottom-0.5 h-px blur-[2px] bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
            </span>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
              <div className="relative inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300">
                    <Button 
                      asChild 
                  className="relative overflow-hidden bg-black rounded-full text-white shadow-lg transition-all duration-300 px-5 xl:px-6 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold group"
                    >
                      <Link 
                        href="/contact" 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-1.5 xl:gap-2 relative z-10 group-hover:text-white"
                  >
                    <span className="relative z-10">Let's Talk</span>
                    <ArrowRight className="h-3.5 w-3.5 xl:h-4 xl:w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    {/* Hover background animation - left to right */}
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0 rounded-full"></span>
                      </Link>
                    </Button>
                  </div>
                </div>

            {/* Mobile Menu Button */}
            {!isMobileMenuOpen && (
              <button
                className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 z-50 group touch-manipulation active:scale-95 transition-transform duration-200"
                onClick={openMobileMenu}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                type="button"
              >
                {/* Hamburger Lines */}
                <div className="w-6 h-0.5 bg-white transition-all duration-200 group-hover:bg-cyan-300"></div>
                <div className="w-6 h-0.5 bg-white transition-all duration-200 group-hover:bg-cyan-300"></div>
                <div className="w-6 h-0.5 bg-white transition-all duration-200 group-hover:bg-cyan-300"></div>
              </button>
            )}
          </div>
      </div>
    </nav>

      {/* Mobile Navigation - Rendered via Portal */}
      {isMobileMenuOpen &&
        typeof document !== 'undefined' &&
        createPortal(<MobileMenu />, document.body)}
    </>
  );
};

export default Navbar;
