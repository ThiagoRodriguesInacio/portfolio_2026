import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SkipLink } from './SkipLink';
import { ArrowLeft, Lightbulb } from 'lucide-react';

interface CaseStudyData {
  slug: string;
  title: { pt: string; en: string };
  tagline: { pt: string; en: string };
  tags: string[];
  image_url: string;
  impact_summary: { pt: string; en: string };
  role: { pt: string; en: string };
  tools: string[];
  challenge: { pt: string; en: string };
  challenge_highlight: { pt: string; en: string };
  process: { pt: string; en: string };
  solution: { pt: string; en: string };
  learnings: { pt: string; en: string };
}

interface CaseStudyPageProps {
  caseData: CaseStudyData;
}

const imageMap: Record<string, string> = {
  'finance-app': 'https://images.unsplash.com/photo-1645226880663-81561dcab0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaW5hbmNlJTIwYXBwfGVufDF8fHx8MTc2NDcxMzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'edu-platform': 'https://images.unsplash.com/photo-1762329367301-9009fd143ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ3MTMwODh8MA&ixlib=rb-4.1.0&q=80&w=1080'
};

const processImage = 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd2hpdGVib2FyZHxlbnwxfHx8fDE3NjQ3MTMxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const designSystemImage = 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHN5c3RlbXxlbnwxfHx8fDE3NjQ2Mjc4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080';
const researchImage = 'https://images.unsplash.com/photo-1735639013995-086e648eaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBub3Rlc3xlbnwxfHx8fDE3NjQ2OTY1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080';

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ caseData }) => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <SkipLink />
      <Navbar currentPage="case-study" />
      
      <main id="main-content" className="pt-16">
        {/* Back Button */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#31364A]/70 hover:text-[#488194] transition-colors focus:outline-none focus:ring-2 focus:ring-[#488194] focus:ring-offset-2 rounded-md px-2 py-1"
          >
            {t.caseStudy.backToProjects}
          </a>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <ImageWithFallback
              src={imageMap[caseData.image_url] || imageMap['finance-app']}
              alt={caseData.title[language]}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl text-[#31364A] leading-tight mb-6">
              {caseData.title[language]}
            </h1>
            <p className="text-[#31364A]/70">
              {caseData.tagline[language]}
            </p>
          </div>

          {/* Role & Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div>
              <h3 className="text-[#31364A] mb-3">{t.caseStudy.role}</h3>
              <p className="text-[#31364A]/70">{caseData.role[language]}</p>
            </div>
            <div>
              <h3 className="text-[#31364A] mb-3">{t.caseStudy.tools}</h3>
              <div className="flex flex-wrap gap-2">
                {caseData.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-[#488194]/10 to-[#55BB96]/10 text-[#31364A] rounded-full text-sm border border-[#488194]/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The Challenge */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-[#31364A]">{t.caseStudy.challenge}</h2>
            
            <div className="space-y-4 text-[#31364A]/80 leading-relaxed">
              {caseData.challenge[language].split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* The Process */}
        <div className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-[#31364A]">{t.caseStudy.process}</h2>
              <p className="text-[#31364A]/60 mt-2">{t.caseStudy.processSubtitle}</p>
            </div>

            <div className="space-y-4 text-[#31364A]/80 leading-relaxed">
              {caseData.process[language].split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Process Images Grid */}
            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={processImage}
                  alt="Design process whiteboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={researchImage}
                  alt="User research notes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-[#31364A]">{t.caseStudy.solution}</h2>
              <p className="text-[#31364A]/60 mt-2">{t.caseStudy.solutionSubtitle}</p>
            </div>

            <div className="space-y-4 text-[#31364A]/80 leading-relaxed">
              {caseData.solution[language].split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Design System Showcase */}
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-xl bg-gray-100 mt-8">
              <ImageWithFallback
                src={designSystemImage}
                alt="Design system"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Validation & Learnings */}
        <div className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-[#31364A]">{t.caseStudy.learnings}</h2>

            <div className="space-y-4 text-[#31364A]/80 leading-relaxed">
              {caseData.learnings[language].split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* CTA to other projects */}
            <div className="pt-8 text-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#488194] to-[#55BB96] text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#488194] focus:ring-offset-2"
              >
                <ArrowLeft className="size-5" />
                {t.caseStudy.backToProjects}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};