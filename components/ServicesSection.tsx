import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TranslationData, Language } from '../types';

interface ServicesSectionProps {
  t: TranslationData;
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ t, lang }) => {
  const isArabic = lang === 'ar';
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for background blobs
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Animated Parallax Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-gold-100/80 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: y2, opacity }}
          className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] bg-cream-100/80 rounded-full blur-[80px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-serif text-gray-800 mb-6 ${isArabic ? 'font-arabic' : ''}`}
          >
            {t.services.title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 bg-gold-500 mx-auto" 
          />
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.services.items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemAnim}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-8 relative bg-white/95 backdrop-blur-sm -mt-4 mx-4 mb-4 rounded-xl shadow-sm border border-gold-100/30 group-hover:translate-y-[-0.5rem] transition-transform duration-300">
                <h3 className={`text-xl font-serif font-bold text-gray-800 mb-3 group-hover:text-gold-600 transition-colors ${isArabic ? 'font-arabic' : ''}`}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className={`text-gray-500 leading-relaxed text-sm ${isArabic ? 'font-arabic' : ''}`}>
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};