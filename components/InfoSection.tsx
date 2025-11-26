import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { TranslationData, Language } from '../types';
import { CONTACT_INFO } from '../constants';

interface InfoSectionProps {
  t: TranslationData;
  lang: Language;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ t, lang }) => {
  const isArabic = lang === 'ar';

  return (
    <section id="contact" className="py-20 bg-cream-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Info Side */}
          <div className={`${isArabic ? 'order-2 lg:order-1' : ''}`}>
             <h2 className={`text-4xl font-serif text-gray-800 mb-10 ${isArabic ? 'font-arabic' : ''}`}>
                {t.info.title}
             </h2>

             <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                   <div className="bg-white p-3 rounded-full shadow-sm text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                     <MapPin size={24} />
                   </div>
                   <div>
                      <h4 className={`font-bold text-gray-900 mb-1 ${isArabic ? 'font-arabic' : ''}`}>{t.info.address_label}</h4>
                      <p className={`text-gray-600 ${isArabic ? 'font-arabic' : ''}`}>{CONTACT_INFO.address}</p>
                      <a 
                        href={CONTACT_INFO.mapUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 mt-2 text-gold-600 hover:text-gold-800 font-medium text-sm ${isArabic ? 'font-arabic' : ''}`}
                      >
                        <Navigation size={14} />
                        {t.info.get_directions}
                      </a>
                   </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                   <div className="bg-white p-3 rounded-full shadow-sm text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                     <Phone size={24} />
                   </div>
                   <div>
                      <h4 className={`font-bold text-gray-900 mb-1 ${isArabic ? 'font-arabic' : ''}`}>{t.info.phone_label}</h4>
                      <div className="flex flex-col gap-1">
                        <a href={`tel:${CONTACT_INFO.phone1}`} className="text-gray-600 hover:text-gold-600 transition-colors font-mono">{CONTACT_INFO.phone1}</a>
                        <a href={`tel:${CONTACT_INFO.phone2}`} className="text-gray-600 hover:text-gold-600 transition-colors font-mono">{CONTACT_INFO.phone2}</a>
                      </div>
                   </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 group">
                   <div className="bg-white p-3 rounded-full shadow-sm text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                     <Clock size={24} />
                   </div>
                   <div>
                      <h4 className={`font-bold text-gray-900 mb-1 ${isArabic ? 'font-arabic' : ''}`}>{t.info.hours_label}</h4>
                      <div className={`space-y-1 text-gray-600 ${isArabic ? 'font-arabic' : ''}`}>
                         <div className="flex justify-between min-w-[200px] border-b border-gray-200 pb-1">
                            <span>{t.info.mon_fri}</span>
                            <span>09:00 - 16:00</span>
                         </div>
                         <div className="flex justify-between min-w-[200px] border-b border-gray-200 pb-1">
                            <span>{t.info.sat}</span>
                            <span>09:00 - 13:00</span>
                         </div>
                         <div className="flex justify-between min-w-[200px]">
                            <span>{t.info.sun}</span>
                            <span className="text-gold-600 font-medium">{t.info.closed}</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Map/Visual Side */}
          <div className={`relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl ${isArabic ? 'order-1 lg:order-2' : ''}`}>
             {/* We use a static placeholder for the map visual to keep it clean, but wrap it in a link to the real map */}
             <a href={CONTACT_INFO.mapUrl} target="_blank" rel="noreferrer" className="block w-full h-full group relative">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    {/* Placeholder image simulating a map view */}
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                         style={{ backgroundImage: 'url(https://picsum.photos/800/600?grayscale)' }}></div>
                    <div className="absolute inset-0 bg-gold-900/10 group-hover:bg-gold-900/0 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl text-gold-700 font-bold flex items-center gap-2 group-hover:bg-gold-500 group-hover:text-white transition-all">
                            <MapPin size={20} />
                            <span>Google Maps</span>
                        </div>
                    </div>
                </div>
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};