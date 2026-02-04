import { useState, memo } from 'react';
import { Mail, Clock, CheckCircle, ArrowRight, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SecureInput, SecureTextarea } from '@/components/ui/secure-input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useScrollToTop, useSEO } from '@/hooks';
import { sendContactEmail, contactFormSchema, type ContactFormData } from '@/lib/email-service';
import { BUSINESS_EMAIL, BUSINESS_PHONE } from '@/lib/constants';
import type { ProcessStepInfo } from '@/lib/types';

const Contact = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  // SEO meta tags
  useSEO({
    title: "Contact Us | Web Design Toronto | Zenara Designs",
    description: "Contact Zenara Designs for professional web design, development, and digital marketing services in Toronto & GTA. Get a free quote for your project today.",
    canonical: "https://zenaradesigns.com/contact",
    structuredData: {
      type: 'localBusiness'
    }
  });
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: undefined,
    company: undefined,
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData) as ContactFormData;
      
      // Send email
      const result = await sendContactEmail(validatedData);
      
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: result.message,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: undefined,
          company: undefined,
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        toast({
          title: "Failed to send message",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      if (error instanceof Error && error.name === 'ZodError') {
        // Handle validation errors
        const zodError = error as any;
        const fieldErrors: Record<string, string> = {};
        zodError.errors?.forEach((err: any) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          title: "Please check your form",
          description: "Some fields need to be corrected.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      [field]: value === '' && (field === 'phone' || field === 'company') ? undefined : value 
    }));
  };

  const processSteps: ProcessStepInfo[] = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Send us a message",
      description: "Tell us about your project and goals"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24-48 hour response", 
      description: "We'll review and get back to you quickly"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Discovery call",
      description: "30-minute call to discuss your needs and timeline"
    }
  ];

  return (
    <div className="min-h-screen" role="main" aria-label="Contact page">

      {/* Contact Form & Info - Space Theme */}
      <section id="contact-form" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Space Background Elements */}
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
          <div className="shooting-star shooting-star-9"></div>
          <div className="shooting-star shooting-star-10"></div>
          <div className="shooting-star shooting-star-11"></div>
          <div className="shooting-star shooting-star-12"></div>
          <div className="shooting-star shooting-star-13"></div>
          <div className="shooting-star shooting-star-14"></div>
          <div className="shooting-star shooting-star-15"></div>
          <div className="shooting-star shooting-star-16"></div>
          <div className="shooting-star shooting-star-17"></div>
          <div className="shooting-star shooting-star-18"></div>
          <div className="shooting-star shooting-star-19"></div>
          <div className="shooting-star shooting-star-20"></div>
          
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
          <div className="bg-star bg-star-31"></div>
          <div className="bg-star bg-star-32"></div>
          <div className="bg-star bg-star-33"></div>
          <div className="bg-star bg-star-34"></div>
          <div className="bg-star bg-star-35"></div>
          <div className="bg-star bg-star-36"></div>
          
          {/* Rocket Animation */}
          <div className="rocket-container">
            <div className="rocket-emoji">🚀</div>
          </div>
          
          {/* Nebula Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-cyan-500/30">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300">Get In Touch</span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Digital Presence?</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              Whether you're a startup looking to make a splash or an established business ready to modernize, we're here to help. Professional web design services in Toronto & GTA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="contact-card bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden">
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Get in touch</h3>
                  <p className="text-slate-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                    Our team responds to all inquiries personally and promptly. We're here to help you succeed.
                  </p>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-white text-base sm:text-lg">Email us directly</p>
                        <a 
                          href={`mailto:${BUSINESS_EMAIL}`}
                          className="text-cyan-300 hover:text-cyan-200 transition-colors text-sm sm:text-base break-all"
                          rel="noopener noreferrer"
                        >
                          {BUSINESS_EMAIL}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-white text-base sm:text-lg">Call us directly</p>
                        <a 
                          href={`tel:${BUSINESS_PHONE}`} 
                          className="text-cyan-300 hover:text-cyan-200 transition-colors text-sm sm:text-base"
                          rel="noopener noreferrer"
                        >
                          {BUSINESS_PHONE}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-white text-base sm:text-lg">Business Hours</p>
                        <p className="text-slate-300 text-sm sm:text-base">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-card bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden">
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">What to expect:</h4>
                  <div className="space-y-4 sm:space-y-6">
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                          <div className="h-5 w-5 sm:h-6 sm:w-6">{step.icon}</div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="font-semibold mb-1 sm:mb-2 text-white text-base sm:text-lg">{step.title}</h5>
                          <p className="text-slate-300 text-sm sm:text-base">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" role="form" aria-label="Contact form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white font-semibold text-sm sm:text-base">Name *</Label>
                      <SecureInput 
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required 
                        className={`bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-10 sm:h-11 text-sm sm:text-base ${errors.name ? 'border-red-400' : ''}`}
                        sanitizeMode="none"
                        maxLength={100}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-400 text-xs sm:text-sm mt-1" role="alert">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white font-semibold text-sm sm:text-base">Email *</Label>
                      <SecureInput 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required 
                        className={`bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-10 sm:h-11 text-sm sm:text-base ${errors.email ? 'border-red-400' : ''}`}
                        sanitizeMode="basic"
                        maxLength={254}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-400 text-xs sm:text-sm mt-1" role="alert">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-white font-semibold text-sm sm:text-base">Phone</Label>
                      <SecureInput 
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-10 sm:h-11 text-sm sm:text-base"
                        sanitizeMode="xss"
                        maxLength={20}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-white font-semibold text-sm sm:text-base">Company</Label>
                      <SecureInput 
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-10 sm:h-11 text-sm sm:text-base"
                        sanitizeMode="none"
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectType" className="text-white font-semibold text-sm sm:text-base">Project Type *</Label>
                    <Select onValueChange={(value) => handleChange('projectType', value)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-cyan-400 focus:ring-cyan-400/20 h-10 sm:h-11 text-sm sm:text-base">
                        <SelectValue placeholder="What type of project?" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-600 text-white">
                        <SelectItem value="website" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">Website Design & Development</SelectItem>
                        <SelectItem value="ecommerce" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">E-commerce Store</SelectItem>
                        <SelectItem value="webapp" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">Web Application</SelectItem>
                        <SelectItem value="redesign" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">Website Redesign</SelectItem>
                        <SelectItem value="maintenance" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">Maintenance & Support</SelectItem>
                        <SelectItem value="consulting" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">Consulting</SelectItem>
                        <SelectItem value="other" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.projectType && (
                      <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.projectType}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget" className="text-white font-semibold text-sm sm:text-base">Budget Range *</Label>
                      <Select onValueChange={(value) => handleChange('budget', value)}>
                        <SelectTrigger className={`bg-white/10 border-white/20 text-white focus:border-cyan-400 focus:ring-cyan-400/20 h-10 sm:h-11 text-sm sm:text-base ${errors.budget ? 'border-red-400' : ''}`}>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-600 text-white">
                          <SelectItem value="under-1k" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">Under $1,000</SelectItem>
                          <SelectItem value="1k-3k" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">$1,000 - $3,000</SelectItem>
                          <SelectItem value="3k-5k" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">$3,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-plus" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">$10,000+</SelectItem>
                          <SelectItem value="discuss" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.budget && (
                        <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.budget}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="timeline" className="text-white font-semibold text-sm sm:text-base">Timeline *</Label>
                      <Select onValueChange={(value) => handleChange('timeline', value)}>
                        <SelectTrigger className={`bg-white/10 border-white/20 text-white focus:border-cyan-400 focus:ring-cyan-400/20 h-10 sm:h-11 text-sm sm:text-base ${errors.timeline ? 'border-red-400' : ''}`}>
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-600 text-white">
                          <SelectItem value="asap" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">ASAP</SelectItem>
                          <SelectItem value="1-month" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">Within 1 month</SelectItem>
                          <SelectItem value="1-3-months" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">1-3 months</SelectItem>
                          <SelectItem value="exploring" className="text-white hover:bg-slate-700 focus:bg-slate-700 text-sm sm:text-base">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.timeline && (
                        <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.timeline}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white font-semibold text-sm sm:text-base">Tell us about your project *</Label>
                    <SecureTextarea 
                      id="message"
                      rows={4}
                      placeholder="Describe your project goals, target audience, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      className={`bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 text-sm sm:text-base resize-none ${errors.message ? 'border-red-400' : ''}`}
                      sanitizeMode="none"
                      maxLength={2000}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Honeypot field for spam protection */}
                  <input 
                    type="text" 
                    name="website_url" 
                    style={{ display: 'none' }} 
                    tabIndex={-1}
                    autoComplete="off"
                    aria-label="Leave this field empty"
                  />

                  <div className="w-full">
                    <div 
                      className={`relative inline-block rounded-full p-[4px] transition-all duration-300 w-full ${
                        isSubmitting 
                          ? 'opacity-50 cursor-not-allowed' 
                          : ''
                      } ${
                        isButtonHovered && !isSubmitting
                          ? 'bg-purple-500' 
                          : 'bg-gradient-to-r from-cyan-400 via-purple-500 to-violet-500'
                      }`}
                      onMouseEnter={() => !isSubmitting && setIsButtonHovered(true)}
                      onMouseLeave={() => setIsButtonHovered(false)}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-black hover:bg-purple-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold disabled:opacity-100 disabled:cursor-not-allowed min-h-[44px]"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:h-5 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Send Message
                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 text-center">
                    We'll get back to you within 24-48 hours with next steps.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default memo(Contact);