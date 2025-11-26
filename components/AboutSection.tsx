import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, HeartHandshake, Zap, Award } from 'lucide-react';
import { TranslationData, Language } from '../types';
import { DOCTOR_NAME } from '../constants';

interface AboutSectionProps {
  t: TranslationData;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t, lang }) => {
  const isArabic = lang === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax for image
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  // Subtle rotation for background elements
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-cream-50 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <motion.div 
            style={{ rotate }}
            className="absolute top-20 right-0 w-[600px] h-[600px] bg-gold-100/30 rounded-full blur-[100px]" 
         />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
          
          {/* Visual Side - Portrait Photo with Parallax */}
          <div className={`w-full lg:w-5/12 relative ${isArabic ? 'lg:order-2' : ''}`}>
            <motion.div 
              style={{ y: imageY }}
              className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 aspect-[3/4] will-change-transform"
            >
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?auto=format&fit=crop&q=80&w=800&sat=-10" 
                alt="Dr. Fatima zahra Abouliatim" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold-900/40 via-transparent to-transparent"></div>
              
              {/* Floating Badge - Moves slightly less for depth */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/40">
                 <div className="flex items-center gap-3 mb-2">
                    <Award className="text-gold-500" size={20} />
                    <p className="text-gold-900 font-serif font-bold text-lg">{DOCTOR_NAME}</p>
                 </div>
                 <div className="h-0.5 w-full bg-gradient-to-r from-gold-300 to-transparent mb-2"></div>
                 <p className="text-gray-500 text-xs uppercase tracking-widest leading-relaxed">{t.about.subtitle}</p>
              </div>
            </motion.div>
            
            {/* Outline Decorative Element - Static relative to container */}
            <div className={`absolute -top-4 -right-4 w-full h-full border-2 border-gold-400/30 rounded-[2rem] z-0 hidden lg:block ${isArabic ? '-left-4 right-auto' : ''}`}></div>
          </div>

          {/* Text Side - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`w-full lg:w-7/12 flex flex-col ${isArabic ? 'lg:order-1 text-right' : ''}`}
          >
            <span className={`block text-gold-600 font-bold tracking-[0.2em] text-sm mb-4 uppercase ${isArabic ? 'font-arabic tracking-normal' : ''}`}>
               {t.nav.about}
            </span>
            <h2 className={`text-4xl md:text-5xl font-serif text-gray-800 mb-8 leading-tight ${isArabic ? 'font-arabic' : ''}`}>
              {t.about.title}
            </h2>
            
            {/* Bio */}
            <p className={`text-gray-600 leading-relaxed text-lg mb-10 ${isArabic ? 'font-arabic' : ''}`}>
              {t.about.bio}
            </p>

            {/* Qualifications Chips */}
            <div className={`flex flex-wrap gap-3 mb-12 ${isArabic ? 'justify-end' : ''}`}>
               {t.about.qualifications.map((qual, idx) => (
                 <span key={idx} className={`inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm text-gold-800 font-medium border border-gold-100 hover:border-gold-300 transition-colors ${isArabic ? 'flex-row-reverse font-arabic' : ''}`}>
                    <GraduationCap size={16} className="text-gold-500" />
                    {qual}
                 </span>
               ))}
            </div>

            {/* Philosophy & Tech Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Philosophy Card */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center text-gold-600 mb-4 ${isArabic ? 'ml-auto' : ''}`}>
                     <HeartHandshake size={24} />
                  </div>
                  <h4 className={`text-lg font-serif font-bold text-gray-800 mb-3 ${isArabic ? 'font-arabic' : ''}`}>
                     {t.about.philosophy_title}
                  </h4>
                  <p className={`text-gray-500 text-sm leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
                     {t.about.philosophy}
                  </p>
               </div>

               {/* Tech Card */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center text-gold-600 mb-4 ${isArabic ? 'ml-auto' : ''}`}>
                     <Zap size={24} />
                  </div>
                  <h4 className={`text-lg font-serif font-bold text-gray-800 mb-3 ${isArabic ? 'font-arabic' : ''}`}>
                     {t.about.technology_title}
                  </h4>
                  <p className={`text-gray-500 text-sm leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
                     {t.about.technology}
                  </p>
               </div>
            </div>

            {/* Signature Area */}
            <div className={`mt-10 pt-8 border-t border-gold-100 ${isArabic ? 'text-left' : 'text-right'}`}>
              <div className="font-serif text-3xl text-gold-600 italic opacity-80" style={{ fontFamily: 'Playfair Display, serif' }}>
                 Dr. Abouliatim
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};