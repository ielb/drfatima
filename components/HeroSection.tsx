import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scene } from './Scene';
import { TranslationData, Language } from '../types';
import { DOCTOR_NAME, TAGLINE } from '../constants';

interface HeroSectionProps {
  t: TranslationData;
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ t, lang }) => {
  const isArabic = lang === 'ar';
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream-50">
      {/* 3D Background with parallax opacity */}
      <motion.div style={{ opacity }} className="absolute inset-0 z-0">
        <Scene />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-3xl ${isArabic ? 'text-right ml-auto' : 'text-left'}`}>
          <motion.div
            style={{ y, opacity, scale }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`block text-gold-600 font-bold tracking-[0.2em] mb-4 text-sm md:text-base uppercase ${isArabic ? 'font-arabic tracking-normal' : ''}`}>
              {t.hero.subtitle}
            </span>
            
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-gray-800 leading-tight mb-6 ${isArabic ? 'font-arabic' : ''}`}>
              {t.hero.title}
            </h1>
            
            <div className={`h-1 w-24 bg-gold-400 mb-8 ${isArabic ? 'ml-auto mr-0' : 'mr-auto ml-0'}`} />
            
            <p className={`text-gray-600 text-lg md:text-xl mb-2 font-light ${isArabic ? 'font-arabic' : ''}`}>
              {DOCTOR_NAME}
            </p>
            <p className={`text-gray-500 text-sm md:text-base mb-10 max-w-xl ${isArabic ? 'font-arabic ml-auto' : ''}`}>
              {TAGLINE}
            </p>

            <div className="flex flex-wrap gap-4 justify-start rtl:justify-end">
              <a 
                href="tel:+212696370264"
                className={`bg-gold-500 text-white px-8 py-4 rounded-full shadow-gold-300/50 shadow-lg hover:bg-gold-600 hover:scale-105 transition-all duration-300 font-semibold tracking-wide ${isArabic ? 'font-arabic' : ''}`}
              >
                {t.hero.cta}
              </a>
              <a 
                href="#services"
                className={`bg-white/50 backdrop-blur-sm border border-gold-300 text-gold-900 px-8 py-4 rounded-full hover:bg-white transition-all duration-300 font-semibold ${isArabic ? 'font-arabic' : ''}`}
              >
                {t.nav.services}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-400 to-transparent"></div>
      </motion.div>
    </section>
  );
};