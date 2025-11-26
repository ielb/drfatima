import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TranslationData, Language } from '../types';

interface TrustSectionProps {
  t: TranslationData;
  lang: Language;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ t, lang }) => {
  const isArabic = lang === 'ar';
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={sectionRef} id="trust" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gold-900 rounded-3xl p-10 md:p-16 relative overflow-hidden text-white shadow-2xl">
          {/* Decorative Circles with Parallax */}
          <motion.div 
            style={{ rotate, y }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" 
          />
          <motion.div 
            style={{ rotate: rotate, y: y }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 origin-center" 
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            
            <div className="flex-1 text-center md:text-left rtl:md:text-right">
              <div className="flex items-center justify-center md:justify-start rtl:md:justify-end gap-2 mb-4">
                 {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="fill-gold-400 text-gold-400" size={24} />
                 ))}
              </div>
              <h3 className={`text-3xl md:text-4xl font-serif mb-2 ${isArabic ? 'font-arabic' : ''}`}>{t.trust.rating}</h3>
              <p className={`text-gold-100 opacity-80 ${isArabic ? 'font-arabic' : ''}`}>{t.trust.review_count}</p>
            </div>

            <div className="hidden md:block w-[1px] h-24 bg-white/20"></div>

            <div className="flex-[2] text-center md:text-left rtl:md:text-right">
              <Quote className={`text-gold-400 mb-4 mx-auto md:mx-0 ${isArabic ? 'rotate-180' : ''}`} size={40} />
              <p className={`text-xl md:text-2xl font-light italic leading-relaxed text-cream-50 ${isArabic ? 'font-arabic not-italic' : 'font-serif'}`}>
                {t.trust.quote}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};