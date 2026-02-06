import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle, Layers, Heart, ChevronLeft, ChevronRight, Rocket, TrendingUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollToTop, useSEO } from '@/hooks';
import { useState, useEffect, useRef, memo, useCallback, useMemo } from 'react';
import StructuredData from '@/components/StructuredData';
import logo from '@/assets/zenaralogo-transparentbg.png';
import realEstateWebImage from '@/assets/website-example-realestate.png';
import rocketWebImage from '@/assets/website-example-rocket.png';
import gardenWebImage from '@/assets/website-example-garden.png';
import travelWebImage from '@/assets/website-example-travel.png';
import moonImage from '@/assets/moon.png';

const Services = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  // SEO meta tags
  useSEO({
    title: "Web Design Services Toronto | Business Cards & Logo | Zenara",
    description: "Complete web design services in Toronto & GTA. Custom websites, business cards, logo design, and digital marketing. Get a free consultation for your project today!",
    canonical: "https://zenaradesigns.com/services",
    structuredData: {
      type: 'service',
      serviceName: 'Web Design Services',
      serviceDescription: 'Complete web design and development services including custom websites, business cards, logo design, and digital marketing for businesses in Toronto and the Greater Toronto Area.'
    }
  });
  
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [imageVisibleItems, setImageVisibleItems] = useState<number[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const handleImageIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.getAttribute('data-image-index') || '0');
        setImageVisibleItems(prev => [...prev, index]);
      } else {
        const index = parseInt(entry.target.getAttribute('data-image-index') || '0');
        setImageVisibleItems(prev => prev.filter(item => item !== index));
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleItemIntersection, { threshold: 0.2 });
    const imageObserver = new IntersectionObserver(handleImageIntersection, { threshold: 0.3 });

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    imageRefs.current.forEach((ref) => {
      if (ref) imageObserver.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      imageRefs.current.forEach((ref) => {
        if (ref) imageObserver.unobserve(ref);
      });
    };
  }, [handleItemIntersection, handleImageIntersection]);

  const services = useMemo(() => [
    {
      emoji: "💻",
      title: "Website Design & Development",
      description: "Complete web solutions built for performance and conversion.",
      features: [
        "Dedicated web designer and mock-ups made for customers",
        "Modern web design with cutting-edge web stack",
        "Fully responsive on mobile and optimized for all devices",
        "Performance, security, and privacy built-in",
        "SEO optimization for better search rankings",
        "Custom features, forms, and integrations"
      ]
    },
    {
      emoji: "🔒",
      title: "Web Hosting & Security", 
      description: "Enterprise-grade hosting with built-in security and monitoring.",
      features: [
        "Affordable plans that fit your budget",
        "Scales as your traffic and business grows",
        "Automated backups + easy restores",
        "Global CDN for faster load times",
        "Uptime monitoring with instant alerts",
        "Security best practices + web firewall protection",
        "SSL included with every plan"
      ]
    },
    {
      emoji: "🔧",
      title: "Maintenance & Support",
      description: "Keep your site running smoothly with ongoing care.",
      features: [
        "Monthly security and performance updates",
        "Amazing uptime with 99.9% reliability",
        "Content changes and copy revisions",
        "Bug fixes and compatibility updates",
        "Small feature additions and improvements",
        "Priority technical support when you need it",
        "Complete setup support and guidance"
      ]
    },
    {
      emoji: "🎨",
      title: "Brand & Collateral",
      description: "Complete brand identity and marketing materials.",
      features: [
        "Custom logo design and comprehensive brand guidelines",
        "Business card design with print-ready files",
        "Social media profile and cover setup",
        "Branded social media post templates",
        "Complete brand kit handoff with all assets",
        "Google Business setup and optimization",
        "Additional brand-related services available on request"
      ]
    }
  ], []);

  const testimonials = useMemo(() => [
    {
      quote: "Zenara delivered a clean, fast site in days. Our conversion rate jumped 40% within the first month.",
      author: "Taylor R.",
      role: "Small Business Owner",
      rating: 5
    },
    {
      quote: "Traffic up, inquiries doubled. The team understood exactly what we needed and delivered beyond expectations.",
      author: "Dr. Lina P.", 
      role: "Clinic Director",
      rating: 5
    },
    {
      quote: "Seamless process from mockup to launch. Professional, responsive, and the site performs beautifully.",
      author: "Mark H.",
      role: "Contractor", 
      rating: 5
    },
    {
      quote: "Finally, a web team that speaks our language. Fast delivery without compromising on quality.",
      author: "Emma K.",
      role: "Marketing Director",
      rating: 5
    },
    {
      quote: "Our new website has been a game-changer. Professional, fast, and exactly what we envisioned.",
      author: "Sarah M.",
      role: "E-commerce Owner",
      rating: 5
    },
    {
      quote: "Outstanding work! The team was responsive, creative, and delivered on time. Highly recommended.",
      author: "James L.",
      role: "Startup Founder",
      rating: 5
    },
    {
      quote: "The attention to detail and user experience is incredible. Our customers love the new site.",
      author: "Maria G.",
      role: "Restaurant Owner",
      rating: 5
    },
    {
      quote: "From concept to completion, Zenara made the entire process smooth and stress-free.",
      author: "David C.",
      role: "Consultant",
      rating: 5
    }
  ], []);


  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen" role="main" aria-label="Services page">

      {/* Services Showcase - Space Theme */}
      <section className="services-showcase pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 sm:pb-20 md:pb-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white relative">
              Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent relative">
                Digital Solutions
                {/* Moon behind Solutions */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-8 md:-right-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-15 animate-levitate">
                  <img 
                    src={moonImage} 
                    alt="Decorative moon illustration for web design services background" 
                    className="w-full h-full object-contain"
                    width="120"
                    height="120"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              From concept to launch, we deliver comprehensive web solutions that transform your business and delight your customers.
            </p>
          </div>
          
          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => (
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
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-12`}>
                  {/* Image Section */}
                  <div className="flex-1 w-full">
                    <div 
                      ref={(el) => (imageRefs.current[index] = el)}
                      data-image-index={index}
                      className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-1000 w-full h-64 sm:h-72 md:h-80 ${
                        imageVisibleItems.includes(index) 
                          ? 'opacity-100 translate-x-0' 
                          : index % 2 === 0 
                            ? 'opacity-0 -translate-x-12' 
                            : 'opacity-0 translate-x-12'
                      }`}
                    >
                      <img 
                        src={index === 0 ? realEstateWebImage : index === 1 ? rocketWebImage : index === 2 ? gardenWebImage : travelWebImage} 
                        alt={`${service.title} - Professional Web Design Service Icon`}
                        width="48"
                        height="48"
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        style={{ 
                          objectFit: 'contain',
                          objectPosition: 'center center',
                          transform: (index === 0 || index === 3) ? 'scale(1.5)' : 'scale(1)'
                        }}
                        loading="eager"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="service-card bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl h-full flex flex-col relative overflow-hidden">
                      {/* Glassmorphism Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6 flex-shrink-0">
                          <div className="text-4xl sm:text-5xl md:text-6xl">
                            {service.emoji}
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">{service.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed flex-shrink-0">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-2 sm:space-y-3 flex-grow">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3 text-slate-300">
                              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - White Background */}
      <section className="services-faq py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8" style={{ color: '#6b21a8' }}>
              FAQ
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:items-start">
            {/* Left Column Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-4 sm:space-y-6 flex flex-col">
            {[
              {
                  value: "left-item-1",
                question: "How long does it take to build a website?",
                  answer: "Most websites are completed within 2-4 weeks, depending on complexity and requirements. Simple sites can be ready in 1-2 weeks, while more complex projects with custom features may take 3-4 weeks. We work efficiently while ensuring quality results."
                },
                {
                  value: "left-item-2",
                  question: "What's included in your web design package?",
                  answer: "Our packages include custom design, fully responsive development, SEO optimization, SSL security setup, performance optimization, and post-launch support. We also provide brand guidelines, logo design options, and business card design as part of our comprehensive service."
                },
                {
                  value: "left-item-3",
                question: "Do you provide hosting and maintenance?",
                  answer: "Yes! We offer comprehensive hosting solutions with 99.9% uptime guarantee, automated backups, and ongoing maintenance support. Our hosting plans include SSL certificates, CDN integration, and 24/7 monitoring. We also provide monthly maintenance packages for updates and support."
                },
                {
                  value: "left-item-4",
                  question: "Can you help with existing websites?",
                  answer: "We can assist with existing websites if they use a similar technology stack to our preferred modern frameworks. If your current site uses a different technology stack, we typically recommend building a new site with our modern approach for optimal performance and maintainability."
                },
                {
                  value: "left-item-5",
                  question: "What makes your websites different?",
                  answer: "We focus on business results, not just aesthetics. Every design decision is made with conversion optimization in mind. We use modern, fast-loading technologies, ensure mobile-first responsive design, and build with SEO best practices from day one. Plus, you get direct access to our team throughout the project."
                }
              ].map((faq) => (
                <AccordionItem 
                  key={faq.value} 
                  value={faq.value}
                  className="border border-purple-200 rounded-xl bg-white data-[state=open]:bg-purple-600 data-[state=open]:border-purple-600 transition-all duration-200 relative overflow-hidden min-h-[80px] sm:min-h-[90px] flex flex-col"
                >
                  {/* Purple vertical bar on the left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded-l-xl z-10"></div>
                  <AccordionTrigger 
                    className="px-4 sm:px-6 py-4 sm:py-5 hover:no-underline text-left data-[state=open]:text-white data-[state=closed]:text-purple-800 relative overflow-hidden group w-full min-h-[80px] sm:min-h-[90px] flex items-center pl-5 sm:pl-7"
                  >
                    {/* Hover background animation - left to right */}
                    <div className="absolute inset-0 bg-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0 rounded-xl"></div>
                    <span className="font-semibold text-base sm:text-lg pr-4 flex-1 relative z-10 group-hover:text-white transition-colors duration-300">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 data-[state=closed]:text-purple-600 data-[state=open]:text-white group-hover:text-white transition-all duration-200 relative z-10" />
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-5 text-white text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Right Column Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-4 sm:space-y-6 flex flex-col">
              {[
                {
                  value: "right-item-1",
                  question: "Do you offer payment plans?",
                  answer: "Yes! We offer flexible payment options with 50% upfront and 50% on completion for all projects. For larger projects over $10,000, we can discuss custom payment schedules. We accept e-transfers, cheques, and credit cards to make it convenient for you."
                },
                {
                  value: "right-item-2",
                  question: "Will my website work on mobile devices?",
                  answer: "Absolutely! Every website we build is fully responsive and mobile-optimized. We use a mobile-first approach, ensuring your site looks and works perfectly on smartphones, tablets, and all screen sizes. Mobile optimization is included in all our packages."
                },
                {
                  value: "right-item-3",
                  question: "What if I need changes after launch?",
                  answer: "All our packages include post-launch support (14-60 days depending on your plan). After that, we offer flexible maintenance packages for ongoing updates, content changes, security updates, and technical support. We're here for the long term."
                },
                {
                  value: "right-item-4",
                  question: "Do you provide business card and logo design?",
                  answer: "Yes! We offer complete brand identity services including custom logo design, business card design with print-ready files, brand guidelines, and social media profile setup. Our brand packages range from basic logo design to comprehensive brand identity systems."
                },
                {
                  value: "right-item-5",
                  question: "How do I get started?",
                  answer: "Getting started is easy! Simply contact us through our contact form or schedule a free consultation. We'll discuss your project goals, timeline, and budget, then provide a detailed proposal. Once approved, we'll begin the design process and keep you involved every step of the way."
                }
              ].map((faq) => (
                <AccordionItem 
                  key={faq.value} 
                  value={faq.value}
                  className="border border-purple-200 rounded-xl bg-white data-[state=open]:bg-purple-600 data-[state=open]:border-purple-600 transition-all duration-200 relative overflow-hidden min-h-[80px] sm:min-h-[90px] flex flex-col"
                >
                  {/* Purple vertical bar on the left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded-l-xl z-10"></div>
                  <AccordionTrigger 
                    className="px-4 sm:px-6 py-4 sm:py-5 hover:no-underline text-left data-[state=open]:text-white data-[state=closed]:text-purple-800 relative overflow-hidden group w-full min-h-[80px] sm:min-h-[90px] flex items-center pl-5 sm:pl-7"
                  >
                    {/* Hover background animation - left to right */}
                    <div className="absolute inset-0 bg-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0 rounded-xl"></div>
                    <span className="font-semibold text-base sm:text-lg pr-4 flex-1 relative z-10 group-hover:text-white transition-colors duration-300">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 data-[state=closed]:text-purple-600 data-[state=open]:text-white group-hover:text-white transition-all duration-200 relative z-10" />
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-5 text-white text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Service Areas - Animated Scrolling */}
      <section className="service-areas py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8" style={{ color: '#6b21a8' }}>
              Serving the <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Greater Toronto Area</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
              We provide web design and development services across the GTA
                    </p>
                  </div>
                  
          {/* Animated Scrolling Cities */}
          <div className="relative overflow-hidden">
            {/* Top Row - Scrolling Left */}
            <div className="mb-6 sm:mb-8">
              <div className="flex animate-scroll-left">
                {[
                  'Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Markham',
                  'Richmond Hill', 'Oakville', 'Burlington', 'Hamilton', 'Ajax',
                  'Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Markham',
                  'Richmond Hill', 'Oakville', 'Burlington', 'Hamilton', 'Ajax'
                ].map((city, index) => (
                  <div
                    key={`top-${index}`}
                    className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-white rounded-2xl shadow-md border border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg"
                    style={{ minWidth: 'fit-content' }}
                  >
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                      {city}
                    </span>
                </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Scrolling Right */}
            <div>
              <div className="flex animate-scroll-right">
                {[
                  'Pickering', 'Whitby', 'Oshawa', 'Newmarket', 'Aurora',
                  'Milton', 'Caledon', 'Halton Hills', 'Georgina', 'Clarington',
                  'Pickering', 'Whitby', 'Oshawa', 'Newmarket', 'Aurora',
                  'Milton', 'Caledon', 'Halton Hills', 'Georgina', 'Clarington'
                ].map((city, index) => (
                  <div
                    key={`bottom-${index}`}
                    className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-white rounded-2xl shadow-md border border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg"
                    style={{ minWidth: 'fit-content' }}
                  >
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent whitespace-nowrap">
                      {city}
                    </span>
              </div>
            ))}
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="services-testimonials py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8" style={{ color: '#6b21a8' }}>
              What Our <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
              Real results from real businesses who trusted us with their digital transformation
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-purple-200 shadow-lg h-full flex flex-col relative overflow-hidden">
                      <div className="relative z-10 flex flex-col h-full text-center">
                        <div className="flex items-center justify-center mb-6 sm:mb-8 flex-shrink-0">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500 fill-purple-500 mx-1" />
                          ))}
                        </div>
                        
                        <blockquote className="text-slate-800 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 sm:mb-12 flex-grow font-medium">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div className="flex items-center justify-center space-x-3 sm:space-x-4 flex-shrink-0">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-lg sm:text-xl">{testimonial.author}</div>
                            <div className="text-purple-600 text-base sm:text-lg">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-cyan-400 via-purple-500 to-violet-500 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center text-white z-10"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" fill="white" strokeWidth={3} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-cyan-400 via-purple-500 to-violet-500 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center text-white z-10"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" fill="white" strokeWidth={3} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-purple-600 scale-125' 
                        : 'bg-purple-300 hover:bg-purple-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="services-cta py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="relative z-10">
            <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Transform Your
            </h2>
            <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Business?</span>
              </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Your digital transformation starts here. Let's create something that not only looks incredible but drives real results.
            </p>
            <div className="flex justify-center mb-8 sm:mb-10">
              <div 
                className="relative inline-block rounded-full p-[4px] transition-all duration-300 group"
                style={{
                  background: 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(168, 85, 247)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'}
              >
                <Button asChild className="bg-black hover:bg-purple-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl font-semibold">
                  <Link to="/contact" className="flex items-center justify-center">
                    Start Your Project
                    <Rocket className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 text-white">
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <span className="text-sm sm:text-base">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm sm:text-base">24h Response</span>
                </div>
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                <span className="text-sm sm:text-base">No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      
      {/* Structured Data */}
      <StructuredData 
        type="review" 
        reviews={testimonials}
      />
      <StructuredData 
        type="serviceOffering" 
        services={services}
      />
      <StructuredData 
        type="aggregateRating" 
        rating={{
          ratingValue: 4.9,
          reviewCount: testimonials.length,
          bestRating: 5,
          worstRating: 1
        }}
      />
      <StructuredData 
        type="breadcrumb" 
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
        ]} 
      />
    </div>
  );
};

export default memo(Services);