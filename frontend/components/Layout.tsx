import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '客房介紹', path: '/rooms' },
    { name: '包棟方案', path: '/plans' },
    { name: '住宿須知', path: '/rules' },
    { name: '常見問答', path: '/faq' },
  ];

  const isHomePage = location.pathname === '/';
  const forceDarkText = !isHomePage || isScrolled;

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-warm-gold selection:text-white">
      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-700 ${
          forceDarkText ? 'bg-warm-bg/95 backdrop-blur-md shadow-sm py-4' : 'bg-gradient-to-b from-black/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Image Logo */}
          <Link to="/" className="flex items-center group hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out">
            <img 
              src={!forceDarkText ? "/logo-white.png" : "/logo-black.png"}
              alt="森33-3行旅" 
              className="h-12 md:h-14 w-auto object-contain transition-all duration-500"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-bold tracking-[0.15em] hover:-translate-y-[2px] active:scale-[0.98] hover:opacity-70 transition-all duration-500 ease-out ${
                  forceDarkText ? 'text-warm-text' : 'text-white'
                } ${location.pathname === link.path ? 'border-b-2 border-current pb-1' : 'pb-1 border-b-2 border-transparent'}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CONTACT_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-8 py-3 text-xl font-serif font-bold tracking-[0.2em] bg-warm-gold text-white rounded-sm shadow-btn hover:shadow-btn-hover hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out"
            >
              立即訂房
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 transition-colors duration-500 hover:-translate-y-[2px] active:scale-[0.98] ease-out"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? '關閉選單' : '開啟選單'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X size={32} strokeWidth={1.5} className={forceDarkText ? 'text-warm-text' : 'text-white'} />
            ) : (
              <Menu size={32} strokeWidth={1.5} className={forceDarkText ? 'text-warm-text' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          id="mobile-navigation"
          className={`md:hidden absolute top-full left-0 w-full bg-warm-bg shadow-xl transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[600px] border-t border-warm-text/10 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col px-8 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-warm-text text-xl font-bold tracking-[0.2em] py-3 border-b border-warm-text/10 hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CONTACT_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-center bg-warm-gold text-white text-2xl font-serif font-medium py-4 tracking-[0.2em] rounded-sm shadow-btn hover:shadow-btn-hover hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out"
            >
              立即訂房
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-warm-dark text-warm-bg/70 pt-20 pb-10 px-6 md:px-12 border-t border-warm-text/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pb-16 border-b border-warm-bg/10">
            
            {/* Brand Column */}
            <div className="md:col-span-4 flex flex-col items-start">
              {/* Image Logo for Footer */}
              <div className="flex flex-col items-center md:items-start mb-8">
                <img 
                  src="/logo-white.png"
                  alt="森33-3行旅" 
                  className="h-14 md:h-16 w-auto object-contain opacity-90"
                  loading="lazy"
                />
              </div>
              
              <p className="text-base tracking-[0.3em] mb-10 text-warm-bg/75 leading-relaxed font-light">
                整棟都是你們的，自在就好。
              </p>
              <div className="flex gap-6">
                <a href={CONTACT_INFO.fb} target="_blank" rel="noopener noreferrer" aria-label="前往森33-3行旅 Facebook" className="text-warm-bg/50 hover:text-warm-bg hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href={CONTACT_INFO.ig} target="_blank" rel="noopener noreferrer" aria-label="前往森33-3行旅 Instagram" className="text-warm-bg/50 hover:text-warm-bg hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Column */}
            <div className="md:col-span-5 flex flex-col gap-6 text-base tracking-[0.1em] font-normal">
              <h4 className="text-warm-gold text-sm tracking-[0.2em] font-medium mb-2">CONTACT</h4>
              
              {/* LINE */}
              <a href="https://line.me/R/ti/p/@469pofut" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gold">
                <div className="mt-1 shrink-0 text-warm-gold group-hover:text-warm-gold/80 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v3.51h1.755c.345 0 .627.283.627.63 0 .344-.282.629-.627.629zM24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314z"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-warm-bg font-medium text-lg group-hover:text-warm-gold transition-colors">{CONTACT_INFO.line}</span>
                  <span className="text-xs bg-warm-gold/20 text-warm-gold border border-warm-gold/30 px-2 py-1 rounded-sm tracking-widest">主要推薦聯絡方式</span>
                </div>
              </a>

              {/* Phone */}
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 group hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gold">
                <Phone size={20} strokeWidth={1.5} className="shrink-0 text-warm-bg/50 group-hover:text-warm-bg transition-colors" />
                <span className="text-warm-bg/90">{CONTACT_INFO.phone}</span>
              </a>

              {/* Email */}
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gold">
                <Mail size={20} strokeWidth={1.5} className="shrink-0 text-warm-bg/50 group-hover:text-warm-bg transition-colors" />
                <span className="text-warm-bg/90">{CONTACT_INFO.email}</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 group hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out cursor-default">
                <MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-warm-bg/50 group-hover:text-warm-bg transition-colors" />
                <span className="leading-relaxed text-warm-bg/90">{CONTACT_INFO.address}</span>
              </div>
            </div>

            {/* Action Column */}
            <div className="md:col-span-3 flex flex-col items-start md:items-end justify-start pt-2 md:pt-0">
              <h4 className="text-warm-gold text-sm tracking-[0.2em] font-medium mb-8 hidden md:block opacity-0">ACTION</h4>
              <a
                href={CONTACT_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-warm-gold text-white px-10 py-4 text-xl font-serif font-medium tracking-[0.2em] rounded-sm shadow-btn hover:shadow-btn-hover hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-500 ease-out w-full md:w-auto text-center"
              >
                立即訂房
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-warm-bg/50 tracking-wider font-normal">
              合法民宿登記 · 南投縣民宿編號 1248
            </p>
            <p className="text-sm text-warm-bg/40 tracking-wider font-normal">
              © {new Date().getFullYear()} Sen 33-3 Mori.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
