import React from 'react';
import { TranslationData, Language } from '../types';

interface FooterProps {
  t: TranslationData;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className={`text-lg font-serif font-bold text-gray-800 ${lang === 'ar' ? 'font-arabic' : ''}`}>
           Dr. Abouliatim.
        </div>
        <p className={`text-gray-500 text-sm ${lang === 'ar' ? 'font-arabic' : ''}`}>
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};