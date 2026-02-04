import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToTop } from '@/hooks';
import { NAVIGATION_LINKS, BREAKPOINTS } from '@/lib/constants';
import logo from '@/assets/zenaralogo-transparentbg.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavButtonHovered, setIsNavButtonHovered] = useState(false);
  const [isMobileButtonHovered, setIsMobileButtonHovered] = useState(false);
  const location = useLocation();

  // Prevent body scroll when mobile menu is open and manage focus
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus the first focusable element in the mobile menu
      const firstFocusable = document.querySelector('#mobile-menu button, #mobile-menu a');
      if (firstFocusable) {
        (firstFocusable as HTMLElement).focus();
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = NAVIGATION_LINKS;

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav 
      id="navigation"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[92%] md:w-[88%] lg:w-[85%] xl:w-[82%] max-w-[1400px]" 
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl px-4 sm:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5">
        <div className="flex items-center justify-between h-11 sm:h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <img src={logo} alt="Zenara Designs - Professional Web Design Agency Toronto" className="h-5 sm:h-6 w-auto" width="24" height="24" loading="eager" decoding="async" />
            <span className="font-semibold text-sm sm:text-base text-white">Zenara Designs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={scrollToTop}
                className={`font-medium text-sm xl:text-base transition-colors hover:text-cyan-300 ${
                  isActive(link.href) ? 'text-cyan-300' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <div 
              className={`relative inline-block rounded-full p-[2px] transition-all duration-300 ${
                isNavButtonHovered 
                  ? 'bg-purple-500' 
                  : 'bg-gradient-to-r from-cyan-400 via-purple-500 to-violet-500'
              }`}
              onMouseEnter={() => setIsNavButtonHovered(true)}
              onMouseLeave={() => setIsNavButtonHovered(false)}
            >
              <Button asChild className="bg-black hover:bg-purple-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 px-5 xl:px-6 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold">
                <Link to="/contact" onClick={scrollToTop} className="flex items-center gap-1.5 xl:gap-2">
                  Let's Talk
                  <ArrowRight className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-9 h-9 flex flex-col items-center justify-center space-y-1.5 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {/* Animated Hamburger Lines */}
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
            
            {/* Mobile Menu Panel */}
            <div className="absolute top-4 right-4 w-[90%] max-w-sm bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <Link 
                  to="/" 
                  className="flex items-center space-x-2" 
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                >
                  <img src={logo} alt="Zenara Designs - Professional Web Design Agency Toronto" className="h-8 w-auto" width="32" height="32" loading="eager" decoding="async" />
                  <span className="font-semibold text-lg text-white">Zenara Designs</span>
                </Link>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Full Screen Content Area */}
              <div className="overflow-y-auto max-h-[calc(100vh-120px)]">
                {/* Navigation Links */}
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`block py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                        isActive(link.href) 
                          ? 'bg-white/20 text-cyan-300' 
                          : 'text-white hover:bg-white/10 hover:text-cyan-300'
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        scrollToTop();
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <div 
                    className={`relative inline-block rounded-full p-[3px] transition-all duration-300 w-full ${
                      isMobileButtonHovered 
                        ? 'bg-purple-500' 
                        : 'bg-gradient-to-r from-cyan-400 via-purple-500 to-violet-500'
                    }`}
                    onMouseEnter={() => setIsMobileButtonHovered(true)}
                    onMouseLeave={() => setIsMobileButtonHovered(false)}
                  >
                    <Button 
                      asChild 
                      className="w-full bg-black hover:bg-purple-500 rounded-full text-white font-semibold py-3 px-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                      <Link 
                        to="/contact" 
                        onClick={() => {
                          setIsOpen(false);
                          scrollToTop();
                        }}
                        className="flex items-center justify-center gap-2"
                      >
                        Let's Talk
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;