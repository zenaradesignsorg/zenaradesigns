import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { scrollToTop } from '@/hooks';
import { BUSINESS_EMAIL, BUSINESS_PHONE, NAVIGATION_LINKS, FOOTER_ADDITIONAL_LINKS } from '@/lib/constants';
import logo from '@/assets/zenaralogo-transparentbg.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = NAVIGATION_LINKS;

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-black via-indigo-900 to-purple-900">
      {/* Background Stars */}
      <div className="absolute inset-0 opacity-30">
        {/* Small stars */}
        <div className="bg-star" style={{ top: '10%', left: '5%' }}></div>
        <div className="bg-star" style={{ top: '15%', left: '15%' }}></div>
        <div className="bg-star" style={{ top: '8%', left: '25%' }}></div>
        <div className="bg-star" style={{ top: '20%', left: '35%' }}></div>
        <div className="bg-star" style={{ top: '12%', left: '45%' }}></div>
        <div className="bg-star" style={{ top: '18%', left: '55%' }}></div>
        <div className="bg-star" style={{ top: '6%', left: '65%' }}></div>
        <div className="bg-star" style={{ top: '22%', left: '75%' }}></div>
        <div className="bg-star" style={{ top: '14%', left: '85%' }}></div>
        <div className="bg-star" style={{ top: '16%', left: '95%' }}></div>
        
        <div className="bg-star" style={{ top: '30%', left: '8%' }}></div>
        <div className="bg-star" style={{ top: '35%', left: '18%' }}></div>
        <div className="bg-star" style={{ top: '28%', left: '28%' }}></div>
        <div className="bg-star" style={{ top: '32%', left: '38%' }}></div>
        <div className="bg-star" style={{ top: '26%', left: '48%' }}></div>
        <div className="bg-star" style={{ top: '34%', left: '58%' }}></div>
        <div className="bg-star" style={{ top: '29%', left: '68%' }}></div>
        <div className="bg-star" style={{ top: '31%', left: '78%' }}></div>
        <div className="bg-star" style={{ top: '27%', left: '88%' }}></div>
        <div className="bg-star" style={{ top: '33%', left: '92%' }}></div>
        
        <div className="bg-star" style={{ top: '45%', left: '12%' }}></div>
        <div className="bg-star" style={{ top: '48%', left: '22%' }}></div>
        <div className="bg-star" style={{ top: '42%', left: '32%' }}></div>
        <div className="bg-star" style={{ top: '46%', left: '42%' }}></div>
        <div className="bg-star" style={{ top: '44%', left: '52%' }}></div>
        <div className="bg-star" style={{ top: '49%', left: '62%' }}></div>
        <div className="bg-star" style={{ top: '41%', left: '72%' }}></div>
        <div className="bg-star" style={{ top: '47%', left: '82%' }}></div>
        <div className="bg-star" style={{ top: '43%', left: '92%' }}></div>
        
        <div className="bg-star" style={{ top: '60%', left: '6%' }}></div>
        <div className="bg-star" style={{ top: '65%', left: '16%' }}></div>
        <div className="bg-star" style={{ top: '62%', left: '26%' }}></div>
        <div className="bg-star" style={{ top: '68%', left: '36%' }}></div>
        <div className="bg-star" style={{ top: '64%', left: '46%' }}></div>
        <div className="bg-star" style={{ top: '66%', left: '56%' }}></div>
        <div className="bg-star" style={{ top: '61%', left: '66%' }}></div>
        <div className="bg-star" style={{ top: '67%', left: '76%' }}></div>
        <div className="bg-star" style={{ top: '63%', left: '86%' }}></div>
        <div className="bg-star" style={{ top: '69%', left: '96%' }}></div>
        
        <div className="bg-star" style={{ top: '75%', left: '10%' }}></div>
        <div className="bg-star" style={{ top: '78%', left: '20%' }}></div>
        <div className="bg-star" style={{ top: '72%', left: '30%' }}></div>
        <div className="bg-star" style={{ top: '76%', left: '40%' }}></div>
        <div className="bg-star" style={{ top: '74%', left: '50%' }}></div>
        <div className="bg-star" style={{ top: '79%', left: '60%' }}></div>
        <div className="bg-star" style={{ top: '71%', left: '70%' }}></div>
        <div className="bg-star" style={{ top: '77%', left: '80%' }}></div>
        <div className="bg-star" style={{ top: '73%', left: '90%' }}></div>
        
        <div className="bg-star" style={{ top: '85%', left: '4%' }}></div>
        <div className="bg-star" style={{ top: '88%', left: '14%' }}></div>
        <div className="bg-star" style={{ top: '82%', left: '24%' }}></div>
        <div className="bg-star" style={{ top: '86%', left: '34%' }}></div>
        <div className="bg-star" style={{ top: '84%', left: '44%' }}></div>
        <div className="bg-star" style={{ top: '89%', left: '54%' }}></div>
        <div className="bg-star" style={{ top: '81%', left: '64%' }}></div>
        <div className="bg-star" style={{ top: '87%', left: '74%' }}></div>
        <div className="bg-star" style={{ top: '83%', left: '84%' }}></div>
        <div className="bg-star" style={{ top: '90%', left: '94%' }}></div>
      </div>

      <div className="relative z-10">
        {/* ZENARA Brand Section */}
        <div className="py-16 text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/5 leading-none tracking-widest uppercase" style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '800',
            letterSpacing: '0.1em',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
          }}>
            Zenara Designs
          </h1>
          
          {/* Divider Line */}
          <div className="mt-8 flex justify-center">
            <div className="w-64 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-[8fr_5fr_5fr_7fr] gap-8 md:gap-16 lg:gap-20">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="Zenara Designs - Professional Web Design Agency Toronto" className="h-8 w-auto" width="32" height="32" loading="lazy" decoding="async" />
                <span className="font-normal text-lg text-white">Zenara Designs</span>
              </div>
              <p className="text-slate-300 max-w-md">
                Creating high-performing websites for small businesses and professionals using modern development workflows.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 text-slate-300">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-cyan-400 transition-colors break-all" rel="noopener noreferrer">
                    {BUSINESS_EMAIL}
                  </a>
                </div>
                <div className="flex items-start space-x-2 text-slate-300">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href={`tel:${BUSINESS_PHONE}`} className="hover:text-cyan-400 transition-colors" rel="noopener noreferrer">
                    {BUSINESS_PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <div className="grid grid-cols-1 gap-x-1 gap-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <div className="grid grid-cols-1 gap-x-1 gap-y-2">
                {FOOTER_ADDITIONAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Get In Touch</h3>
              <p className="text-slate-300 mb-4">
                Ready to transform your digital presence? Let's discuss your project.
              </p>
              <Link to="/contact" onClick={scrollToTop} className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-400/30 hover:border-cyan-400/50 text-cyan-300 hover:text-white text-sm px-6 py-3 rounded-xl transition-all duration-300">
                Start a Project
              </Link>
            </div>
          </div>

          <div className="border-t border-cyan-400/20 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © {currentYear} Zenara Designs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;