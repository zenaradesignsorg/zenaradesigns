import { useState, memo, useMemo } from 'react';
import { Check, Star, CreditCard, Sparkles, Zap, Crown, Wrench, Mail, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useScrollToTop, useSEO } from '@/hooks';
import { useToast } from '@/hooks/use-toast';

interface SubscriptionPlan {
  id: string;
  name: string;
  emoji: string;
  monthlyPrice: number;
  annualPrice: number; // 10% discount
  features: string[];
  bestFor: string;
  popular?: boolean;
}

interface AddOn {
  id: string;
  name: string;
  description: string;
  price: string;
  type: 'hourly' | 'per-item' | 'monthly' | 'custom';
}

interface CustomerFormData {
  name: string;
  email: string;
  phone: string;
}

const Payment = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  // SEO meta tags
  useSEO({
    title: "Subscription Plans | Hosting & Maintenance | Zenara Designs",
    description: "Choose your hosting and maintenance plan. Zenara Core ($20/mo), Grow ($45/mo), or Prime ($80/mo). Secure, reliable, and fully managed.",
    canonical: "https://zenaradesigns.com/payment",
    noindex: true // Private page, don't index
  });

  const [selectedPlan, setSelectedPlan] = useState<string>('grow');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [formData, setFormData] = useState<CustomerFormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const { toast } = useToast();

  const subscriptionPlans = useMemo<SubscriptionPlan[]>(() => [
    {
      id: 'core',
      name: 'Zenara Core',
      emoji: '🌱',
      monthlyPrice: 25,
      annualPrice: 270, // 10% discount: $25 * 12 * 0.9 = $270
      features: [
        'High-performance managed hosting (non-WordPress)',
        'SSL security + uptime monitoring',
        'Automated backups',
        'Minor content updates (up to 30 min/month)',
        'Email support'
      ],
      bestFor: 'Simple sites, portfolios, new businesses',
      popular: false
    },
    {
      id: 'grow',
      name: 'Zenara Grow',
      emoji: '⚡',
      monthlyPrice: 45,
      annualPrice: 486, // 10% discount: $45 * 12 * 0.9 = $486
      features: [
        'Everything in Core, plus:',
        'Performance audits and more traffic',
        'Lead form & submission monitoring',
        'Google Analytics + monthly traffic summary',
        'Up to 1 hour of content updates/month',
        'Priority support'
      ],
      bestFor: 'Professional individuals, local businesses, service providers',
      popular: true
    },
    {
      id: 'prime',
      name: 'Zenara Prime',
      emoji: '👑',
      monthlyPrice: 80,
      annualPrice: 864, // 10% discount: $80 * 12 * 0.9 = $864
      features: [
        'Everything in Grow, plus:',
        'Advanced speed & performance tuning',
        'Booking systems & integrations',
        'New simple pages or features or additions',
        'Up to 2 hours of updates/month',
        'Proactive site improvement recommendations',
        'Same-day support'
      ],
      bestFor: 'High-conversion sites, coaches, growing brands',
      popular: false
    }
  ], []);

  const addOns = useMemo<AddOn[]>(() => [
    {
      id: 'extra-time',
      name: 'Extra update time',
      description: 'Additional content update time beyond your plan',
      price: '$40/hour',
      type: 'hourly'
    },
    {
      id: 'blog-uploads',
      name: 'Blog or content uploads',
      description: 'Bi-weekly AI generated content posts specific to your niche',
      price: '$20/month',
      type: 'monthly'
    }
  ], []);

  const selectedPlanData = useMemo(() => {
    return subscriptionPlans.find(plan => plan.id === selectedPlan) || subscriptionPlans[1];
  }, [selectedPlan, subscriptionPlans]);

  const currentPrice = useMemo(() => {
    const basePrice = billingPeriod === 'monthly' 
      ? selectedPlanData.monthlyPrice 
      : selectedPlanData.annualPrice;
    
    // Add monthly add-ons (blog-uploads is $20/month)
    const monthlyAddOns = selectedAddOns
      .map(addOnId => addOns.find(a => a.id === addOnId))
      .filter(addOn => addOn?.type === 'monthly')
      .reduce((sum, addOn) => {
        if (addOn?.id === 'blog-uploads') {
          // For monthly billing, add $20/month
          // For annual billing, add $20 * 12 = $240/year
          return sum + (billingPeriod === 'monthly' ? 20 : 240);
        }
        return sum;
      }, 0);
    
    return basePrice + monthlyAddOns;
  }, [billingPeriod, selectedPlanData, selectedAddOns, addOns]);

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = async () => {
    if (!validateForm()) {
      toast({
        title: "Please fix form errors",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // TODO: Replace with actual Stripe checkout integration
    // This is a placeholder function that will be replaced with Stripe API calls
    try {
      console.log('Checkout data:', {
        plan: selectedPlan,
        billingPeriod,
        addOns: selectedAddOns,
        customer: formData,
        totalPrice: currentPrice
      });

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Stripe integration pending",
        description: "This will redirect to Stripe checkout when integrated.",
      });

      // TODO: Replace with actual Stripe checkout redirect
      // Example: window.location.href = stripeCheckoutUrl;
      
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (field: keyof CustomerFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="min-h-screen" role="main" aria-label="Payment page">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Space Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle"></div>
          <div className="absolute top-32 right-24 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-48 left-1/3 w-1 h-1 bg-teal-300 rounded-full animate-twinkle delay-2000"></div>
          <div className="absolute top-24 right-1/3 w-1 h-1 bg-violet-300 rounded-full animate-twinkle delay-500"></div>
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 mb-5 sm:mb-6 md:mb-8 border border-cyan-500/30">
              <CreditCard className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-cyan-400 animate-pulse flex-shrink-0" />
              <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-cyan-300">Hosting & Maintenance</span>
            </div>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white px-2">
              Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Subscription Plan</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              Reliable hosting and maintenance for your website. Fully managed, secure, and optimized.
            </p>
          </div>

          {/* Billing Period Toggle */}
          <div className="flex justify-center mb-12 sm:mb-16 md:mb-20">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1.5 sm:p-2 border border-white/20 inline-flex w-full max-w-xs sm:w-auto sm:max-w-none">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 touch-manipulation ${
                  billingPeriod === 'monthly'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white active:bg-white/5'
                }`}
                aria-label="Monthly billing"
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 relative touch-manipulation ${
                  billingPeriod === 'annual'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white active:bg-white/5'
                }`}
                aria-label="Annual billing with 10% discount"
              >
                <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                  Annual
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
                    Save 10%
                  </Badge>
                </span>
              </button>
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 pt-4 sm:pt-6">
            {subscriptionPlans.map((plan) => {
              const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
              const isSelected = selectedPlan === plan.id;
              
              return (
                <div key={plan.id} className={`group relative ${plan.popular ? 'lg:scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center space-x-1.5 sm:space-x-2 shadow-2xl whitespace-nowrap">
                        <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current flex-shrink-0" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}
                  
                  <div 
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`pricing-card bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-8 border shadow-2xl transition-all duration-500 min-h-[550px] sm:min-h-[600px] flex flex-col relative overflow-hidden cursor-pointer touch-manipulation active:scale-[0.98] lg:group-hover:-translate-y-2 ${
                      isSelected 
                        ? 'border-2 border-cyan-400 shadow-cyan-500/30 ring-2 sm:ring-4 ring-cyan-500/20' 
                        : plan.popular 
                        ? 'border-2 border-cyan-400 shadow-cyan-500/30 lg:hover:shadow-cyan-500/40' 
                        : 'border border-white/20 lg:hover:shadow-cyan-500/20'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="text-center mb-6 sm:mb-8 flex-shrink-0">
                        <div className="text-4xl mb-3">{plan.emoji}</div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">{plan.name}</h3>
                        <div className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 text-white">
                          ${price}
                          <span className="text-lg sm:text-xl text-slate-400">
                            /{billingPeriod === 'monthly' ? 'month' : 'year'}
                          </span>
                        </div>
                        {billingPeriod === 'annual' && (
                          <p className="text-sm text-cyan-300">
                            ${(plan.monthlyPrice * 12 - price).toFixed(0)} savings per year
                          </p>
                        )}
                        <p className="text-slate-300 text-sm sm:text-base mt-3">{plan.bestFor}</p>
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
                        {isSelected && (
                          <div className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-3 mb-3 text-center">
                            <span className="text-cyan-300 text-sm font-semibold">✓ Selected</span>
                          </div>
                        )}
                        <div 
                          className="relative inline-block rounded-full p-[4px] transition-all duration-300 w-full touch-manipulation"
                          style={{
                            background: isSelected || plan.popular
                              ? 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))'
                              : 'linear-gradient(to right, rgb(71, 85, 105), rgb(100, 116, 139))'
                          }}
                          onMouseEnter={(e) => {
                            if (isSelected || plan.popular) {
                              e.currentTarget.style.background = 'rgb(168, 85, 247)';
                            } else {
                              e.currentTarget.style.background = 'linear-gradient(to right, rgb(100, 116, 139), rgb(148, 163, 184))';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isSelected || plan.popular) {
                              e.currentTarget.style.background = 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247), rgb(139, 92, 246))';
                            } else {
                              e.currentTarget.style.background = 'linear-gradient(to right, rgb(71, 85, 105), rgb(100, 116, 139))';
                            }
                          }}
                        >
                          <Button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPlan(plan.id);
                            }}
                            className={`w-full ${
                              isSelected || plan.popular
                                ? 'bg-black hover:bg-purple-500 text-white' 
                                : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-200'
                            } rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold active:scale-95 lg:hover:scale-105`}
                          >
                            {isSelected ? 'Selected' : 'Select Plan'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Optional Add-ons */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 mb-4 sm:mb-5 md:mb-6 border border-cyan-500/30">
              <Wrench className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-cyan-400 flex-shrink-0" />
              <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-cyan-300">Optional Add-Ons</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-white px-2">
              Enhance Your Plan
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto px-4">
              Add extra services to customize your subscription
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {addOns.map((addOn) => {
              const isSelected = selectedAddOns.includes(addOn.id);
              const isExtraTime = addOn.id === 'extra-time';
              
              return (
                <div
                  key={addOn.id}
                  onClick={isExtraTime ? undefined : () => handleAddOnToggle(addOn.id)}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-7 border transition-all duration-300 ${
                    isExtraTime 
                      ? 'border-white/20 cursor-default' 
                      : isSelected
                      ? 'border-2 border-cyan-400 shadow-cyan-500/30 bg-cyan-500/10 cursor-pointer hover:shadow-cyan-500/20 active:scale-[0.98]'
                      : 'border-white/20 hover:border-cyan-400/50 cursor-pointer hover:shadow-cyan-500/20 active:scale-[0.98]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                    <div className="flex items-start space-x-3 sm:space-x-4 flex-1 min-w-0">
                      {!isExtraTime && (
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 mt-0.5 ${
                          isSelected 
                            ? 'bg-cyan-500 border-cyan-400' 
                            : 'border-slate-400'
                        }`}>
                          {isSelected && <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight mb-2 break-words">{addOn.name}</h3>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{addOn.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-cyan-400 font-bold text-lg sm:text-xl whitespace-nowrap">{addOn.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-purple-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white px-2">
                Complete Your Subscription
              </h2>
              <p className="text-sm sm:text-base text-slate-300 px-2">
                Enter your information to proceed to checkout
              </p>
            </div>

            {/* Order Summary */}
            <div className="bg-white/5 rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 border border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-5 flex items-center">
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-cyan-400 flex-shrink-0" />
                Order Summary
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-slate-300 text-sm sm:text-base break-words">
                    {selectedPlanData.emoji} {selectedPlanData.name}
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap ml-2">
                    ${billingPeriod === 'monthly' ? selectedPlanData.monthlyPrice : selectedPlanData.annualPrice}/{billingPeriod === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </div>
                {selectedAddOns.length > 0 && (
                  <div className="pt-3 sm:pt-4 border-t border-white/10">
                    <p className="text-xs sm:text-sm text-slate-400 mb-2">Add-ons:</p>
                    {selectedAddOns.map(addOnId => {
                      const addOn = addOns.find(a => a.id === addOnId);
                      if (!addOn) return null;
                      
                      // For monthly add-ons, show correct pricing based on billing period
                      let displayPrice = addOn.price;
                      if (addOn.type === 'monthly' && addOn.id === 'blog-uploads') {
                        displayPrice = billingPeriod === 'monthly' ? '$20/month' : '$240/year';
                      }
                      
                      return (
                        <div key={addOnId} className="flex justify-between items-center gap-2 text-xs sm:text-sm text-slate-300 mb-1.5">
                          <span className="break-words">{addOn.name}</span>
                          <span className="whitespace-nowrap ml-2">{displayPrice}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="pt-3 sm:pt-4 border-t border-white/20">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-base sm:text-lg font-semibold text-white">Total</span>
                    <span className="text-xl sm:text-2xl font-bold text-cyan-400 whitespace-nowrap">
                      ${currentPrice}/{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Information Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleCheckout(); }} className="space-y-5 sm:space-y-6">
              <div>
                <Label htmlFor="name" className="text-white font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                  <User className="h-4 w-4 mr-2 text-cyan-400 flex-shrink-0" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 text-base sm:text-sm h-11 sm:h-10 ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="John Doe"
                  required
                />
                {errors.name && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1.5">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-white font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                  <Mail className="h-4 w-4 mr-2 text-cyan-400 flex-shrink-0" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 text-base sm:text-sm h-11 sm:h-10 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="john@example.com"
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1.5">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-white font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                  <Phone className="h-4 w-4 mr-2 text-cyan-400 flex-shrink-0" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 text-base sm:text-sm h-11 sm:h-10"
                  placeholder="(647) 835-1077"
                />
              </div>

              <div className="w-full">
                <div 
                  className={`relative inline-block rounded-full p-[4px] transition-all duration-300 w-full ${
                    isProcessing 
                      ? 'opacity-50 cursor-not-allowed' 
                      : ''
                  } ${
                    isButtonHovered && !isProcessing
                      ? 'bg-purple-500' 
                      : 'bg-gradient-to-r from-cyan-400 via-purple-500 to-violet-500'
                  }`}
                  onMouseEnter={() => !isProcessing && setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                >
                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-black hover:bg-purple-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-5 sm:py-6 text-base sm:text-lg font-semibold disabled:opacity-100 disabled:cursor-not-allowed touch-manipulation"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Proceed to Checkout
                        <CreditCard className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 text-center px-2">
                Secure checkout powered by Stripe. Your payment information is encrypted and secure.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Payment);
