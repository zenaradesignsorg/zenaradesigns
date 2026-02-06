import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollToTop, useSEO } from '@/hooks';
import { memo, useMemo } from 'react';
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
  

  const pricingPlans = useMemo(() => [
    {
      name: "Starter",
      subtitle: "Individual",
      price: "$999",
      description: "Perfect for freelancers and personal brands",
      features: [
        "Up to 3 pages (Home, About, Contact)",
        "Modern portfolio-style design",
        "Mobile-responsive layout",
        "Contact form + email notifications",
        "SEO setup (titles/meta, indexing, analytics)",
        "1 month free hosting",
        "SSL + baseline security included",
        "1-week turnaround (once content is received)",
        "14 days post-launch support (bug fixes + minor edits)"
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
        "Custom forms (contact/quote/booking)",
        "SEO setup (titles/meta, indexing, sitemap)",
        "Mobile-first responsive design",
        "Basic animations",
        "2 rounds of revisions included",
        "2–3 week turnaround (once content is received)",
        "SSL + baseline security included",
        "Performance optimization (images + speed)",
        "30 days post-launch support (bug fixes + minor edits)"
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
        "Everything in Small Business",
        "Multi-page site (10+ pages) with custom sections",
        "Custom design system + premium animations",
        "Advanced integrations (Calendly, Stripe, newsletter, etc.)",
        "Custom components + tailored functionality",
        "E-commerce store setup (platform-based) with checkout + payments",
        "Performance optimization",
        "Priority support + optional maintenance plan",
        "3–4 week turnaround (once content is received)",
        "60 days post-launch support (bug fixes + minor edits)"
      ],
      cta: "Request Custom Quote",
      popular: false
    }
  ], []);

  // Additional services pricing for comprehensive coverage
  const additionalServices = useMemo(() => [
    {
      category: "Business Card Design & Logo Design - Tailored for Toronto & GTA",
      services: [
        {
          name: "Professional Business Cards",
          price: "$149 - $399",
          description: "High-quality business card design and printing",
          features: ["Custom design", "Premium printing", "Digital files", "2-3 day turnaround"],
          idealFor: "Professionals, consultants, service providers, small business owners, executives, lawyers, doctors, financial advisors, luxury brands"
        },
        {
          name: "Basic Logo Design",
          price: "$99 - $199", 
          description: "Simple logo design for small businesses",
          features: ["3 initial concepts", "2 revisions", "Vector files", "1 week delivery"],
          idealFor: "Startups, freelancers, small businesses, entrepreneurs"
        }
      ]
    }
  ], []);

  const subscriptionPlans = useMemo(() => [
    {
      id: 'core',
      name: 'Zenara Core',
      emoji: '🌱',
      monthlyPrice: 45,
      annualPrice: 486, // 10% discount: $45 * 12 * 0.9 = $486
      features: [
        'Managed hosting (modern stack) + SSL',
        'Monitoring + basic security checks',
        'Daily backups + restore support',
        '30 min/month minor updates + email support (1–2 business days)'
      ],
      bestFor: 'Simple sites, portfolios, new businesses',
      popular: false
    },
    {
      id: 'grow',
      name: 'Zenara Grow',
      emoji: '⚡',
      monthlyPrice: 70,
      annualPrice: 756, // 10% discount: $70 * 12 * 0.9 = $756
      features: [
        'Everything in Core, plus:',
        'Monthly performance check + light optimization (speed, UX, small fixes)',
        'Lead form monitoring (submission tests + alerts if something breaks)',
        'Google Analytics setup + monthly traffic summary',
        '60 min/month updates (text, images, links, small section tweaks)',
        'Priority support (1 business day)'
      ],
      bestFor: 'Professional individuals, local businesses, service providers',
      popular: true
    },
    {
      id: 'prime',
      name: 'Zenara Prime',
      emoji: '👑',
      monthlyPrice: 150,
      annualPrice: 1620, // 10% discount: $150 * 12 * 0.9 = $1620
      features: [
        'Everything in Grow, plus:',
        'Advanced performance tuning (Core Web Vitals)',
        'Integrations support (booking, email, CRM, payments)',
        '120 min/month updates + simple new pages/sections (within included time)',
        'Same-day support'
      ],
      bestFor: 'High-conversion sites, coaches, growing brands',
      popular: false
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20 md:pt-24">
          <div className="text-center mb-12 sm:mb-16">
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

      {/* Hosting & Maintenance */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8" style={{ color: '#6b21a8' }}>
              Hosting & Maintenance
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Keep your website secure, fast, and up-to-date with our managed hosting and maintenance plans
            </p>
          </div>

          {/* Subscription Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
            {subscriptionPlans.map((plan) => {
              return (
                <div key={plan.id} className={`group relative ${plan.popular ? 'lg:scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-2xl whitespace-nowrap">
                        <Star className="h-4 w-4 fill-current flex-shrink-0" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}
                  
                  <div className={`bg-white rounded-3xl p-6 sm:p-8 border shadow-lg transition-all duration-500 h-full flex flex-col relative overflow-hidden ${
                    plan.popular 
                      ? 'border-2 shadow-xl' 
                      : 'border border-purple-200'
                  }`}
                  style={plan.popular ? { borderColor: '#6b21a8' } : {}}
                  >
                    <div className="flex flex-col h-full">
                      <div className="text-center mb-6 sm:mb-8 flex-shrink-0">
                        <div className="text-4xl mb-3">{plan.emoji}</div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#6b21a8' }}>{plan.name}</h3>
                        <div className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#6b21a8' }}>
                          ${plan.monthlyPrice}
                          <span className="text-lg sm:text-xl text-slate-500">
                            /month
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm sm:text-base mt-3">{plan.bestFor}</p>
                      </div>

                      <ul className="space-y-3 sm:space-y-4 flex-grow">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                            <Check className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" style={{ color: '#6b21a8' }} />
                            <span className="text-slate-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Optional Note */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto">
              <em>Complex custom development, e-commerce, and major redesigns are quoted separately.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services Pricing */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Additional Services Pricing
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Complete pricing for all our web design, business card, and logo design services in Toronto & GTA
            </p>
          </div>

          <div className="space-y-12">
            {additionalServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                        {service.name}
                      </h4>
                      <p className="text-2xl sm:text-3xl font-bold mb-3 text-cyan-400">
                        {service.price}
                      </p>
                      <p className="text-slate-300 mb-4 text-sm sm:text-base">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-slate-300 text-sm">
                            <Check className="h-4 w-4 mr-2 flex-shrink-0 text-cyan-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {service.idealFor && (
                        <div>
                          <h5 className="text-sm font-semibold mb-2 text-cyan-300">Ideal for:</h5>
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

          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-white">
                Why Choose Zenara Designs for Your Toronto Project?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2 text-cyan-400">40%</div>
                  <div className="text-slate-300 text-sm sm:text-base">Average Conversion Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2 text-cyan-400">2-4</div>
                  <div className="text-slate-300 text-sm sm:text-base">Weeks to Launch</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2 text-cyan-400">98%</div>
                  <div className="text-slate-300 text-sm sm:text-base">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2 text-cyan-400">100%</div>
                  <div className="text-slate-300 text-sm sm:text-base">Mobile Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - White Background */}
      <section className="pricing-faq py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8" style={{ color: '#6b21a8' }}>
              FAQ
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:items-start">
            {/* Left Column Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-4 sm:space-y-6 flex flex-col">
              {faqs.slice(0, 5).map((faq, index) => (
                <AccordionItem 
                  key={`left-item-${index + 1}`} 
                  value={`left-item-${index + 1}`}
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
              {faqs.slice(5, 10).map((faq, index) => (
                <AccordionItem 
                  key={`right-item-${index + 1}`} 
                  value={`right-item-${index + 1}`}
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
          
          {/* Last Updated Date */}
          <div className="text-center mt-12">
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
      <StructuredData 
        type="breadcrumb" 
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Pricing', url: '/pricing' }
        ]} 
      />
    </div>
  );
};

export default memo(Pricing);