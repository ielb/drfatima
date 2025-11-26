import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { InfoSection } from './components/InfoSection';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

function App() {
  // Default to French
  const [lang, setLang] = useState<Language>('fr');

  useEffect(() => {
    // Initial RTL setup based on default
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-cream-50 overflow-x-hidden selection:bg-gold-200 selection:text-gold-900">
      <Header lang={lang} setLang={setLang} />
      
      <main>
        <HeroSection t={t} lang={lang} />
        <ServicesSection t={t} lang={lang} />
        <AboutSection t={t} lang={lang} />
        <GallerySection t={t} lang={lang} />
        <TrustSection t={t} lang={lang} />
        <InfoSection t={t} lang={lang} />
      </main>

      <Footer t={t} lang={lang} />
    </div>
  );
}

export default App;