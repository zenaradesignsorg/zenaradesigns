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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
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

            {/* Newsletter Subscription */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Newsletter</h3>
              <p className="text-slate-300 mb-4 text-sm">
                Subscribe to our newsletter and stay updated.
              </p>
              <div className="brevo-newsletter-form">
                <div className="sib-form" style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
                  <div id="sib-form-container" className="sib-form-container">
                    <div 
                      id="sib-container" 
                      className="sib-container--medium sib-container--vertical" 
                      style={{
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        maxWidth: '100%',
                        borderRadius: '12px',
                        borderWidth: '1px',
                        borderColor: 'rgba(139, 92, 246, 0.3)',
                        borderStyle: 'solid',
                        padding: '16px',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <form 
                        id="sib-form" 
                        method="POST" 
                        action="https://b15138b6.sibforms.com/serve/MUIFAOwmr3O2pUC0JwxhUO33Gtk7KOqHafuooQffpcwbpwvukxO_KjFdXdJ94mg3dohWwtqZHqbUf9fie3SinOqwOMAqeIr0IjoEoGJvVIfQ9k2CyozaAAmjC34YDF4nimW4H95Rprjd8pRQ3yHsdZx7zNaKlb603EbyZ-z-xl-huvYRjyDBmVt68SGFtzdInTGmUbwwHmr0ZYkaBg=="
                        className="w-full"
                      >
                        <div style={{ padding: '8px 0' }}>
                          <div className="sib-form-block" style={{ fontSize: '13px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#e2e8f0', backgroundColor: 'transparent' }}>
                            <div className="sib-text-form-block">
                              <p style={{ margin: 0, color: '#cbd5e1', lineHeight: '1.5' }}>Get the latest insights delivered to your inbox.</p>
                            </div>
                          </div>
                        </div>
                        <div style={{ padding: '8px 0' }}>
                          <div className="sib-input sib-form-block">
                            <div className="form__entry entry_block">
                              <div className="form__label-row">
                                <div className="entry__field">
                                  <input 
                                    className="input" 
                                    type="email" 
                                    id="EMAIL" 
                                    name="EMAIL" 
                                    autoComplete="off" 
                                    placeholder="Enter your email" 
                                    data-required="true" 
                                    required
                                    style={{
                                      width: '100%',
                                      padding: '10px 14px',
                                      borderRadius: '8px',
                                      border: '1px solid rgba(139, 92, 246, 0.3)',
                                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                      color: '#ffffff',
                                      fontSize: '14px',
                                      fontFamily: 'inherit',
                                      outline: 'none',
                                      transition: 'all 0.3s ease'
                                    }}
                                    onFocus={(e) => {
                                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.6)';
                                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                                    }}
                                    onBlur={(e) => {
                                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                  />
                                </div>
                              </div>
                              <label className="entry__error entry__error--primary" style={{ fontSize: '12px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#fca5a5', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '3px', borderColor: '#ef4444', padding: '4px 8px', marginTop: '4px', display: 'block' }}></label>
                              <label className="entry__specification" style={{ fontSize: '11px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#94a3b8', marginTop: '6px', display: 'block', lineHeight: '1.4' }}>
                                We'll never share your email. Unsubscribe anytime.
                              </label>
                            </div>
                          </div>
                        </div>
                        <div style={{ padding: '8px 0' }}>
                          <div className="sib-form-block" style={{ textAlign: 'left' }}>
                            <button 
                              className="sib-form-block__button sib-form-block__button-with-loader" 
                              style={{
                                fontSize: '14px',
                                textAlign: 'center',
                                fontWeight: '600',
                                fontFamily: 'Helvetica, sans-serif',
                                color: '#FFFFFF',
                                background: 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247))',
                                borderRadius: '8px',
                                borderWidth: '0px',
                                padding: '10px 20px',
                                width: '100%',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                              }}
                              form="sib-form" 
                              type="submit"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(to right, rgb(34, 211, 238), rgb(147, 51, 234))';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                                e.currentTarget.style.boxShadow = '0 6px 8px -1px rgba(0, 0, 0, 0.15)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(to right, rgb(34, 211, 238), rgb(168, 85, 247))';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                              }}
                            >
                              <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style={{ display: 'none' }}>
                                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                              </svg>
                              SUBSCRIBE
                            </button>
                          </div>
                        </div>
                        <input 
                          type="text" 
                          name="email_address_check" 
                          value="" 
                          className="input--hidden" 
                          style={{ display: 'none', visibility: 'hidden', position: 'absolute', left: '-9999px' }}
                          tabIndex={-1}
                          aria-hidden="true"
                        />
                        <input type="hidden" name="locale" value="en" />
                        <input type="hidden" name="html_type" value="simple" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
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