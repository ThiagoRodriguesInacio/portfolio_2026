import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import aboutData from '../data/about';
import { MessageCircle, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#31364A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 mb-8">
          {/* Left: Branding */}
          <div className="space-y-3">
            <h3 className="text-xl bg-gradient-to-r from-[#488194] to-[#55BB96] bg-clip-text text-transparent">
              Thiago Rodrigues
            </h3>
            <p className="text-gray-400">
              Product Designer | UX/UI Designer
            </p>
          </div>

          {/* Right: Contact Links */}
          <div className="space-y-4">
            <h4 className="text-gray-400 uppercase tracking-wider text-xs">
              {t.footer.contact}
            </h4>
            <div className="flex flex-wrap gap-4">
              <a
                href={aboutData.whatsapp_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#55BB96] transition-colors focus:outline-none focus:ring-2 focus:ring-[#55BB96] rounded-md p-2 -m-2"
                aria-label={t.footer.whatsapp}
              >
                <MessageCircle className="size-5" />
                <span className="text-sm">{t.footer.whatsapp}</span>
              </a>
              <a
                href={aboutData.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#55BB96] transition-colors focus:outline-none focus:ring-2 focus:ring-[#55BB96] rounded-md p-2 -m-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-500 text-sm text-center">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};