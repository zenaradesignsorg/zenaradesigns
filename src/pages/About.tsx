import { Users, Target, CheckCircle, Sparkles, Zap, Heart, Rocket, Code2, ArrowRight, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollToTop, useSEO } from '@/hooks';
import { useState, useEffect, useRef, memo, useMemo, useCallback } from 'react';
import { PERFORMANCE_THRESHOLDS } from '@/lib/constants';
import type { TeamMember, ProcessStep, Differentiator, Position } from '@/lib/types';
import logo from '@/assets/zenaralogo-transparentbg.png';
import saturnImage from '@/assets/saturn.png';
import moonImage from '@/assets/moon.png';

const About = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  // SEO meta tags
  useSEO({
    title: "About Zenara Designs | Web Design Team Toronto | Zenara",
    description: "Meet Toronto's leading web design team at Zenara Designs. Learn about our expertise, process, and commitment to creating exceptional digital experiences for GTA businesses. Contact us today!",
    canonical: "https://zenaradesigns.com/about"
  });
  
  const [visibleTimelineItems, setVisibleTimelineItems] = useState<number[]>([]);
  const [saturnPosition, setSaturnPosition] = useState<Position>({ scale: 1, x: 0, y: 0, opacity: 0.2 });
  const [moonPosition, setMoonPosition] = useState<Position>({ scale: 0, x: 0, y: 0, opacity: 0 });
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const zenaraDifferenceRef = useRef<HTMLDivElement>(null);


  const team = useMemo((): TeamMember[] => [
    {
      name: "Pratik Mistry",
      role: "Lead Developer", 
      bio: "4-5 years of experience in software engineering with a strong foundation in computer science. Passionate about building scalable and efficient web applications."
    },
    {
      name: "Kavin Mural",
      role: "Lead Developer",
      bio: "4-5 years of experience in software engineering with a computer science background. Specializes in modern web technologies and full-stack development."
    },
    {
      name: "Ryan Honeybone", 
      role: "UX/UI Designer",
      bio: "3 years of experience in design with a strong educational background in design principles. Creates intuitive and beautiful user experiences that drive engagement."
    }
  ], []);

  const process = useMemo((): ProcessStep[] => [
    {
      phase: "Discovery",
      details: ["Business goals analysis", "Target audience research", "Competitive landscape review", "Technical requirements gathering"]
    },
    {
      phase: "Prototyping", 
      details: ["Mock-up designs", "Button/links design flow", "Image/video placement design", "Systems design and software architecture"]
    },
    {
      phase: "Build",
      details: ["Modern development practices", "Component-based architecture", "Performance optimization", "Cross-browser testing"]
    },
    {
      phase: "Quality Testing",
      details: ["Performance testing", "Device compatibility check", "SEO optimization", "Mobile responsiveness and optimization", "Custom functionality testing"]
    },
    {
      phase: "Launch",
      details: ["DNS setup & SSL", "CDN configuration", "Analytics integration", "Domain hookup", "Email notification config"]
    },
    {
      phase: "Support",
      details: ["Monthly maintenance", "Content updates", "Security patches", "Performance monitoring"]
    }
  ], []);

  // Timeline animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-timeline-index') || '0');
          if (entry.isIntersecting) {
            setVisibleTimelineItems(prev => 
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisibleTimelineItems(prev => 
              prev.filter(item => item !== index)
            );
          }
        });
      },
      { threshold: PERFORMANCE_THRESHOLDS.INTERSECTION_OBSERVER }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Saturn scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (!heroSectionRef.current) return;

      const section = heroSectionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Start animation when section is 80% visible (earlier trigger)
      const triggerPoint = windowHeight * 0.8; // Start when section top is at 80% of viewport height
      
      if (sectionTop > triggerPoint) {
        // Reset to initial position when section is still mostly visible
        setSaturnPosition({ scale: 1, x: 0, y: 0, opacity: 0.2 });
        return;
      }
      
      // Calculate scroll progress from trigger point to completely past section
      const scrollFromTrigger = Math.max(0, triggerPoint - sectionTop);
      const maxScroll = triggerPoint + sectionHeight; // Total scroll distance
      const scrollProgress = Math.min(1, scrollFromTrigger / maxScroll);
      
      let newPosition = { scale: 1, x: 0, y: 0, opacity: 0.2 };
      
      if (scrollProgress < 0.3) {
        // Phase 1: Zoom in (starts earlier)
        const phaseProgress = scrollProgress / 0.3;
        newPosition.scale = 1 + (1.5 * phaseProgress); // Scale from 1 to 2.5
        newPosition.x = 0;
        newPosition.y = 0;
        newPosition.opacity = 0.2 + (0.3 * phaseProgress); // Increase opacity
      } else {
        // Phase 2: Move left and down, then fade out
        const phaseProgress = (scrollProgress - 0.3) / 0.7;
        newPosition.scale = 2.5; // Keep zoomed in
        newPosition.x = -300 * phaseProgress; // Move left
        newPosition.y = 200 * phaseProgress; // Move down
        newPosition.opacity = 0.5 - (0.5 * phaseProgress); // Fade out
      }
      
      setSaturnPosition(newPosition);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Moon scroll animation for The Zenara Difference section
  useEffect(() => {
    const handleScroll = () => {
      if (!zenaraDifferenceRef.current) return;

      const section = zenaraDifferenceRef.current;
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Start animation when section comes into view
      const triggerPoint = windowHeight * 0.8; // Start when section top is at 80% of viewport height
      
      if (sectionTop > triggerPoint) {
        // Reset to initial position when section is not yet visible
        setMoonPosition({ scale: 0, x: 0, y: 0, opacity: 0 });
        return;
      }
      
      // Calculate scroll progress from trigger point to completely past section
      const scrollFromTrigger = Math.max(0, triggerPoint - sectionTop);
      const maxScroll = triggerPoint + sectionHeight; // Total scroll distance
      const scrollProgress = Math.min(1, scrollFromTrigger / maxScroll);
      
      let newPosition = { scale: 0, x: 0, y: 0, opacity: 0 };
      
      if (scrollProgress < 0.2) {
        // Phase 1: Zoom in and appear
        const phaseProgress = scrollProgress / 0.2;
        newPosition.scale = 1 + (1 * phaseProgress); // Scale from 1 to 2 (smaller final size)
        newPosition.x = 0;
        newPosition.y = 0;
        newPosition.opacity = 0.2 + (0.3 * phaseProgress); // Increase opacity
      } else {
        // Phase 2: Move right and down, then fade out (starts earlier)
        const phaseProgress = (scrollProgress - 0.2) / 0.8;
        newPosition.scale = 2; // Keep zoomed in (smaller size)
        newPosition.x = 500 * phaseProgress; // Move right (more drastic)
        newPosition.y = 400 * phaseProgress; // Move down (more drastic)
        newPosition.opacity = 0.5 - (0.5 * phaseProgress); // Fade out
      }
      
      setMoonPosition(newPosition);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" role="main" aria-label="About page">
      {/* Space-Themed Hero Section */}
      <section ref={heroSectionRef} className="about-hero py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-black via-indigo-900 to-purple-900">
        {/* Saturn in top right */}
        <div 
          className="absolute top-4 right-4 sm:top-8 sm:right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 transition-all duration-300 ease-out"
          style={{
            transform: `scale(${saturnPosition.scale}) translate(${saturnPosition.x}px, ${saturnPosition.y}px)`,
            opacity: saturnPosition.opacity
          }}
        >
          <img 
            src={saturnImage} 
            alt="Decorative Saturn planet illustration for web design agency background" 
            className="w-full h-full object-contain"
            width="200"
            height="200"
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Shooting Stars */}
          <div className="shooting-star shooting-star-1"></div>
          <div className="shooting-star shooting-star-2"></div>
          <div className="shooting-star shooting-star-3"></div>
          <div className="shooting-star shooting-star-4"></div>
          <div className="shooting-star shooting-star-5"></div>
          <div className="shooting-star shooting-star-6"></div>
          <div className="shooting-star shooting-star-7"></div>
          <div className="shooting-star shooting-star-8"></div>
          
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
          <div className="bg-star bg-star-21"></div>
          <div className="bg-star bg-star-22"></div>
          <div className="bg-star bg-star-23"></div>
          <div className="bg-star bg-star-24"></div>
          <div className="bg-star bg-star-25"></div>
          <div className="bg-star bg-star-26"></div>
          <div className="bg-star bg-star-27"></div>
          <div className="bg-star bg-star-28"></div>
          <div className="bg-star bg-star-29"></div>
          <div className="bg-star bg-star-30"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-cyan-500/30">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300">About Zenara Designs</span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              We're not just developers,<br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">we're digital architects</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
              Every business deserves a digital presence that not only looks amazing but drives real results. 
              We bridge the gap between cutting-edge technology and thoughtful design strategy. Based in Toronto and serving the GTA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
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
                    Start Your Project
                    <Rocket className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* The Zenara Difference - Space Theme */}
      <section ref={zenaraDifferenceRef} className="about-section py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-purple-900">
        {/* Moon in top left */}
        <div 
          className="absolute top-4 left-4 sm:top-8 sm:left-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 transition-all duration-300 ease-out"
          style={{
            transform: `scale(${moonPosition.scale}) translate(${moonPosition.x}px, ${moonPosition.y}px)`,
            opacity: moonPosition.opacity
          }}
        >
          <img 
            src={moonImage} 
            alt="Decorative moon illustration for web design agency background" 
            className="w-full h-full object-contain"
            width="150"
            height="150"
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* Space Background Elements */}
        <div className="absolute inset-0">
          {/* Shooting Stars */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-twinkle delay-2000"></div>
          <div className="absolute top-32 right-1/4 w-1 h-1 bg-violet-400 rounded-full animate-twinkle delay-500"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-cyan-500/30">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300">Why Choose Us</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              The <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zenara Difference</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              We're not just another web agency. We're your strategic partner in digital success, combining technical excellence with business acumen.
            </p>
          </div>
          
          {/* Hexagonal Grid Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {[
                { icon: <Zap className="h-8 w-8" />, title: "Speed with Quality", description: "Fast delivery without compromising on excellence" },
                { icon: <Heart className="h-8 w-8" />, title: "Transparent Communication", description: "Honest, clear communication throughout every project" },
                { icon: <Target className="h-8 w-8" />, title: "Results-Driven Design", description: "Every decision made with your business goals in mind" }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  {/* Space-themed Hexagonal Card */}
                  <div className="hexagon-card relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
                    {/* Glassmorphism Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                    
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Rounded Hexagon shape using CSS clip-path */}
                    <div className="p-6 sm:p-8 text-center relative z-10" style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                      minHeight: '280px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '1.5rem',
                      paddingBottom: '1.5rem'
                    }}>
                      
                      {/* Icon */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{item.title}</h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                  </div>
                ))}
            </div>
            
            {/* Central Connecting Element with Dividers */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 hidden lg:flex">
              {/* Left Divider */}
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-cyan-500/50"></div>
              
              {/* Central Element */}
              <div className="mx-6 sm:mx-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-cyan-500/30 backdrop-blur-md shadow-2xl">
                <img 
                  src={logo} 
                  alt="Zenara Designs - Professional Web Design Agency Toronto Logo" 
                  width="60"
                  height="16"
                  className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
              
              {/* Right Divider */}
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-500/30 to-purple-500/50"></div>
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: <Rocket className="h-8 w-8" />, title: "Clarity over Complexity", description: "Simple solutions that work beautifully" },
                { icon: <Shield className="h-8 w-8" />, title: "Security First", description: "Built with enterprise-grade security standards" },
                { icon: <TrendingUp className="h-8 w-8" />, title: "Fair Pricing", description: "Transparent, competitive pricing for all budgets" }
              ].map((item, index) => (
                <div key={index + 3} className="group relative">
                  {/* Space-themed Hexagonal Card */}
                  <div className="hexagon-card relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
                    {/* Glassmorphism Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                    
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Rounded Hexagon shape using CSS clip-path */}
                    <div className="p-6 sm:p-8 text-center relative z-10" style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                      minHeight: '280px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '1.5rem',
                      paddingBottom: '1.5rem'
                    }}>
                      
                      {/* Icon */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{item.title}</h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dream Team - Space Theme */}
      <section className="about-section py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-purple-900">
        {/* Space Background Elements */}
        <div className="absolute inset-0">
          {/* Shooting Stars */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-twinkle delay-2000"></div>
          <div className="absolute top-32 right-1/4 w-1 h-1 bg-violet-400 rounded-full animate-twinkle delay-500"></div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-cyan-500/30">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300">Meet Our Team</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              The <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Dream Team</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Passionate professionals dedicated to turning your vision into digital reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  {/* Glassmorphism Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center flex flex-col h-full">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg flex-shrink-0">
                      <Users className="h-8 w-8 sm:h-10 sm:w-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white flex-shrink-0">{member.name}</h3>
                    <p className="text-cyan-300 font-semibold mb-3 sm:mb-4 text-base sm:text-lg flex-shrink-0">{member.role}</p>
                    <p className="text-slate-300 leading-relaxed flex-grow text-sm sm:text-base">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Bring Ideas to Life - Space Theme */}
      <section className="about-timeline py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Space Background Elements */}
        <div className="absolute inset-0">
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
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-cyan-500/30">
              <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300">Our Process</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              How We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Bring Ideas to Life</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              A proven methodology that transforms your vision into a digital masterpiece
            </p>
          </div>
          
          {/* Animated Vertical Timeline */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-teal-500"></div>
              
              
              {/* Timeline Items */}
              <div className="space-y-8 sm:space-y-12">
            {process.map((phase, index) => (
                  <div 
                    key={index} 
                    ref={(el) => (timelineRefs.current[index] = el)}
                    data-timeline-index={index}
                    className={`relative group transition-all duration-1000 ${
                      visibleTimelineItems.includes(index) 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    {/* Timeline Node with Number */}
                    <div className={`absolute left-4 sm:left-6 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full border-2 border-slate-900 shadow-lg z-10 group-hover:scale-125 transition-all duration-1000 ${
                      visibleTimelineItems.includes(index) 
                        ? 'opacity-100' 
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{
                      top: index === 0 ? '0rem' : '0.5rem', // First dot at very top
                      left: 'calc(1.5rem - 1rem)', // Center on timeline line
                      transitionDelay: `${index * 200}ms`
                    }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    {index + 1}
                  </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="timeline-card ml-12 sm:ml-16 bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 relative overflow-hidden">
                      {/* Glassmorphism Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                      
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Phase Header */}
                        <div className="mb-3 sm:mb-4">
                          <h3 className="text-xl sm:text-2xl font-bold text-white">{phase.phase}</h3>
                </div>
                        
                        {/* Phase Details */}
                        <ul className="space-y-2 sm:space-y-3">
                  {phase.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2 sm:space-x-3 text-slate-300">
                              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span className="text-xs sm:text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </div>
                    
                    {/* Connecting Arrow (except for last item) */}
                    {index < process.length - 1 && (
                      <div className="absolute left-5 sm:left-7 top-16 sm:top-20 w-0 h-0 border-l-3 border-r-3 border-t-6 sm:border-l-4 sm:border-r-4 sm:border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/50"></div>
                    )}
              </div>
            ))}
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="relative max-w-3xl mx-auto">
              {/* Enhanced Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-teal-500/20 rounded-3xl blur-sm"></div>
              <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                      <Code2 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Ready to See Our Process?
                    </h3>
                  </div>
                  <p className="text-slate-300 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                    Discover our detailed 6-step methodology, from discovery to launch and beyond. See exactly how we transform your vision into digital reality.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div 
                      className="relative inline-block rounded-full p-[4px] transition-all duration-300 group"
                      style={{
                        background: 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(168, 85, 247)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'}
                    >
                      <Button asChild className="bg-black hover:bg-purple-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-base font-semibold">
                        <Link to="/process" className="flex items-center justify-center">
                          Explore Our Process
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                    <div 
                      className="relative inline-block rounded-full p-[4px] transition-all duration-300 group"
                      style={{
                        background: 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(168, 85, 247)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'}
                    >
                      <Button asChild className="bg-black hover:bg-purple-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-base font-semibold">
                        <Link to="/contact" className="flex items-center justify-center">
                          Start Your Project
                          <Rocket className="ml-2 h-5 w-5 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125" />
                        </Link>
                      </Button>
                    </div>
                  </div>
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

export default memo(About);