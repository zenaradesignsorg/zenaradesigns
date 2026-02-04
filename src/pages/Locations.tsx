import { useScrollToTop, useSEO } from '@/hooks';
import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Award,
  CheckCircle,
  Globe,
  Building,
  Navigation
} from 'lucide-react';

const Locations = () => {
  useScrollToTop();
  
  // SEO meta tags - Indexed for local SEO and city-specific searches
  useSEO({
    title: "Web Design Services GTA | Toronto, Mississauga | Zenara",
    description: "Web design services across the GTA. Serving Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, and Burlington. Contact us for local service!",
    canonical: "https://zenaradesigns.com/locations"
  });

  const locations = [
    {
      city: "Toronto",
      description: "Web design and development services in downtown Toronto, serving businesses in the financial district, entertainment district, and surrounding neighborhoods.",
      services: ["Web Design Toronto", "Business Cards Toronto", "Logo Design Toronto", "E-commerce Development Toronto"],
      neighborhoods: ["Downtown Toronto", "Financial District", "Entertainment District", "Yorkville", "Distillery District", "Harbourfront"]
    },
    {
      city: "Mississauga",
      description: "Professional web design services in Mississauga, serving businesses in Square One, Port Credit, and throughout the city.",
      services: ["Web Design Mississauga", "Business Cards Mississauga", "Logo Design Mississauga", "Digital Marketing Mississauga"],
      neighborhoods: ["Square One", "Port Credit", "Streetsville", "Meadowvale", "Clarkson", "Malton"]
    },
    {
      city: "Brampton",
      description: "Custom website design and development for Brampton businesses, from small startups to large corporations.",
      services: ["Web Design Brampton", "Business Cards Brampton", "Logo Design Brampton", "Website Maintenance Brampton"],
      neighborhoods: ["Downtown Brampton", "Bramalea", "Springdale", "Sandalwood", "Fletcher's Creek", "Heart Lake"]
    },
    {
      city: "Vaughan",
      description: "Leading web design agency in Vaughan, specializing in e-commerce and corporate website development.",
      services: ["Web Design Vaughan", "Business Cards Vaughan", "Logo Design Vaughan", "E-commerce Development Vaughan"],
      neighborhoods: ["Woodbridge", "Thornhill", "Maple", "Kleinburg", "Concord", "Vellore Village"]
    },
    {
      city: "Markham",
      description: "Innovative web design solutions for Markham businesses, with expertise in tech startups and professional services.",
      services: ["Web Design Markham", "Business Cards Markham", "Logo Design Markham", "Tech Startup Websites Markham"],
      neighborhoods: ["Downtown Markham", "Unionville", "Thornhill", "Milliken", "Markham Village", "Buttonville"]
    },
    {
      city: "Richmond Hill",
      description: "Professional web design services in Richmond Hill, serving diverse businesses from retail to healthcare.",
      services: ["Web Design Richmond Hill", "Business Cards Richmond Hill", "Logo Design Richmond Hill", "Healthcare Websites Richmond Hill"],
      neighborhoods: ["Downtown Richmond Hill", "Bayview", "Oak Ridges", "Langstaff", "Jefferson", "Crosby"]
    },
    {
      city: "Oakville",
      description: "Premium web design and development services for Oakville businesses, focusing on luxury brands and professional services.",
      services: ["Web Design Oakville", "Business Cards Oakville", "Logo Design Oakville", "Luxury Brand Websites Oakville"],
      neighborhoods: ["Downtown Oakville", "Bronte", "Glen Abbey", "West Oak Trails", "Iroquois Ridge", "Clearview"]
    },
    {
      city: "Burlington",
      description: "Creative web design solutions for Burlington businesses, specializing in tourism, hospitality, and local services.",
      services: ["Web Design Burlington", "Business Cards Burlington", "Logo Design Burlington", "Tourism Websites Burlington"],
      neighborhoods: ["Downtown Burlington", "Aldershot", "Appleby", "Millcroft", "Palmer", "Tansley"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Stars */}
        <div className="absolute top-16 left-16 w-1 h-1 bg-indigo-300 rounded-full animate-twinkle"></div>
        <div className="absolute top-32 right-24 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-1000"></div>
        <div className="absolute top-48 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle delay-2000"></div>
        <div className="absolute top-24 right-1/3 w-1 h-1 bg-violet-300 rounded-full animate-twinkle delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle delay-1500"></div>
        <div className="absolute bottom-48 right-1/4 w-1 h-1 bg-orange-300 rounded-full animate-twinkle delay-3000"></div>
        
        {/* Nebula Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-indigo-500/30">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-indigo-300">Service Areas</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
            Web Design Services Across the <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Greater Toronto Area</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
            Professional web design, business card design, and logo design services for businesses in Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, and Burlington
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg">
                      <Building className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      Web Design {location.city}
                    </h2>
                  </div>
                  
                  <p className="text-slate-300 mb-6 text-sm sm:text-base leading-relaxed flex-grow">
                    {location.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-indigo-400 mb-3 flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>Services:</span>
                    </h3>
                    <ul className="space-y-2">
                      {location.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-sm font-semibold text-indigo-400 mb-3 flex items-center space-x-2">
                      <Navigation className="h-4 w-4" />
                      <span>Neighborhoods:</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {location.neighborhoods.map((neighborhood, neighborhoodIndex) => (
                        <span key={neighborhoodIndex} className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30">
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl relative overflow-hidden mb-16">
          {/* Glassmorphism Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 border border-indigo-500/30">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-indigo-300">Why Choose Us</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zenara Designs for Your <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">GTA Web Design Project?</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-2">8</div>
                  <div className="text-slate-300 text-sm sm:text-base">GTA Cities Served</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-2">50+</div>
                  <div className="text-slate-300 text-sm sm:text-base">Neighborhoods Covered</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-2">30+</div>
                  <div className="text-slate-300 text-sm sm:text-base">Projects Completed</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-2">24/7</div>
                  <div className="text-slate-300 text-sm sm:text-base">Local Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
            {/* Glassmorphism Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                <span className="text-indigo-300 font-medium text-lg">
                  Ready to Start Your Web Design Project?
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Get Your <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Free Consultation</span>
              </h2>
              <p className="text-slate-300 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                Contact us today for a free consultation about your web design, business card, or logo design needs in your GTA city
              </p>
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
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated Date */}
        <div className="text-center mt-12">
          <p className="text-transparent text-sm">
            Last updated: January 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Locations);
