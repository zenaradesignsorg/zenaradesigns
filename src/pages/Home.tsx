import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Shield, Code2, Users, Rocket, CheckCircle, Star, TrendingUp, Clock, Award, Sparkles, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollToTop, useSEO } from '@/hooks';
import { PERFORMANCE_THRESHOLDS } from '@/lib/constants';
import type { Capability, Differentiator, SuccessMetric, AnimatedNumbers } from '@/lib/types';
import logo from '@/assets/zenaralogo-transparentbg.png';
import realEstateWebImage from '@/assets/website-example-realestate.png';
import rocketWebImage from '@/assets/website-example-rocket.png';
import gardenWebImage from '@/assets/website-example-garden.png';
import travelWebImage from '@/assets/website-example-travel.png';
import { useState, useEffect, useRef, memo, useCallback, useMemo } from 'react';

const Home = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  // SEO meta tags
  useSEO({
    title: "Web Design Toronto | Business Cards & Logo Design GTA | Zenara",
    description: "Toronto's leading web design agency. Professional websites, business cards, and logo design for GTA businesses. Modern, fast, secure solutions. Get your free consultation today!",
    canonical: "https://zenaradesigns.com",
    structuredData: {
      type: 'localBusiness'
    }
  });
  
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const slogans = useMemo(() => ['Modern', 'Fast', 'Secure'], []);
  const [animatedNumbers, setAnimatedNumbers] = useState<AnimatedNumbers>({
    conversion: 0,
    weeks: "1-2",
    satisfaction: 0,
    mobile: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => {
        const next = (prev + 1) % slogans.length;
        return next;
      });
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(interval);
  }, []);

  const animateNumbers = useCallback(() => {
    const targets = {
      conversion: 40,
      weeks: "1-2", // Keep this static
      satisfaction: 98,
      mobile: 100
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedNumbers({
        conversion: Math.floor(targets.conversion * progress),
        weeks: "1-2", // Always keep this static
        satisfaction: Math.floor(targets.satisfaction * progress),
        mobile: Math.floor(targets.mobile * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedNumbers(targets);
      }
    }, stepDuration);
  }, []);

  // Animated numbers effect
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
        animateNumbers();
      }
    });
  }, [isVisible, animateNumbers]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: PERFORMANCE_THRESHOLDS.INTERSECTION_OBSERVER });

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [handleIntersection]);

  // Cursor glow effect - Hero section only
  useEffect(() => {
    const heroSection = document.querySelector('.cursor-glow') as HTMLElement;
    if (!heroSection) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      heroSection.style.setProperty('--mouse-x', x + 'px');
      heroSection.style.setProperty('--mouse-y', y + 'px');
    };

    const handleMouseLeave = () => {
      heroSection.style.setProperty('--mouse-x', '-100px');
      heroSection.style.setProperty('--mouse-y', '-100px');
    };

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const capabilities: Capability[] = [
    {
      icon: <Code2 className="h-8 w-8 text-white" />,
      title: "Modern Tech Stack",
      description: "React, Next.js, TypeScript"
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Performance First",
      description: "Lightning fast loading"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Secure by Design",
      description: "Enterprise-grade security"
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Mobile Responsive",
      description: "Perfect on all devices"
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "SEO Optimized",
      description: "Search engine ready"
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Scalable",
      description: "Grows with your business"
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "User Experience",
      description: "Intuitive and engaging"
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      title: "Quality Code",
      description: "Clean and maintainable"
    }
  ];

  const differentiators: Differentiator[] = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personal Touch",
      description: "Direct access to our team throughout your project. No account managers, no middlemen – just real people who care about your success.",
      highlight: "Direct Communication"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Speed Without Compromise",
      description: "We deliver in 2-4 weeks what others take months to build, without cutting corners on quality or attention to detail.",
      highlight: "Fast & Quality"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Business-Focused Design",
      description: "Every pixel serves a purpose. We design for conversions, not just aesthetics, ensuring your website drives real business results.",
      highlight: "Results-Driven"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Future-Proof Technology",
      description: "Built with modern, scalable technologies that grow with your business. No technical debt, no outdated frameworks.",
      highlight: "Modern Stack"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Ongoing Partnership",
      description: "We're not just a one-time vendor. We provide ongoing support, updates, and optimizations to keep your site performing at its best.",
      highlight: "Long-term Support"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Transparent Process",
      description: "Clear timelines, regular updates, and honest communication. You always know exactly what's happening and when it'll be done.",
      highlight: "No Surprises"
    }
  ];

  const successMetrics: SuccessMetric[] = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "40%",
      label: "Average Conversion Increase",
      description: "Our clients see significant improvements in their conversion rates"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "2-4",
      label: "Weeks to Launch",
      description: "From concept to live website in record time"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "98%",
      label: "Client Satisfaction",
      description: "Happy clients who recommend us to others"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      number: "100%",
      label: "Mobile Optimized",
      description: "Every site is perfectly responsive across all devices"
    }
  ];

  return (
    <div className="m-0 p-0" role="main" aria-label="Home page">
      {/* Space-Themed Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-teal-900 to-purple-900 cursor-glow pt-0 mt-0 z-10" role="banner" aria-label="Hero section">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Shooting Stars */}
          <div className="shooting-star shooting-star-1"></div>
          <div className="shooting-star shooting-star-2"></div>
          <div className="shooting-star shooting-star-3"></div>
          <div className="shooting-star shooting-star-4"></div>
          <div className="shooting-star shooting-star-5"></div>
          
          {/* Background Stars */}
          <div className="bg-star bg-star-1"></div>
          <div className="bg-star bg-star-2"></div>
          <div className="bg-star bg-star-3"></div>
          <div className="bg-star bg-star-4"></div>
          <div className="bg-star bg-star-5"></div>
          <div className="bg-star bg-star-6"></div>
          <div className="bg-star bg-star-7"></div>
          <div className="bg-star bg-star-8"></div>
          <div className="bg-star bg-star-9"></div>
          <div className="bg-star bg-star-10"></div>
          <div className="bg-star bg-star-11"></div>
          <div className="bg-star bg-star-12"></div>
          <div className="bg-star bg-star-13"></div>
          <div className="bg-star bg-star-14"></div>
          <div className="bg-star bg-star-15"></div>
          <div className="bg-star bg-star-16"></div>
          <div className="bg-star bg-star-17"></div>
          <div className="bg-star bg-star-18"></div>
          <div className="bg-star bg-star-19"></div>
          <div className="bg-star bg-star-20"></div>
          
          {/* Floating Particles */}
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
          
          {/* Nebula Effect */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Purple Splashes */}
          <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-gradient-to-r from-violet-500/12 to-purple-500/12 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute top-2/3 right-1/6 w-48 h-48 bg-gradient-to-r from-purple-500/18 to-indigo-500/18 rounded-full blur-3xl animate-pulse delay-2500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 relative z-10 pt-20 sm:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-10 lg:gap-12 items-center min-h-[80vh]">
            <div className="fade-in order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.15] text-white tracking-[-0.02em] sm:tracking-[-0.03em]">
                Web Design. Build. Launch
                <span className="gradient-text"> <span key={currentSlogan} className="cool-text-animation">{slogans[currentSlogan]}</span></span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Zenara Designs creates high-performing websites for Toronto & GTA businesses and professionals using modern development workflows.
              </p>
              <div className="flex justify-center lg:justify-start">
                <div 
                  className={`relative inline-block rounded-full p-[4px] transition-all duration-300 group ${
                    isButtonHovered 
                      ? 'bg-purple-500' 
                      : 'bg-gradient-to-r from-cyan-400 via-purple-500 to-violet-500'
                  }`}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                >
                  <Button asChild className="bg-black hover:bg-purple-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 sm:px-10 sm:py-7 text-lg sm:text-xl font-semibold w-full">
                    <Link to="/contact" className="flex items-center justify-center">
                      Launch Your Project
                      <Rocket className="ml-2 h-6 w-6 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] h-[220px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mx-auto relative flex items-center justify-center">
                {/* Orbital Rings */}
                <div className="absolute inset-0 border border-teal-500/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-spin-slow-reverse"></div>
                <div className="absolute inset-8 border border-cyan-500/20 rounded-full animate-spin-slow"></div>
                
                {/* Central Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                
                {/* Logo with Space Effects */}
                <div className="relative z-10 group">
                  <img 
                    src={logo} 
                    alt="Zenara Designs - Professional Web Design Agency Toronto Logo" 
                    className="w-full max-w-[450px] h-auto object-contain animate-float"
                    width="450"
                    height="120"
                    loading="eager"
                    decoding="async"
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-purple-500/0 rounded-full blur-xl group-hover:from-teal-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
                </div>
                
                {/* Floating Stars around logo */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
                <div className="absolute top-16 right-12 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle delay-500"></div>
                <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-teal-300 rounded-full animate-twinkle delay-1000"></div>
                <div className="absolute bottom-12 right-8 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-1500"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-twinkle delay-2000"></div>
                <div className="absolute top-1/3 right-4 w-1.5 h-1.5 bg-violet-300 rounded-full animate-twinkle delay-2500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Capabilities Carousel */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" aria-label="Performance metrics">
        {/* Background Stars */}
        <div className="absolute inset-0">
          {/* Small stars */}
          <div className="bg-star" style={{ top: '5%', left: '3%' }}></div>
          <div className="bg-star" style={{ top: '8%', left: '12%' }}></div>
          <div className="bg-star" style={{ top: '12%', left: '25%' }}></div>
          <div className="bg-star" style={{ top: '6%', left: '38%' }}></div>
          <div className="bg-star" style={{ top: '15%', left: '45%' }}></div>
          <div className="bg-star" style={{ top: '9%', left: '58%' }}></div>
          <div className="bg-star" style={{ top: '18%', left: '68%' }}></div>
          <div className="bg-star" style={{ top: '7%', left: '78%' }}></div>
          <div className="bg-star" style={{ top: '14%', left: '88%' }}></div>
          <div className="bg-star" style={{ top: '11%', left: '95%' }}></div>
          
          <div className="bg-star" style={{ top: '25%', left: '2%' }}></div>
          <div className="bg-star" style={{ top: '22%', left: '15%' }}></div>
          <div className="bg-star" style={{ top: '28%', left: '28%' }}></div>
          <div className="bg-star" style={{ top: '31%', left: '42%' }}></div>
          <div className="bg-star" style={{ top: '26%', left: '55%' }}></div>
          <div className="bg-star" style={{ top: '33%', left: '65%' }}></div>
          <div className="bg-star" style={{ top: '29%', left: '75%' }}></div>
          <div className="bg-star" style={{ top: '35%', left: '85%' }}></div>
          <div className="bg-star" style={{ top: '24%', left: '92%' }}></div>
          
          <div className="bg-star" style={{ top: '45%', left: '5%' }}></div>
          <div className="bg-star" style={{ top: '48%', left: '18%' }}></div>
          <div className="bg-star" style={{ top: '42%', left: '32%' }}></div>
          <div className="bg-star" style={{ top: '51%', left: '48%' }}></div>
          <div className="bg-star" style={{ top: '47%', left: '62%' }}></div>
          <div className="bg-star" style={{ top: '44%', left: '72%' }}></div>
          <div className="bg-star" style={{ top: '49%', left: '82%' }}></div>
          <div className="bg-star" style={{ top: '46%', left: '95%' }}></div>
          
          <div className="bg-star" style={{ top: '65%', left: '3%' }}></div>
          <div className="bg-star" style={{ top: '68%', left: '16%' }}></div>
          <div className="bg-star" style={{ top: '72%', left: '29%' }}></div>
          <div className="bg-star" style={{ top: '66%', left: '41%' }}></div>
          <div className="bg-star" style={{ top: '69%', left: '54%' }}></div>
          <div className="bg-star" style={{ top: '74%', left: '67%' }}></div>
          <div className="bg-star" style={{ top: '71%', left: '79%' }}></div>
          <div className="bg-star" style={{ top: '67%', left: '89%' }}></div>
          <div className="bg-star" style={{ top: '73%', left: '96%' }}></div>
          
          <div className="bg-star" style={{ top: '85%', left: '7%' }}></div>
          <div className="bg-star" style={{ top: '88%', left: '21%' }}></div>
          <div className="bg-star" style={{ top: '82%', left: '35%' }}></div>
          <div className="bg-star" style={{ top: '86%', left: '49%' }}></div>
          <div className="bg-star" style={{ top: '91%', left: '63%' }}></div>
          <div className="bg-star" style={{ top: '87%', left: '76%' }}></div>
          <div className="bg-star" style={{ top: '84%', left: '88%' }}></div>
          <div className="bg-star" style={{ top: '89%', left: '94%' }}></div>
          
          {/* Additional scattered stars */}
          <div className="bg-star" style={{ top: '35%', left: '8%' }}></div>
          <div className="bg-star" style={{ top: '55%', left: '25%' }}></div>
          <div className="bg-star" style={{ top: '75%', left: '12%' }}></div>
          <div className="bg-star" style={{ top: '40%', left: '85%' }}></div>
          <div className="bg-star" style={{ top: '60%', left: '90%' }}></div>
          <div className="bg-star" style={{ top: '80%', left: '5%' }}></div>
          <div className="bg-star" style={{ top: '50%', left: '15%' }}></div>
          <div className="bg-star" style={{ top: '70%', left: '35%' }}></div>
          <div className="bg-star" style={{ top: '30%', left: '55%' }}></div>
          <div className="bg-star" style={{ top: '90%', left: '45%' }}></div>
          <div className="bg-star" style={{ top: '20%', left: '70%' }}></div>
          <div className="bg-star" style={{ top: '60%', left: '50%' }}></div>
          <div className="bg-star" style={{ top: '40%', left: '20%' }}></div>
          <div className="bg-star" style={{ top: '80%', left: '60%' }}></div>
          <div className="bg-star" style={{ top: '25%', left: '40%' }}></div>
          <div className="bg-star" style={{ top: '75%', left: '80%' }}></div>
          <div className="bg-star" style={{ top: '45%', left: '70%' }}></div>
          <div className="bg-star" style={{ top: '65%', left: '10%' }}></div>
          <div className="bg-star" style={{ top: '35%', left: '60%' }}></div>
          <div className="bg-star" style={{ top: '85%', left: '30%' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-6 border border-cyan-500/30">
              <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Powered by Modern Technology</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Built for the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Future</span>
            </h3>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Cutting-edge technology stack that scales with your business and delivers exceptional performance.
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl">
            {/* Glassy background effect */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"></div>
            
            {/* Custom fade effects for space theme */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-r from-slate-900 via-purple-900/50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-l from-slate-900 via-purple-900/50 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-scroll-smooth space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 relative z-10 p-3 sm:p-4 md:p-6 lg:p-8">
              {[...capabilities, ...capabilities, ...capabilities].map((capability, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex flex-col items-center justify-center">
                    {/* Glassy card effect */}
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-md rounded-2xl mx-auto mb-2 xs:mb-3 sm:mb-4 md:mb-6 flex items-center justify-center shadow-2xl border border-white/20">
                      {capability.icon}
                    </div>
                    <div className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-white text-center leading-tight drop-shadow-lg px-1 xs:px-2">
                      {capability.title}
                    </div>
                  </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bring Your Ideas to Life - Gamma Inspired */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900" aria-label="Portfolio showcase">
        {/* Space Background Elements */}
        <div className="absolute inset-0">
          {/* Background Stars */}
          <div className="bg-star" style={{ top: '5%', left: '3%' }}></div>
          <div className="bg-star" style={{ top: '8%', left: '12%' }}></div>
          <div className="bg-star" style={{ top: '12%', left: '25%' }}></div>
          <div className="bg-star" style={{ top: '6%', left: '38%' }}></div>
          <div className="bg-star" style={{ top: '15%', left: '45%' }}></div>
          <div className="bg-star" style={{ top: '9%', left: '58%' }}></div>
          <div className="bg-star" style={{ top: '18%', left: '68%' }}></div>
          <div className="bg-star" style={{ top: '7%', left: '78%' }}></div>
          <div className="bg-star" style={{ top: '14%', left: '88%' }}></div>
          <div className="bg-star" style={{ top: '11%', left: '95%' }}></div>
          
          <div className="bg-star" style={{ top: '25%', left: '2%' }}></div>
          <div className="bg-star" style={{ top: '22%', left: '15%' }}></div>
          <div className="bg-star" style={{ top: '28%', left: '28%' }}></div>
          <div className="bg-star" style={{ top: '31%', left: '42%' }}></div>
          <div className="bg-star" style={{ top: '26%', left: '55%' }}></div>
          <div className="bg-star" style={{ top: '33%', left: '65%' }}></div>
          <div className="bg-star" style={{ top: '29%', left: '75%' }}></div>
          <div className="bg-star" style={{ top: '35%', left: '85%' }}></div>
          <div className="bg-star" style={{ top: '24%', left: '92%' }}></div>
          
          <div className="bg-star" style={{ top: '45%', left: '5%' }}></div>
          <div className="bg-star" style={{ top: '48%', left: '18%' }}></div>
          <div className="bg-star" style={{ top: '42%', left: '32%' }}></div>
          <div className="bg-star" style={{ top: '51%', left: '48%' }}></div>
          <div className="bg-star" style={{ top: '47%', left: '62%' }}></div>
          <div className="bg-star" style={{ top: '44%', left: '72%' }}></div>
          <div className="bg-star" style={{ top: '49%', left: '82%' }}></div>
          <div className="bg-star" style={{ top: '46%', left: '95%' }}></div>
          
          <div className="bg-star" style={{ top: '65%', left: '3%' }}></div>
          <div className="bg-star" style={{ top: '68%', left: '16%' }}></div>
          <div className="bg-star" style={{ top: '72%', left: '29%' }}></div>
          <div className="bg-star" style={{ top: '66%', left: '41%' }}></div>
          <div className="bg-star" style={{ top: '69%', left: '54%' }}></div>
          <div className="bg-star" style={{ top: '74%', left: '67%' }}></div>
          <div className="bg-star" style={{ top: '71%', left: '79%' }}></div>
          <div className="bg-star" style={{ top: '67%', left: '89%' }}></div>
          <div className="bg-star" style={{ top: '73%', left: '96%' }}></div>
          
          <div className="bg-star" style={{ top: '85%', left: '7%' }}></div>
          <div className="bg-star" style={{ top: '88%', left: '21%' }}></div>
          <div className="bg-star" style={{ top: '82%', left: '35%' }}></div>
          <div className="bg-star" style={{ top: '86%', left: '49%' }}></div>
          <div className="bg-star" style={{ top: '91%', left: '63%' }}></div>
          <div className="bg-star" style={{ top: '87%', left: '76%' }}></div>
          <div className="bg-star" style={{ top: '89%', left: '88%' }}></div>
          <div className="bg-star" style={{ top: '84%', left: '95%' }}></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-4 border border-cyan-500/30 mx-auto lg:mx-0">
                <Rocket className="h-5 w-5 text-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-cyan-300">Transform Your Vision</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Bring your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ideas</span> to life
              </h2>
              
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                At Zenara Designs we specialize in creating beautiful websites for any industry and we work with you to bring your vision to life without all the technical details so you can focus on your core business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 w-full sm:w-auto">
                  <Link to="/services">
                    <span>Our Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto">
                  <Link to="/projects">
                    <span>Our Projects</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Right Side - Vertical Sliding Animation */}
            <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden order-2 lg:order-1">
              {/* Vertical sliding container */}
              <div className="absolute inset-0 flex flex-col animate-vertical-scroll-smooth">
                {/* Website Example 1 */}
                <div className="flex-shrink-0 mb-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-6">
                      <div className="h-full bg-white/90 rounded-xl shadow-lg overflow-hidden">
                        <img 
                          src={realEstateWebImage} 
                          alt="Real Estate Website Design Toronto - Professional Property Showcase Platform" 
                          className="w-full h-full object-cover"
                          width="400"
                          height="225"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-lg">Real Estate</h3>
                      <p className="text-slate-300 text-sm">Property showcase platform</p>
                    </div>
                  </div>
                </div>
                
                {/* Website Example 2 */}
                <div className="flex-shrink-0 mb-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6">
                      <div className="h-full bg-white/90 rounded-xl shadow-lg overflow-hidden">
                        <img 
                          src={rocketWebImage} 
                          alt="Rocket Launch Website Design Toronto - Modern Tech Startup Platform" 
                          className="w-full h-full object-cover"
                          width="400"
                          height="225"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-lg">Tech Startup</h3>
                      <p className="text-slate-300 text-sm">Innovative tech platform</p>
                    </div>
                  </div>
                </div>
                
                {/* Website Example 3 */}
                <div className="flex-shrink-0 mb-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-cyan-500/20 p-6">
                      <div className="h-full bg-white/90 rounded-xl shadow-lg overflow-hidden">
                        <img 
                          src={gardenWebImage} 
                          alt="Garden & Landscaping Website Design GTA - Professional Horticulture Business Platform" 
                          className="w-full h-full object-cover"
                          width="400"
                          height="225"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-lg">Garden Center</h3>
                      <p className="text-slate-300 text-sm">Eco-friendly business site</p>
                    </div>
                  </div>
                </div>
                
                {/* Website Example 4 */}
                <div className="flex-shrink-0 mb-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-teal-500/20 to-purple-500/20 p-6">
                      <div className="h-full bg-white/90 rounded-xl shadow-lg overflow-hidden">
                        <img 
                          src={travelWebImage} 
                          alt="Travel & Tourism Website Design Toronto - Adventure Booking Platform" 
                          className="w-full h-full object-cover"
                          width="400"
                          height="225"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-lg">Travel Agency</h3>
                      <p className="text-slate-300 text-sm">Adventure booking platform</p>
                    </div>
                  </div>
                </div>
                
                {/* Duplicate for seamless loop */}
                {/* Website Example 1 (Duplicate) */}
                <div className="flex-shrink-0 mb-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-6">
                      <div className="h-full bg-white/90 rounded-xl shadow-lg overflow-hidden">
                        <img 
                          src={realEstateWebImage} 
                          alt="Real Estate Website Design Toronto - Property Showcase Platform" 
                          className="w-full h-full object-cover"
                          width="400"
                          height="225"
                          loading="eager"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-lg">Real Estate</h3>
                      <p className="text-slate-300 text-sm">Property showcase platform</p>
                    </div>
                  </div>
                </div>
                
                {/* Website Example 2 (Duplicate) */}
                <div className="flex-shrink-0 mb-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6">
                      <div className="h-full bg-white/90 rounded-xl shadow-lg overflow-hidden">
                        <img 
                          src={rocketWebImage} 
                          alt="Rocket Launch Website Design Toronto - Modern Tech Startup Platform" 
                          className="w-full h-full object-cover"
                          width="400"
                          height="225"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-lg">Tech Startup</h3>
                      <p className="text-slate-300 text-sm">Innovative tech platform</p>
                    </div>
                  </div>
                </div>
                
                {/* Website Example 3 (Duplicate) */}
                <div className="flex-shrink-0 mb-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-cyan-500/20 p-6">
                      <div className="h-full bg-white/90 rounded-xl shadow-lg overflow-hidden">
                        <img 
                          src={gardenWebImage} 
                          alt="Garden & Landscaping Website Design GTA - Professional Horticulture Business Platform" 
                          className="w-full h-full object-cover"
                          width="400"
                          height="225"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-lg">Garden Center</h3>
                      <p className="text-slate-300 text-sm">Eco-friendly business site</p>
                    </div>
                  </div>
                </div>
                
                {/* Website Example 4 (Duplicate) */}
                <div className="flex-shrink-0 mb-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-teal-500/20 to-purple-500/20 p-6">
                      <div className="h-full bg-white/90 rounded-xl shadow-lg overflow-hidden">
                        <img 
                          src={travelWebImage} 
                          alt="Travel & Tourism Website Design Toronto - Adventure Booking Platform" 
                          className="w-full h-full object-cover"
                          width="400"
                          height="225"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-lg">Travel Agency</h3>
                      <p className="text-slate-300 text-sm">Adventure booking platform</p>
                    </div>
                  </div>
          </div>
              </div>
              
              {/* Fade effects for top and bottom */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-900 via-cyan-900/50 to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 via-cyan-900/50 to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-indigo-900">
        {/* Space Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle Stars */}
          <div className="absolute top-16 left-16 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle"></div>
          <div className="absolute top-32 right-24 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-48 left-1/3 w-1 h-1 bg-teal-300 rounded-full animate-twinkle delay-2000"></div>
          <div className="absolute top-24 right-1/3 w-1 h-1 bg-violet-300 rounded-full animate-twinkle delay-500"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <TrendingUp className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Proven Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Numbers That <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Speak Volumes</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our track record speaks for itself. Here's what our clients achieve with our solutions.
            </p>
          </div>
          <div ref={metricsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {successMetrics.map((metric, index) => {
              let displayNumber = metric.number;
              
              // Map the animated numbers to the correct metrics
              if (index === 0) displayNumber = `${animatedNumbers.conversion}%`;
              else if (index === 1) displayNumber = `${animatedNumbers.weeks}`;
              else if (index === 2) displayNumber = `${animatedNumbers.satisfaction}%`;
              else if (index === 3) displayNumber = `${animatedNumbers.mobile}%`;
              
              return (
                <div key={index} className="text-center h-full">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl h-full flex flex-col relative overflow-hidden">
                    {/* Glassmorphism Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                        {metric.icon}
                      </div>
                      <div className="text-5xl font-bold text-white mb-3 flex-shrink-0">
                        {displayNumber}
                      </div>
                      <div className="text-lg font-semibold text-cyan-300 mb-4 flex-shrink-0">{metric.label}</div>
                      <p className="text-slate-300 text-sm leading-relaxed flex-grow">{metric.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-black via-purple-900 to-slate-900">
        {/* Space Background Elements */}
        <div className="absolute inset-0">
          {/* Shooting Stars */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-twinkle delay-2000"></div>
          <div className="absolute top-32 right-1/4 w-1 h-1 bg-violet-400 rounded-full animate-twinkle delay-500"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
            {/* Glassmorphism Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
                <Rocket className="h-5 w-5 text-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-cyan-300">Ready to Launch?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Amazing</span>
          </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Your digital transformation starts with a single conversation. Let's create a website that not only looks incredible but drives real business growth.
          </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 sm:px-10 py-4 sm:py-6 rounded-2xl font-semibold text-base sm:text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
            <Link to="/contact">
                    Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
                <Button asChild size="lg" className="border-2 border-cyan-400 text-cyan-300 bg-cyan-500/10 px-6 sm:px-8 py-4 sm:py-6 rounded-2xl font-semibold text-base sm:text-lg backdrop-blur-sm hover:bg-cyan-500/20 hover:border-cyan-300 hover:text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <Link to="/projects">Browse Our Web Design Portfolio</Link>
                </Button>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">24h Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Updated Date - Outside main content box */}
        <div className="text-center py-4">
          <p className="text-slate-400 text-sm">
            Content updated: January 2025
          </p>
        </div>
      </section>

    </div>
  );
};

export default memo(Home);