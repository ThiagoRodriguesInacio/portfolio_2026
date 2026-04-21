import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { SkipLink } from '../SkipLink';
import { ArrowLeft } from 'lucide-react';
import kairosHeroImage from 'figma:asset/6a82f6c836dcd235e8e25be9a794a9fab4261125.png';
import processImagePT from 'figma:asset/0d763e95abe0f7f5833cdf7039568d44775e8610.png';
import processImageEN from 'figma:asset/780def2b82bcc56e16a90c42525482e89af77d56.png';
import kairosWireframe from 'figma:asset/b17474e09c3ca19bfa228d0f8d57ec8bb95b8aec.png';
import kairosContainer from 'figma:asset/6e3d19a41d2bb9f88ce8477adcf4b54d02b0ff86.png';
import kairosResultado from 'figma:asset/06086c6fc3a76b6776e34ff4b531207c07ed3d4e.png';

const designSystemImage = 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHN5c3RlbXxlbnwxfHx8fDE3NjQ2Mjc4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080';

export const KairosCase: React.FC = () => {
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
            <ArrowLeft className="size-4" />
            {language === 'pt' ? 'Voltar aos projetos' : 'Back to projects'}
          </a>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <ImageWithFallback
              src={kairosHeroImage}
              alt={language === 'pt' ? 'Kairos - Gestão de Tempo e Projetos' : 'Kairos - Time and Project Management'}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl text-[#31364A] leading-tight mb-6">
              Kairos
            </h1>
            <p className="text-[#31364A]/70">
              {language === 'pt' 
                ? 'Conectando controle de tempo à rentabilidade de projetos em um SaaS B2B'
                : 'Connecting time tracking to project profitability in a B2B SaaS'}
            </p>
          </div>

          {/* Role & Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div>
              <h3 className="text-[#31364A] mb-3">{t.caseStudy.role}</h3>
              <p className="text-[#31364A]/70">
                Product Designer
              </p>
            </div>
            <div>
              <h3 className="text-[#31364A] mb-3">{t.caseStudy.tools}</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'FigJam', 'Notion'].map((tool, index) => (
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
            <h2 className="text-3xl font-bold text-[#31364A]">{t.caseStudy.challenge}</h2>
            
            <div className="space-y-4 text-[#31364A]/80 leading-relaxed">
              <p>
                {language === 'pt'
                  ? 'A gestão de projetos frequentemente prioriza o acompanhamento de tarefas e prazos, mas oferece pouca visibilidade sobre o impacto financeiro do tempo investido. Em muitos cenários, equipes conseguem acompanhar a execução do trabalho, mas não possuem clareza sobre quanto cada projeto está custando ou sobre sua rentabilidade ao longo do tempo. No contexto do Kairos, o desafio foi endereçar a falta de conexão entre produtividade e custo, especialmente em projetos que combinam contratos de valor fixo com cobrança por horas excedentes. Além disso, a dispersão de informações entre múltiplas ferramentas dificultava análises consolidadas e comprometia decisões estratégicas. O objetivo foi estruturar uma solução capaz de integrar tempo, tarefas, documentação e dados financeiros em um único sistema.'
                  : 'Project management often prioritizes tracking tasks and deadlines while offering little visibility into the financial impact of the time invested. In many scenarios, teams can monitor work execution but lack clarity on how much each project costs or its profitability over time. In the context of Kairos, the challenge was to address the disconnect between productivity and cost, especially in projects involving fixed-fee contracts combined with hourly overages. Furthermore, the dispersion of information across multiple tools hindered consolidated analysis and undermined strategic decision-making. The goal was to build a solution capable of integrating time, tasks, documentation, and financial data into a single system.'}
              </p>
            </div>
          </div>
        </div>

        {/* The Process */}
        <div className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#31364A]">{t.caseStudy.process}</h2>
              <p className="text-[#31364A]/60 mt-2">{t.caseStudy.processSubtitle}</p>
            </div>

            <div className="space-y-4 text-[#31364A]/80 leading-relaxed">
              <p>
                {language === 'pt'
                  ? 'O processo de design do Kairos foi orientado pela necessidade de estruturar um produto SaaS B2B focado em controle financeiro baseado em horas trabalhadas e organização do fluxo operacional das equipes. O projeto partiu da definição clara dos perfis de Administrador e Colaborador, estabelecendo responsabilidades e níveis de acesso distintos. Foram mapeadas as principais jornadas do sistema, desde o cadastro de clientes e projetos com regras financeiras até o registro de tempo, organização de tarefas e visualização de dados analíticos. A arquitetura da informação foi desenhada para integrar módulos operacionais, como tarefas e documentação, com módulos gerenciais voltados à análise financeira e desempenho. Interfaces e fluxos mais complexos, como a criação de projetos com lógica híbrida de cobrança e o cálculo automático de custos com base nas horas registradas, foram cuidadosamente estruturados para garantir clareza e consistência. As diretrizes visuais e padrões de componentização foram definidos utilizando React e Shadcn UI, priorizando legibilidade, feedback de sistema e organização da informação.'
                  : 'The design process for Kairos was guided by the need to structure a B2B SaaS product focused on financial control based on worked hours and the organization of team workflows. The project began with a clear definition of the Administrator and Collaborator roles, establishing distinct responsibilities and access levels. Key user journeys were mapped, covering everything from client and project creation with financial rules to time tracking, task organization, and analytical data visualization. The information architecture was designed to integrate operational modules, such as tasks and documentation, with managerial modules focused on financial analysis and performance. More complex interfaces and flows, including project creation with hybrid pricing logic and automatic cost calculation based on logged hours, were carefully structured to ensure clarity and consistency. Visual guidelines and component standards were defined using React and Shadcn UI, prioritizing readability, system feedback, and information organization.'}
              </p>
            </div>

            {/* Process Information Architecture Diagram */}
            <div className="rounded-xl overflow-hidden shadow-xl bg-white mt-8">
              <ImageWithFallback
                src={language === 'pt' ? processImagePT : processImageEN}
                alt={language === 'pt' ? 'Arquitetura de Informação do Kairos' : 'Kairos Information Architecture'}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#31364A]">{t.caseStudy.solution}</h2>
              <p className="text-[#31364A]/60 mt-2">{t.caseStudy.solutionSubtitle}</p>
            </div>

            <div className="space-y-4 text-[#31364A]/80 leading-relaxed">
              <p>
                {language === 'pt'
                  ? 'O Kairos é uma plataforma web de Gestão de Tempo e Projetos projetada para centralizar a operação das equipes e oferecer suporte à análise financeira dos projetos. A solução permite o gerenciamento de usuários, clientes e projetos, com definição de regras financeiras que conectam valor fixo, limite de horas e cálculo de horas excedentes. No nível operacional, o sistema possibilita a organização de tarefas e o registro de tempo por meio de um cronômetro vinculado às atividades, incluindo a descrição do trabalho realizado em cada sessão. Esses registros alimentam automaticamente os cálculos financeiros do projeto, garantindo consistência entre esforço e custo. No nível gerencial, o Kairos oferece dashboards analíticos projetados para consolidar dados de horas, custos, prazos e desempenho da equipe. A solução também centraliza a documentação dos projetos em uma estrutura hierárquica, apoiando a organização e o acesso à informação em um único ambiente.'
                  : 'Kairos is a web-based Time and Project Management platform designed to centralize team operations and support financial analysis at the project level. The solution enables the management of users, clients, and projects, with configurable financial rules that connect fixed pricing, hour limits, and overtime cost calculation. At the operational level, the system allows users to organize tasks and track time through a task-linked timer, including a description of the work performed in each session. These records automatically feed into the project\'s financial calculations, ensuring consistency between effort and cost. At the managerial level, Kairos provides analytical dashboards designed to consolidate data on hours, costs, deadlines, and team performance. The platform also centralizes project documentation in a hierarchical structure, supporting organized access to information within a single work environment.'}
              </p>
            </div>

            {/* Solution Images Showcase */}
            <div className="space-y-8 mt-12">
              {/* 1. Wireframe */}
              <div className="rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={kairosWireframe}
                  alt={language === 'pt' ? 'Paleta de cores e wireframes do Kairos' : 'Kairos color palette and wireframes'}
                  className="w-full h-auto block"
                />
              </div>

              {/* 2. Container/Screens */}
              <div className="rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={kairosContainer}
                  alt={language === 'pt' ? 'Telas principais do Kairos' : 'Kairos main screens'}
                  className="w-full h-auto"
                />
              </div>

              {/* 3. Final Result */}
              <div className="rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={kairosResultado}
                  alt={language === 'pt' ? 'Resultado final do Kairos' : 'Kairos final result'}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Validation & Learnings */}
        <div className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-[#31364A]">{t.caseStudy.learnings}</h2>

            <div className="space-y-4 text-[#31364A]/80 leading-relaxed">
              <p>
                {language === 'pt'
                  ? 'O desenvolvimento do Kairos reforçou a importância de integrar dados operacionais e financeiros desde a concepção do produto. O projeto evidenciou que o controle de tempo só gera valor estratégico quando está diretamente conectado a regras claras de custo e rentabilidade. Um dos principais aprendizados foi a necessidade de tornar regras financeiras complexas compreensíveis por meio da interface, evitando ambiguidades na configuração e na análise dos projetos. Também ficou claro que a simplicidade no registro de tempo é essencial para garantir a qualidade dos dados utilizados nas análises gerenciais. O projeto consolidou aprendizados importantes sobre o desenho de produtos SaaS B2B complexos, especialmente na interseção entre experiência do usuário, regras de negócio e análise financeira orientada a dados.'
                  : 'The development of Kairos reinforced the importance of integrating operational and financial data from the earliest stages of product design. The project demonstrated that time tracking only delivers strategic value when it is directly connected to clear cost and profitability rules. One of the main learnings was the need to make complex financial rules understandable through the interface, avoiding ambiguity in both configuration and project analysis. It also became clear that simplicity in time tracking is essential to ensure data quality for managerial insights. Overall, the project consolidated valuable learnings about designing complex B2B SaaS products, particularly at the intersection of user experience, business rules, and data-driven financial analysis.'}
              </p>
            </div>

            {/* CTA to other projects */}
            <div className="pt-8 text-center">
              <a
                href="/"
                className="relative group inline-flex items-center gap-2 bg-gradient-to-r from-[#488194] to-[#55BB96] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#488194] focus:ring-offset-2 overflow-hidden"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <ArrowLeft className="size-5" />
                  {language === 'pt' ? 'Voltar aos projetos' : 'Back to projects'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#31364A] to-[#488194] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
