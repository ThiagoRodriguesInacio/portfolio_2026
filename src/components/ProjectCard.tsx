import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import kairosImage from '../assets/c9491aee23d26a6e5d283ac1db542421ba53f9d5.png';
import agendaEsporteBannerCard from '../assets/agenda-esporte-banner-card.png';

interface ProjectCardProps {
  slug: string;
  title: { pt: string; en: string };
  tagline: { pt: string; en: string };
  tags: string[];
  imageUrl: string;
}

const imageMap: Record<string, string> = {
  'finance-app': 'https://images.unsplash.com/photo-1645226880663-81561dcab0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaW5hbmNlJTIwYXBwfGVufDF8fHx8MTc2NDcxMzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'edu-platform': 'https://images.unsplash.com/photo-1762329367301-9009fd143ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ3MTMwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'kairos-dashboard': kairosImage,
  'agenda-esporte-banner-card': agendaEsporteBannerCard
};

const gradients = [
  'from-[#31364A] to-[#488194]',
  'from-[#488194] to-[#55BB96]',
  'from-[#31364A] to-[#55BB96]'
];

export const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  tagline,
  tags,
  imageUrl,
}) => {
  const { language, t } = useLanguage();
  const gradientIndex = slug === 'kairos-time-project-cost-management' ? 0 : slug === 'agenda-esporte' ? 1 : 2;

  return (
    <a
      href={`/case-study/${slug}`}
      className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 focus:outline-none focus:ring-4 focus:ring-[#488194]/50 focus:ring-offset-2"
    >
      {/* Image Container with Gradient Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <ImageWithFallback
          src={imageMap[imageUrl] || imageMap['finance-app']}
          alt={title[language]}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[gradientIndex]} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="space-y-3 flex-1">
          <h3 className="text-2xl text-[#31364A] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#31364A] group-hover:to-[#55BB96] group-hover:bg-clip-text transition-all duration-300">
            {title[language]}
          </h3>
          <p className="text-[#31364A]/70 leading-relaxed">
            {tagline[language]}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gradient-to-r from-[#488194]/10 to-[#55BB96]/10 text-[#31364A] text-sm rounded-full border border-[#488194]/30 hover:border-[#55BB96] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Case Link */}
        <div className="flex items-center gap-2 text-[#488194] pt-2 group-hover:gap-4 transition-all duration-300">
          <span className="font-medium">{t.projects.viewCase}</span>
          <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Bottom Border Gradient */}
      <div className={`h-1 bg-gradient-to-r ${gradients[gradientIndex]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
    </a>
  );
};