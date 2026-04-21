import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="size-4 text-[#31364A]/70" />
      <div className="flex gap-1 bg-[#488194]/10 rounded-lg p-1">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 rounded-md text-sm transition-all ${
            language === 'pt'
              ? 'bg-gradient-to-r from-[#488194] to-[#55BB96] text-white shadow-sm'
              : 'text-[#31364A]/70 hover:text-[#488194]'
          }`}
          aria-label="Português"
        >
          PT
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-md text-sm transition-all ${
            language === 'en'
              ? 'bg-gradient-to-r from-[#488194] to-[#55BB96] text-white shadow-sm'
              : 'text-[#31364A]/70 hover:text-[#488194]'
          }`}
          aria-label="English"
        >
          EN
        </button>
      </div>
    </div>
  );
};