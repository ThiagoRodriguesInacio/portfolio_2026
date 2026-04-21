import image_6a495d885bdbca497c81ffb2aff4d7cfae45da41 from 'figma:asset/6a495d885bdbca497c81ffb2aff4d7cfae45da41.png';
import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import aboutData from '../data/about';
import { CheckCircle2, GraduationCap, Sparkles, User } from 'lucide-react';

const professionalPhoto = image_6a495d885bdbca497c81ffb2aff4d7cfae45da41;

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-[#488194]/5 to-[#55BB96]/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#488194]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#55BB96]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl text-[#31364A]">
            {t.about.title}
          </h2>
        </div>

        <div className="space-y-12">
          {/* Photo & Intro - Horizontal Layout */}
          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={professionalPhoto}
                  alt="Thiago Rodrigues"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <p className="text-[#31364A]/70 leading-relaxed">
                {t.about.intro}
              </p>
              
              {/* Skills */}
              <div className="space-y-2">
                <h4 className="text-[#31364A]">
                  {t.about.skills}
                </h4>
                <p className="text-[#31364A]/70 leading-relaxed">
                  {t.about.skillsList}
                </p>
              </div>
              
              <a
                href={aboutData.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group bg-gradient-to-r from-[#488194] to-[#55BB96] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#488194] focus:ring-offset-2 overflow-hidden inline-block"
              >
                <span className="relative z-10">{t.about.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#31364A] to-[#488194] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};