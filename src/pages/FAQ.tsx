import { useScrollToTop, useSEO } from '@/hooks';
import { memo, useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Star, 
  Clock, 
  DollarSign, 
  Users, 
  Shield, 
  Zap,
  Globe,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Rocket,
  Award,
  Target,
  Lightbulb,
  Sun
} from 'lucide-react';
import StructuredData from '@/components/StructuredData';

const FAQ = () => {
  useScrollToTop();
  
  // SEO meta tags - Indexed for long-tail keywords
  useSEO({
    title: "FAQ | Web Design Toronto | Pricing & Process | Zenara",
    description: "Get answers to web design questions in Toronto & GTA. Learn about pricing, timelines, and our proven process. Find solutions to your website needs today!",
    canonical: "https://zenaradesigns.com/faq"
  });

  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemValue: string) => {
    setOpenItems(prev => 
      prev.includes(itemValue) 
        ? prev.filter(item => item !== itemValue)
        : [...prev, itemValue]
    );
  };

  // Organized FAQ sections with actual pricing and services
  const faqSections = useMemo(() => [
    {
      title: "Pricing & Packages",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      faqs: [
        {
          question: "What are your web design packages and pricing?",
          answer: "We offer three main packages: Starter ($999) for individuals with 1-3 pages and 1 week turnaround, Small Business ($1,999) for businesses with up to 6 pages and 2-3 weeks turnaround, and Pro ($4,999+) for advanced functionality with unlimited pages and 3-4 weeks turnaround. All include mobile-responsive design, SEO optimization, and SSL security."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes! We offer 50% upfront and 50% on completion for all projects. For Pro projects over $10k, we can discuss custom payment schedules. We accept e-transfers, cheques, and credit cards."
        },
        {
          question: "What's included in each pricing plan?",
          answer: "Starter includes 1-3 pages and basic features. Small Business includes up to 6 pages with custom sections and 2 revisions. Pro includes unlimited pages, advanced integrations, and priority support. All plans include mobile optimization, SEO basics, SSL security, and hosting."
        },
        {
          question: "Are there any hidden costs?",
          answer: "No hidden costs! Our pricing is transparent and includes everything listed. The only additional costs would be if you request features beyond what's included in your chosen plan, and we'll always discuss these upfront."
        },
        {
          question: "Can I upgrade my plan during the project?",
          answer: "Absolutely! You can upgrade from Starter to Small Business or Pro at any time. We'll adjust the pricing accordingly and add the new features to your project."
        }
      ]
    },
    {
      title: "Process & Timeline",
      icon: Clock,
      color: "from-blue-500 to-cyan-500",
      faqs: [
        {
          question: "How long does it take to build a website?",
          answer: "Our timelines are: Starter (1 week), Small Business (2-3 weeks), and Pro (3-4 weeks). These timelines include design, development, testing, and launch. We work efficiently while ensuring quality results."
        },
        {
          question: "What's your design process?",
          answer: "We follow a proven 6-step process: Discovery & Planning, Design & Wireframes, Development & Coding, Content Integration, Testing & Optimization, and Launch & Support. We keep you involved throughout each step."
        },
        {
          question: "How many revisions are included?",
          answer: "Starter includes 1 round of revisions, Small Business includes 2 rounds, and Pro includes unlimited revisions. Additional revision rounds can be purchased if needed."
        },
        {
          question: "What if I need changes after launch?",
          answer: "All plans include post-launch support (14-60 days depending on plan). After that, we offer maintenance packages for ongoing updates, security, and support."
        },
        {
          question: "Do you handle hosting and domain setup?",
          answer: "Yes! We can handle hosting internally for $10-$30/month (SSL included) or help you set up with external providers. We also assist with domain registration and DNS setup."
        }
      ]
    },
    {
      title: "Services & Features",
      icon: Zap,
      color: "from-purple-500 to-violet-500",
      faqs: [
        {
          question: "Do you provide business card design services?",
          answer: "Yes! We offer professional business card design services across the GTA. Our packages range from $149-$399 for professional cards and $299-$599 for executive cards with premium finishes like foil stamping and embossing."
        },
        {
          question: "What's included in logo design services?",
          answer: "Our logo design services include 3 initial concepts, unlimited revisions, vector and raster formats, brand guidelines, and usage rights. Basic logo design starts at $99-$199, with complete brand identity available by quote."
        },
        {
          question: "Can you help with e-commerce development?",
          answer: "Yes! We specialize in e-commerce development using platforms like Shopify, WooCommerce, and custom solutions. Small e-commerce stores start at $2,999-$4,999, with enterprise solutions available by quote."
        },
        {
          question: "Do you offer SEO services?",
          answer: "Absolutely! We provide comprehensive SEO services including keyword research, on-page optimization, local SEO, Google My Business optimization, and ongoing SEO maintenance to improve search rankings."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve all industries across the GTA including restaurants, real estate, healthcare, legal services, retail, professional services, nonprofits, and startups. Our experience spans Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, and Burlington."
        }
      ]
    },
    {
      title: "Technical & Support",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      faqs: [
        {
          question: "What happens if I'm not satisfied with the design?",
          answer: "We work closely with you throughout the process to ensure you love the result. If you're not satisfied, we'll work with you to make it right. Our goal is your success and satisfaction."
        },
        {
          question: "Do you provide website maintenance services?",
          answer: "Yes! We offer ongoing website maintenance services including security updates, content updates, performance optimization, backup management, and technical support. Our maintenance plans start at $99/month."
        },
        {
          question: "What are CASL compliance requirements?",
          answer: "Canada's Anti-Spam Legislation (CASL) requires explicit consent for commercial emails. We ensure all contact forms and email marketing integrations comply with CASL, including proper consent mechanisms, unsubscribe options, and sender identification."
        },
        {
          question: "Do you offer in-person meetings in Toronto?",
          answer: "Yes! We offer in-person consultations at your Toronto office or convenient downtown locations. We can meet at coffee shops in the Financial District, Yorkville, or other central locations. For GTA businesses, we can arrange meetings at local co-working spaces."
        },
        {
          question: "What hosting locations work best for Toronto traffic?",
          answer: "We recommend hosting with Canadian data centers or US East Coast servers for optimal Toronto performance. This reduces latency to under 50ms for GTA users. We use CDN services with Toronto edge locations."
        }
      ]
    },
    {
      title: "Toronto & GTA Specific",
      icon: MapPin,
      color: "from-indigo-500 to-blue-500",
      faqs: [
        {
          question: "What makes your agency different in Toronto?",
          answer: "As a Toronto-based web design agency, we understand local business needs. We offer personalized service, competitive pricing, fast turnaround times, and comprehensive support for businesses across the GTA."
        },
        {
          question: "What do Toronto customers expect from local business websites?",
          answer: "Toronto customers expect fast-loading, mobile-first websites with clear contact information, local business hours, and easy navigation. They also value local testimonials, neighborhood-specific content, and Google My Business integration."
        },
        {
          question: "What are the mobile usage trends in the GTA?",
          answer: "Over 70% of GTA residents use mobile devices for local business searches. Toronto has excellent 5G coverage, so we optimize for fast mobile loading across iPhones, Android devices, and various screen sizes."
        },
        {
          question: "Can you help with Toronto-specific integrations?",
          answer: "Absolutely! We integrate with Toronto-specific services like TTC route planning, local weather APIs, Toronto event calendars, and Canadian payment processors. We can also connect your website with local business networks."
        },
        {
          question: "What's your experience with Toronto's tech startup scene?",
          answer: "We work with many Toronto startups and understand the fast-paced, budget-conscious nature of the local tech scene. We offer startup-friendly pricing, rapid development cycles, and scalable solutions that grow with your business."
        }
      ]
    }
  ], []);

  // Flatten all FAQs for structured data
  const allFaqs = useMemo(() => 
    faqSections.flatMap(section => section.faqs), 
    [faqSections]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Stars */}
        <div className="absolute top-16 left-16 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle"></div>
        <div className="absolute top-32 right-24 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-1000"></div>
        <div className="absolute top-48 left-1/3 w-1 h-1 bg-teal-300 rounded-full animate-twinkle delay-2000"></div>
        <div className="absolute top-24 right-1/3 w-1 h-1 bg-violet-300 rounded-full animate-twinkle delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle delay-1500"></div>
        <div className="absolute bottom-48 right-1/4 w-1 h-1 bg-orange-300 rounded-full animate-twinkle delay-3000"></div>
        
        {/* Nebula Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-cyan-500/30">
            <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-cyan-300">Frequently Asked Questions</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
            Everything You Need to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Know</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
            Get answers to common questions about our web design, business card, and logo design services in Toronto & GTA
          </p>
          <p className="text-sm text-transparent mt-6">
            Last updated: January 2026
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => {
            const IconComponent = section.icon;
            return (
              <div key={sectionIndex} className="group">
                {/* Section Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${section.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {section.title}
                  </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => {
                    const itemValue = `${sectionIndex}-${faqIndex}`;
                    const isOpen = openItems.includes(itemValue);
                    
                    return (
                      <div key={faqIndex} className="group/faq">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group-hover/faq:bg-white/15">
                          <button
                            onClick={() => toggleItem(itemValue)}
                            className="w-full flex items-center justify-between text-left p-6 sm:p-8"
                          >
                            <span className="text-white group-hover/faq:text-cyan-300 transition-colors text-sm sm:text-base font-medium pr-4">
                {faq.question}
                            </span>
                            <div className="flex-shrink-0 ml-2">
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-cyan-400 transition-transform duration-200" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-cyan-400 transition-transform duration-200" />
                              )}
                            </div>
                          </button>
                          {isOpen && (
                            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                              <div className="border-t border-white/20 pt-4 sm:pt-6">
                                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Toronto Seasonal Content Section */}
        <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-8 sm:p-12 border border-cyan-500/20 shadow-2xl relative overflow-hidden">
          {/* Glassmorphism Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 border border-cyan-500/30">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-cyan-300">Toronto Business Tips</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Seasonal Website Tips for <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Toronto Businesses</span>
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Make the most of Toronto's unique business seasons with these strategic website tips
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-300">Winter Considerations (Dec-Mar)</h3>
                  </div>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Holiday traffic spikes - ensure your site can handle increased load</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Mobile optimization for commuters browsing on phones</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Winter-themed content and promotions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Weather-related service updates (delivery delays, closures)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-300">Tax Season (Mar-Apr)</h3>
                  </div>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Financial service website optimization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Tax deadline countdown features</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Document upload and secure forms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Appointment booking systems</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500">
                      <Sun className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-300">Summer Planning (Jun-Aug)</h3>
                  </div>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Vacation mode features for business owners</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Summer festival and event integrations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Patio and outdoor service highlights</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Tourism-focused content for visitors</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-300">Year-Round GTA Tips</h3>
                  </div>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Local event calendar integration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">TTC route planning features</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Weather API integration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Multi-language support for diverse communities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
            {/* Glassmorphism Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-300 font-medium text-lg">
                  Still have questions? We're here to help!
                </span>
              </div>
              <p className="text-slate-300 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is ready to help you with your web design needs.
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
                    <Link to="/contact" className="flex items-center justify-center">
                      Contact Us Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Structured Data */}
      <StructuredData 
        type="faq" 
        faqs={allFaqs}
      />
    </div>
  );
};

export default memo(FAQ);
