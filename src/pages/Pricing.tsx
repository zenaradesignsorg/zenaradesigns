import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Award, Globe, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollToTop, useSEO } from '@/hooks';
import { useState, memo, useMemo, useCallback } from 'react';
import StructuredData from '@/components/StructuredData';

const Pricing = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  // SEO meta tags
  useSEO({
    title: "Pricing Plans | Web Design Toronto | Zenara Designs",
    description: "Transparent web design pricing in Toronto & GTA. Get detailed costs for small business websites, e-commerce, and enterprise solutions. Request your free quote today!",
    canonical: "https://zenaradesigns.com/pricing"
  });
  
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = useCallback((value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  }, []);

  const pricingPlans = useMemo(() => [
    {
      name: "Starter",
      subtitle: "Individual",
      price: "$999",
      description: "Perfect for freelancers and personal brands",
      features: [
        "1-3 pages (Home, About, Contact)",
        "Clean one-pager or portfolio design",
        "Mobile-responsive layout",
        "Contact form integration",
        "Basic SEO optimization",
        "One month of free hosting",
        "SSL and basic security included",
        "1 week turnaround",
        "14 days of support"
      ],
      cta: "Choose Starter",
      popular: false
    },
    {
      name: "Small Business", 
      subtitle: "Recommended",
      price: "$1,999",
      description: "Ideal for small businesses and professionals",
      features: [
        "Up to 6 pages (Home, About, Services, Projects, Pricing, Contact)",
        "Custom sections and layouts",
        "Custom form integration",
        "SEO essentials and optimization",
        "Mobile optimized",
        "Basic animations",
        "2 rounds of revisions included",
        "2-3 weeks turnaround",
        "SSL and basic security included",
        "Image optimization and performance enhancements",
        "Analytics integration",
        "30 days of support"
      ],
      cta: "Choose Small Business",
      popular: true
    },
    {
      name: "Pro",
      subtitle: "Fully Custom", 
      price: "$4,999+",
      description: "For businesses needing advanced functionality",
      features: [
        "Everything in Starter and Small Business",
        "Unlimited pages and sections",
        "Custom design system and animations",
        "Advanced integrations (CRM, CMS, etc.)",
        "Custom components and functionality",
        "Headless CMS or e-commerce setup",
        "Priority support and maintenance",
        "Performance + accessibility audit",
        "3-4 weeks turnaround",
        "60 days of support"
      ],
      cta: "Request Custom Quote",
      popular: false
    }
  ], []);

  // Additional services pricing for comprehensive coverage
  const additionalServices = useMemo(() => [
    {
      category: "Business Card Design - Tailored for Toronto & GTA",
      services: [
        {
          name: "Professional Business Cards",
          price: "$149 - $399",
          description: "High-quality business card design and printing",
          features: ["Custom design", "Premium printing", "Digital files", "2-3 day turnaround"],
          idealFor: "Professionals, consultants, service providers, small business owners"
        },
        {
          name: "Executive Business Cards", 
          price: "$299 - $599",
          description: "Premium business cards with special finishes",
          features: ["Luxury design", "Foil stamping", "Spot UV", "Embossing options"],
          idealFor: "Executives, lawyers, doctors, financial advisors, luxury brands"
        }
      ]
    },
    {
      category: "Logo Design & Brand Identity",
      services: [
        {
          name: "Basic Logo Design",
          price: "$99 - $199", 
          description: "Simple logo design for small businesses",
          features: ["3 initial concepts", "2 revisions", "Vector files", "1 week delivery"],
          idealFor: "Startups, freelancers, small businesses, entrepreneurs"
        },
        {
          name: "Complete Brand Identity",
          price: "Quote",
          description: "Full brand identity package", 
          features: ["Logo design", "Business cards", "Letterhead", "Brand guidelines"],
          idealFor: "Established businesses, franchises, growing companies, rebranding projects"
        }
      ]
    },
    {
      category: "E-commerce Development - Custom Solutions",
      services: [
        {
          name: "Small E-commerce Store",
          price: "$2,999 - $4,999",
          description: "Basic online store for small businesses",
          features: ["Up to 50 products", "Payment integration", "Inventory management", "Mobile optimization"],
          idealFor: "Small retailers, artisans, local shops, online boutiques"
        },
        {
          name: "Enterprise E-commerce",
          price: "Quote",
          description: "Advanced e-commerce platform",
          features: ["Unlimited products", "Advanced features", "Custom integrations", "Multi-language support"],
          idealFor: "Large retailers, manufacturers, distributors, multi-brand companies"
        }
      ]
    }
  ], []);

  const faqs = useMemo(() => [
    {
      question: "What are your web design packages and pricing?",
      answer: "We offer three main packages: Starter ($999) for individuals with 1-3 pages and 1 week turnaround, Small Business ($1,999) for businesses with up to 6 pages and 2-3 weeks turnaround, and Pro ($4,999+) for advanced functionality with unlimited pages and 3-4 weeks turnaround."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! We offer 50% upfront and 50% on completion for all projects. For Pro projects over $10k, we can discuss custom payment schedules. We accept e-transfers, cheques, and credit cards."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Our timelines are: Starter (1 week), Small Business (2-3 weeks), and Pro (3-4 weeks). These timelines include design, development, testing, and launch. We work efficiently while ensuring quality results."
    },
    {
      question: "What's included in each pricing plan?",
      answer: "Starter includes 1-3 pages and basic features. Small Business includes up to 6 pages with custom sections and 2 revisions. Pro includes unlimited pages, advanced integrations, and priority support. All plans include mobile optimization, SEO basics, SSL security, and hosting."
    },
    {
      question: "Do you provide business card design services?",
      answer: "Yes! We offer professional business card design services across the GTA. Our packages range from $149-$399 for professional cards and $299-$599 for executive cards with premium finishes like foil stamping and embossing."
    },
    {
      question: "Can you help with e-commerce development?",
      answer: "Yes! We specialize in e-commerce development using platforms like Shopify, WooCommerce, and custom solutions. Small e-commerce stores start at $2,999-$4,999, with enterprise solutions available by quote."
    },
    {
      question: "Are there any hidden costs?",
      answer: "No hidden costs! Our pricing is transparent and includes everything listed. The only additional costs would be if you request features beyond what's included in your chosen plan, and we'll always discuss these upfront."
    },
    {
      question: "Do you handle hosting and domain setup?",
      answer: "Yes! We can handle hosting internally for $10-$30/month (SSL included) or help you set up with external providers. We also assist with domain registration and DNS setup."
    },
    {
      question: "What happens if I'm not satisfied with the design?",
      answer: "We work closely with you throughout the process to ensure you love the result. If you're not satisfied, we'll work with you to make it right. Our goal is your success and satisfaction."
    },
    {
      question: "Can I upgrade my plan during the project?",
      answer: "Absolutely! You can upgrade from Starter to Small Business or Pro at any time. We'll adjust the pricing accordingly and add the new features to your project."
    }
  ], []);

  return (
    <div className="min-h-screen" role="main" aria-label="Pricing page">

      {/* Pricing Cards - Space Theme */}
      <section className="pricing-hero py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-cyan-500/30">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing Plans</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              Choose the plan that fits your needs. Professional web design services for Toronto & GTA businesses.
            </p>
          </div>
          
          <div className="pricing-grid grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`group relative ${plan.popular ? 'lg:scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-2xl whitespace-nowrap">
                      <Star className="h-4 w-4 fill-current flex-shrink-0" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className={`pricing-card pricing-card-container bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 min-h-[600px] flex flex-col relative overflow-hidden group-hover:-translate-y-2 ${plan.popular ? 'border-2 border-cyan-400 shadow-cyan-500/30' : 'border border-white/20'}`}>
                  {/* Glassmorphism Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-center mb-6 sm:mb-8 flex-shrink-0">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">{plan.name}</h3>
                      <p className="text-cyan-300 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{plan.subtitle}</p>
                      <div className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 text-white">{plan.price}</div>
                      <p className="text-slate-300 text-base sm:text-lg">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex-shrink-0">
                      <div 
                        className="relative inline-block rounded-full p-[4px] transition-all duration-300 group w-full"
                        style={{
                          background: plan.popular
                            ? 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'
                            : 'linear-gradient(to right, rgb(71, 85, 105), rgb(100, 116, 139))'
                        }}
                        onMouseEnter={(e) => {
                          if (plan.popular) {
                            e.currentTarget.style.background = 'rgb(168, 85, 247)';
                          } else {
                            e.currentTarget.style.background = 'linear-gradient(to right, rgb(100, 116, 139), rgb(148, 163, 184))';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (plan.popular) {
                            e.currentTarget.style.background = 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))';
                          } else {
                            e.currentTarget.style.background = 'linear-gradient(to right, rgb(71, 85, 105), rgb(100, 116, 139))';
                          }
                        }}
                      >
                        <Button 
                          asChild 
                          className={`w-full ${
                            plan.popular 
                              ? 'bg-black hover:bg-purple-500 text-white' 
                              : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-200'
                          } rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold`}
                        >
                          <Link to="/contact" className="flex items-center justify-center">
                            {plan.cta}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              
              <div className="relative z-10">
                <p className="text-slate-300 mb-4 sm:mb-6 text-base sm:text-lg">
                  Have a custom request? We'll scope it and send a quote within 24 hours.
                </p>
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                  <Link to="/contact">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Pricing */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Additional Services Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Complete pricing for all our web design, business card, and logo design services in Toronto & GTA
            </p>
          </div>

          <div className="space-y-12">
            {additionalServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {service.name}
                      </h4>
                      <p className="text-2xl font-bold text-cyan-400 mb-3">
                        {service.price}
                      </p>
                      <p className="text-slate-300 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-slate-300 text-sm">
                            <Check className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {service.idealFor && (
                        <div>
                          <h5 className="text-sm font-semibold text-cyan-300 mb-2">Ideal for:</h5>
                          <p className="text-slate-300 text-sm">
                            {service.idealFor}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Why Choose Zenara Designs for Your Toronto Project?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                  <div className="text-slate-300">Average Conversion Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2-4</div>
                  <div className="text-slate-300">Weeks to Launch</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                  <div className="text-slate-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-slate-300">Mobile Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Space Theme */}
      <section className="pricing-faq py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-purple-900">
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
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-cyan-500/30">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300">FAQ</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Everything you need to know about our process, timelines, and what's included.
            </p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const itemValue = `item-${index}`;
              const isOpen = openItems.includes(itemValue);
              
              return (
                <div key={index} className="group">
                  <div className="faq-item group-hover:bg-white/10 transition-all duration-300 rounded-2xl p-3 sm:p-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-cyan-500/20">
                    <button
                      onClick={() => toggleItem(itemValue)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="text-white group-hover:text-cyan-300 transition-colors text-xs sm:text-sm font-medium pr-4">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 ml-2">
                        {isOpen ? (
                          <Minus className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
                        ) : (
                          <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20">
                        <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-300 font-medium text-sm sm:text-base">
                    Still have questions? We're here to help!
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </Button>
                  <Button asChild className="border-2 border-cyan-400 text-cyan-300 bg-cyan-500/10 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base backdrop-blur-sm hover:bg-cyan-500/20 transition-all duration-300">
                    <Link to="/faq">
                      More FAQ
                    </Link>
                  </Button>
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

      {/* Structured Data */}
      <StructuredData 
        type="product" 
        products={pricingPlans}
      />
    </div>
  );
};

export default memo(Pricing);