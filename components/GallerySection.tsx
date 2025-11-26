import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight, GripVertical } from 'lucide-react';
import { TranslationData, Language, GalleryCategory, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../constants';

interface GallerySectionProps {
  t: TranslationData;
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ t, lang }) => {
  const [filter, setFilter] = useState<GalleryCategory>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isArabic = lang === 'ar';

  // Filter Logic
  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: t.gallery.filters.all },
    { key: 'anti_age', label: t.gallery.filters.anti_age },
    { key: 'acne', label: t.gallery.filters.acne },
    { key: 'hair', label: t.gallery.filters.hair },
    { key: 'laser', label: t.gallery.filters.laser },
  ];

  // Reset slider when opening new item
  useEffect(() => {
    if (selectedItem) setSliderPosition(50);
  }, [selectedItem]);

  // Slider Logic
  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-40 -left-20 w-[600px] h-[600px] bg-cream-100 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`block text-gold-600 font-bold tracking-[0.2em] text-sm mb-3 uppercase ${isArabic ? 'font-arabic tracking-normal' : ''}`}>
             {t.gallery.subtitle}
          </span>
          <h2 className={`text-4xl md:text-5xl font-serif text-gray-800 mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            {t.gallery.title}
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-transparent ${
                filter === cat.key
                  ? 'bg-gold-500 text-white shadow-lg'
                  : 'bg-cream-50 text-gray-600 hover:border-gold-200 hover:text-gold-600'
              } ${isArabic ? 'font-arabic' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl">
                  <img 
                    src={item.afterUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gold-900/0 group-hover:bg-gold-900/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/30 backdrop-blur-md border border-white/40 p-4 rounded-full text-white">
                      <ZoomIn size={28} />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 ${isArabic ? 'right-4' : 'left-4'} bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gold-900 tracking-wide uppercase`}>
                     {categories.find(c => c.key === item.category)?.label}
                  </div>
                </div>
                
                <h3 className={`mt-4 text-center font-serif text-xl text-gray-800 group-hover:text-gold-600 transition-colors ${isArabic ? 'font-arabic' : ''}`}>
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Comparison Slider Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-transparent outline-none flex flex-col items-center" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <h3 className={`text-2xl md:text-3xl text-white font-serif mb-6 text-center ${isArabic ? 'font-arabic' : ''}`}>
                {selectedItem.title}
              </h3>

              {/* Comparison Slider Container */}
              <div 
                ref={containerRef}
                className="relative w-full aspect-[3/4] md:aspect-[16/9] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 cursor-col-resize select-none touch-none bg-black"
                onMouseMove={onMouseMove}
                onTouchMove={onTouchMove}
              >
                {/* AFTER Image (Background) */}
                <img 
                  src={selectedItem.afterUrl} 
                  alt="After" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                  draggable={false}
                />
                <div className={`absolute top-6 right-6 bg-black/60 backdrop-blur px-4 py-1.5 rounded-full text-white font-medium text-sm border border-white/20 pointer-events-none ${isArabic ? 'font-arabic' : ''}`}>
                   {t.gallery.labels.after}
                </div>

                {/* BEFORE Image (Foreground - Clipped) */}
                <div 
                  className="absolute inset-0 overflow-hidden pointer-events-none select-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img 
                    src={selectedItem.beforeUrl} 
                    alt="Before" 
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    draggable={false}
                  />
                  <div className={`absolute top-6 left-6 bg-gold-600/90 backdrop-blur px-4 py-1.5 rounded-full text-white font-medium text-sm shadow-lg pointer-events-none ${isArabic ? 'font-arabic' : ''}`}>
                     {t.gallery.labels.before}
                  </div>
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute inset-y-0 w-1 bg-white cursor-col-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gold-600">
                    <GripVertical size={20} />
                  </div>
                </div>
              </div>

              <p className={`mt-6 text-white/60 text-sm flex items-center gap-2 ${isArabic ? 'font-arabic' : ''}`}>
                 <ChevronLeft size={14} />
                 {isArabic ? 'اسحب للمقارنة' : 'Glissez pour comparer'}
                 <ChevronRight size={14} />
              </p>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};