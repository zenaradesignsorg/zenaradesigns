import { Smartphone, Monitor, Tablet, Zap, Users, Globe, CheckCircle, ArrowRight, Target, TrendingUp, Eye, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollToTop, useSEO } from '@/hooks';
import { useState, useEffect, useRef, memo, useMemo, useCallback } from 'react';
import { PERFORMANCE_THRESHOLDS } from '@/lib/constants';

const Mobile = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  // SEO meta tags
  useSEO({
    title: "Mobile-First Web Design | Responsive Design Best Practices | Zenara",
    description: "Learn why mobile-first design is essential for Toronto businesses. Discover responsive design best practices, mobile optimization, and how to prioritize mobile users for better SEO and conversions.",
    canonical: "https://zenaradesigns.com/mobile",
    structuredData: {
      type: 'service',
      serviceName: 'Mobile-First Web Design',
      serviceDescription: 'Professional mobile-first web design services for Toronto businesses, including responsive design, mobile optimization, and mobile-first development best practices.'
    }
  });
  
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleItemIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        setVisibleItems(prev => [...prev, index]);
      } else {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        setVisibleItems(prev => prev.filter(item => item !== index));
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleItemIntersection, { threshold: 0.2 });

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [handleItemIntersection]);

  const mobileStats = useMemo(() => [
    { label: "Mobile Traffic", value: "60%+", icon: Smartphone },
    { label: "Mobile Search", value: "70%+", icon: Globe },
    { label: "Mobile Conversions", value: "45%+", icon: Target },
    { label: "Mobile Bounce Rate", value: "Higher", icon: TrendingUp }
  ], []);

  const mobilePrinciples = useMemo(() => [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Design for mobile devices first, then scale up to desktop",
      benefits: [
        "Faster loading on mobile devices",
        "Better user experience on small screens",
        "Improved mobile SEO rankings",
        "Higher mobile conversion rates",
        "Future-proof design approach"
      ],
      importance: "Google uses mobile-first indexing, making mobile optimization crucial for SEO"
    },
    {
      icon: Monitor,
      title: "Responsive Design",
      description: "Adaptive layouts that work seamlessly across all device sizes",
      benefits: [
        "Single codebase for all devices",
        "Consistent user experience",
        "Easier maintenance and updates",
        "Better performance optimization",
        "Cost-effective development"
      ],
      importance: "Ensures your website looks perfect on phones, tablets, and desktops"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast loading times optimized for mobile networks",
      benefits: [
        "Reduced bounce rates",
        "Better user engagement",
        "Improved SEO rankings",
        "Higher conversion rates",
        "Better Core Web Vitals"
      ],
      importance: "Mobile users expect pages to load in under 3 seconds"
    },
    {
      icon: Users,
      title: "Touch-Friendly Interface",
      description: "Intuitive navigation designed for touch interactions",
      benefits: [
        "Larger tap targets",
        "Swipe gestures support",
        "Thumb-friendly navigation",
        "Reduced user frustration",
        "Better accessibility"
      ],
      importance: "Touch interfaces require different design considerations than mouse interactions"
    },
    {
      icon: Eye,
      title: "Readable Typography",
      description: "Clear, legible text optimized for small screens",
      benefits: [
        "Better readability on mobile",
        "Improved user experience",
        "Reduced eye strain",
        "Higher content engagement",
        "Professional appearance"
      ],
      importance: "Small screens require careful typography choices for optimal readability"
    },
    {
      icon: BarChart3,
      title: "Mobile Analytics",
      description: "Track and analyze mobile user behavior and performance",
      benefits: [
        "Mobile-specific insights",
        "Performance monitoring",
        "User behavior analysis",
        "Conversion tracking",
        "Continuous optimization"
      ],
      importance: "Understanding mobile user behavior helps optimize the experience"
    }
  ], []);

  const bestPractices = useMemo(() => [
    {
      title: "Optimize Images",
      description: "Use WebP format, lazy loading, and appropriate sizing for mobile devices",
      impact: "Reduces page load time by up to 50%"
    },
    {
      title: "Minimize Text Input",
      description: "Reduce form fields and use mobile-friendly input types",
      impact: "Increases form completion rates by 30%"
    },
    {
      title: "Fast Loading",
      description: "Optimize code, use CDNs, and minimize HTTP requests",
      impact: "Improves user experience and SEO rankings"
    },
    {
      title: "Clear Navigation",
      description: "Use hamburger menus and prioritize important content",
      impact: "Reduces bounce rate and improves user engagement"
    },
    {
      title: "Touch Targets",
      description: "Ensure buttons and links are at least 44px in size",
      impact: "Prevents accidental taps and improves usability"
    },
    {
      title: "Local SEO",
      description: "Optimize for local mobile searches with location-based content",
      impact: "Increases local business visibility by 40%"
    }
  ], []);

  return (
    <div className="min-h-screen" role="main" aria-label="Mobile page">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-black via-blue-900 to-purple-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Mobile-themed Stars */}
          <div className="absolute top-16 left-16 w-1 h-1 bg-blue-300 rounded-full animate-twinkle"></div>
          <div className="absolute top-32 right-24 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-48 left-1/3 w-1 h-1 bg-teal-300 rounded-full animate-twinkle delay-2000"></div>
          <div className="absolute top-24 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-twinkle delay-500"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-blue-500/30">
              <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-blue-300">Mobile-First Design</span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              Mobile-First Web Design <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Best Practices</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              With over 60% of web traffic coming from mobile devices, mobile-first design isn't just important—it's essential for Toronto businesses to succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Statistics */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Mobile Matters <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">for Your Business</span>
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              The numbers speak for themselves. Mobile optimization is no longer optional—it's a business necessity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl mx-auto mb-4 flex items-center justify-center text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Principles */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-cyan-500/30">
              <Monitor className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300">Design Principles</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Mobile-First <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Design Principles</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Core principles that guide effective mobile-first web design
            </p>
          </div>
          
          <div className="space-y-8 sm:space-y-12">
            {mobilePrinciples.map((principle, index) => (
              <div 
                key={index} 
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`group transition-all duration-1000 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 relative overflow-hidden">
                  {/* Glassmorphism Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <principle.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                          {principle.title}
                        </h3>
                        <p className="text-slate-300 mb-4 text-base sm:text-lg leading-relaxed">
                          {principle.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-cyan-300 mb-2">Why It Matters:</h4>
                          <p className="text-slate-300 text-sm">{principle.importance}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-cyan-300 mb-3">Key Benefits:</h4>
                          <ul className="space-y-2">
                            {principle.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start space-x-2 text-slate-300">
                                <CheckCircle className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-blue-500/30">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-blue-300">Best Practices</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Mobile Optimization <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Best Practices</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Proven strategies to optimize your website for mobile users and improve performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestPractices.map((practice, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {practice.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {practice.description}
                  </p>
                  <div className="text-blue-300 text-sm font-semibold">
                    Impact: {practice.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Comparison */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Responsive Design <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Across Devices</span>
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Your website should look and function perfectly on every device your customers use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                device: "Mobile",
                icon: Smartphone,
                screen: "320px - 768px",
                users: "60%+ of traffic",
                features: ["Touch navigation", "Thumb-friendly buttons", "Simplified content", "Fast loading"]
              },
              {
                device: "Tablet",
                icon: Tablet,
                screen: "768px - 1024px",
                users: "15% of traffic",
                features: ["Hybrid navigation", "Medium content density", "Touch + mouse", "Balanced layout"]
              },
              {
                device: "Desktop",
                icon: Monitor,
                screen: "1024px+",
                users: "25% of traffic",
                features: ["Full navigation", "Rich content", "Mouse interactions", "Advanced features"]
              }
            ].map((device, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                    <device.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {device.device}
                  </h3>
                  <p className="text-cyan-300 font-semibold mb-4">{device.screen}</p>
                  <p className="text-slate-300 text-sm mb-6">{device.users}</p>
                  <ul className="space-y-2 text-left">
                    {device.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-slate-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
            {/* Glassmorphism Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-blue-500/30">
                <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-blue-300">Mobile Optimization</span>
              </div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8">
                Ready to Optimize for <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mobile?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4">
                Don't lose potential customers to poor mobile experience. Let us help you create a mobile-first website that converts visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <div 
                  className="relative inline-block rounded-full p-[4px] transition-all duration-300 group w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(168, 85, 247)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'}
                >
                  <Button asChild className="bg-black hover:bg-purple-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto">
                    <Link to="/contact" className="flex items-center justify-center">
                      Get Mobile Audit
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                  <span className="text-xs sm:text-sm">Free Mobile Audit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                  <span className="text-xs sm:text-sm">Mobile-First Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                  <span className="text-xs sm:text-sm">Performance Optimized</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Last Updated Date */}
          <div className="text-center mt-8">
            <p className="text-transparent text-sm">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Mobile);
