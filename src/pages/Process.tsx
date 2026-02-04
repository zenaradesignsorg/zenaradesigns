import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Code2, Search, Palette, Wrench, Rocket, Headphones, Clock, Users, Target, Zap, Shield, Globe, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollToTop, useSEO } from '@/hooks';
import { useState, useEffect, useRef, memo, useMemo } from 'react';
import { PERFORMANCE_THRESHOLDS } from '@/lib/constants';

interface ProcessStep {
  phase: string;
  details: string[];
  icon: React.ComponentType<any>;
  duration: string;
  deliverables: string[];
  tools: string[];
}

const Process = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  // SEO meta tags
  useSEO({
    title: "Our Process | Web Design Toronto | Zenara Designs",
    description: "Discover our proven 6-step web design process in Toronto. From discovery to launch, we transform your ideas into high-performing digital solutions.",
    canonical: "https://zenaradesigns.com/process"
  });

  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState<number[]>([]);

  const process = useMemo((): ProcessStep[] => [
    {
      phase: "Discovery & Research",
      details: [
        "Comprehensive business goals analysis and strategy alignment",
        "Deep dive into target audience demographics and behavior patterns", 
        "Competitive landscape analysis and market positioning",
        "Technical requirements gathering and infrastructure planning",
        "Brand voice and messaging strategy development"
      ],
      icon: Search,
      duration: "1-2 weeks",
      deliverables: ["Project brief", "User personas", "Competitive analysis", "Technical specifications"],
      tools: ["Figma", "Google Analytics", "SEMrush", "Hotjar", "User interviews"]
    },
    {
      phase: "Design & Prototyping", 
      details: [
        "Wireframe creation and user flow mapping",
        "Visual design mockups with brand consistency",
        "Interactive prototype development for user testing",
        "Responsive design across all device breakpoints",
        "Accessibility compliance and usability optimization"
      ],
      icon: Palette,
      duration: "2-3 weeks",
      deliverables: ["Wireframes", "Design mockups", "Interactive prototypes", "Style guide"],
      tools: ["Figma", "Adobe Creative Suite", "Principle", "InVision", "Sketch"]
    },
    {
      phase: "Development & Build",
      details: [
        "Modern React/Next.js development with TypeScript",
        "Component-based architecture for scalability",
        "Performance optimization and Core Web Vitals",
        "Cross-browser compatibility testing",
        "API integration and third-party service connections"
      ],
      icon: Code2,
      duration: "3-4 weeks",
      deliverables: ["Fully functional website", "Admin dashboard", "API documentation", "Performance report"],
      tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Git", "Vercel"]
    },
    {
      phase: "Quality Assurance & Testing",
      details: [
        "Comprehensive functionality testing across all features",
        "Performance testing and optimization (LCP, FID, CLS)",
        "Cross-device and cross-browser compatibility",
        "SEO optimization and meta tag implementation",
        "Security testing and vulnerability assessment"
      ],
      icon: Shield,
      duration: "1 week",
      deliverables: ["Test reports", "Performance metrics", "SEO audit", "Security scan"],
      tools: ["Lighthouse", "GTmetrix", "BrowserStack", "Screaming Frog", "OWASP ZAP"]
    },
    {
      phase: "Launch & Deployment",
      details: [
        "DNS configuration and SSL certificate setup",
        "CDN configuration for global performance",
        "Google Analytics and tracking implementation",
        "Domain setup and email configuration",
        "Final testing and go-live checklist"
      ],
      icon: Rocket,
      duration: "2-3 days",
      deliverables: ["Live website", "Analytics setup", "SSL certificate", "Backup systems"],
      tools: ["Vercel", "Cloudflare", "Google Analytics", "Google Search Console"]
    },
    {
      phase: "Ongoing Support & Maintenance",
      details: [
        "Monthly performance monitoring and optimization",
        "Content updates and feature enhancements",
        "Security patches and software updates",
        "Analytics reporting and insights",
        "24/7 technical support and emergency fixes"
      ],
      icon: Headphones,
      duration: "Ongoing",
      deliverables: ["Monthly reports", "Performance updates", "Security patches", "Support tickets"],
      tools: ["Monitoring tools", "GitHub", "Slack", "Analytics dashboards"]
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

  const stats = useMemo(() => [
    { label: "Average Project Duration", value: "6-8 weeks", icon: Clock },
    { label: "Client Satisfaction Rate", value: "98%", icon: Users },
    { label: "On-Time Delivery", value: "100%", icon: Target },
    { label: "Performance Score", value: "95+", icon: Zap }
  ], []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
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
              <span className="text-xs sm:text-sm font-medium text-cyan-300">Our Proven Process</span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              How We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Bring Ideas to Life</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              A comprehensive, proven methodology that transforms your vision into a high-performing digital masterpiece. 
              From initial concept to ongoing support, we guide you through every step of the journey.
            </p>
          </div>

        </div>
      </section>

      {/* Detailed Process Timeline */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
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
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">6-Step Process</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              A detailed breakdown of how we transform your ideas into reality
            </p>
          </div>
          
          {/* Animated Vertical Timeline */}
          <div className="max-w-4xl mx-auto">
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
                    {/* Timeline Node with Icon */}
                    <div className={`absolute left-4 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full border-2 border-slate-900 shadow-lg z-10 group-hover:scale-125 transition-all duration-1000 ${
                      visibleTimelineItems.includes(index) 
                        ? 'opacity-100' 
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{
                      top: index === 0 ? '0rem' : '0.5rem',
                      left: 'calc(1.5rem - 1.5rem)',
                      transitionDelay: `${index * 200}ms`
                    }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <phase.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="timeline-card ml-16 sm:ml-20 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 relative overflow-hidden">
                      {/* Glassmorphism Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                      
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Phase Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{phase.phase}</h3>
                            <div className="flex items-center space-x-2 text-cyan-300">
                              <Clock className="h-4 w-4" />
                              <span className="text-sm font-medium">{phase.duration}</span>
                            </div>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <phase.icon className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-400" />
                          </div>
                        </div>
                        
                        {/* Phase Details */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">What We Do:</h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {phase.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start space-x-3 text-slate-300">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm sm:text-base leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables and Tools */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-cyan-300 mb-2">Deliverables:</h4>
                            <ul className="space-y-1">
                              {phase.deliverables.map((deliverable, deliverableIndex) => (
                                <li key={deliverableIndex} className="text-slate-300 text-sm flex items-center">
                                  <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-cyan-300 mb-2">Tools & Technologies:</h4>
                            <ul className="space-y-1">
                              {phase.tools.map((tool, toolIndex) => (
                                <li key={toolIndex} className="text-slate-300 text-sm flex items-center">
                                  <div className="w-1 h-1 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                                  {tool}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </div>
                    
                    {/* Connecting Arrow (except for last item) */}
                    {index < process.length - 1 && (
                      <div className="absolute left-5 sm:left-7 top-20 sm:top-24 w-0 h-0 border-l-3 border-r-3 border-t-6 sm:border-l-4 sm:border-r-4 sm:border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/50"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Why Our Process <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Our methodology is built on years of experience and proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 text-center">
              <BarChart3 className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data-Driven Decisions</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Every step is backed by analytics and user research to ensure your website performs at its best.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 text-center">
              <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Collaborative Approach</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                You're involved at every stage with regular check-ins and feedback opportunities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 text-center">
              <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Agile Methodology</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Flexible approach that adapts to your needs and allows for changes along the way.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 text-center">
              <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Rigorous testing at every stage ensures your website is secure, fast, and reliable.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 text-center">
              <Globe className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Future-Proof Technology</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Built with modern technologies that will serve your business for years to come.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 text-center">
              <Headphones className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Continuous support and maintenance to keep your website running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 text-white">
            Ready to Start Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Project?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and see how our proven process can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <div 
              className="relative inline-block rounded-full p-[4px] transition-all duration-300 group"
              style={{
                background: 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(168, 85, 247)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'}
            >
              <Button asChild className="bg-black hover:bg-purple-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
                <Link to="/contact" className="flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Process);
