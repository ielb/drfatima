import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Language, TranslationData } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'fr' ? 'ar' : 'fr';
    setLang(newLang);
    // Update document direction
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-xl md:text-2xl font-serif font-bold tracking-wide text-gold-900 ${lang === 'ar' ? 'font-arabic' : ''}`}>
           Dr. Abouliatim<span className="text-gold-500">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-gray-700 hover:text-gold-600 transition-colors uppercase text-sm tracking-widest font-medium ${lang === 'ar' ? 'font-arabic text-base' : ''}`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLang}
            className="flex items-center gap-1 text-gray-500 hover:text-gold-600 transition-colors"
            aria-label="Toggle Language"
          >
            <Globe size={18} />
            <span className="uppercase text-xs font-bold">{lang}</span>
          </button>

          <a 
            href="tel:+212696370264" 
            className="bg-gold-500 hover:bg-gold-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <Phone size={14} />
            <span>{t.nav.book}</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleLang} className="text-gray-600">
             <span className="uppercase text-sm font-bold">{lang}</span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gold-900">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center py-8 space-y-6 md:hidden glass-card">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`text-gray-800 text-lg hover:text-gold-600 font-medium ${lang === 'ar' ? 'font-arabic' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+212696370264" 
            className="bg-gold-500 text-white px-8 py-3 rounded-full shadow-lg"
          >
            {t.nav.book}
          </a>
        </div>
      )}
    </header>
  );
};