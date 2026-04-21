import React from 'react';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import projectsData from '../data/projects';
import { Briefcase } from 'lucide-react';

export const ProjectsGrid: React.FC = () => {
  const { t } = useLanguage();
  const hasTwoProjects = projectsData.length === 2;
  const gridClasses = hasTwoProjects
    ? 'grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr';

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#488194]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#55BB96]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl text-[#31364A]">
            {t.projects.title}
          </h2>
          
          <p className="text-[#31364A]/70 max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className={gridClasses}>
          {projectsData.map((project, index) => (
            <div
              key={project.slug}
              className="animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                slug={project.slug}
                title={project.title}
                tagline={project.tagline}
                tags={project.tags}
                imageUrl={project.image_url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};