import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { SkipLink } from '../SkipLink';
import { ArrowLeft } from 'lucide-react';
import heroImage from '../../assets/agenda-esporte-banner.png';
import processImagePT from '../../assets/agenda-esporte-fluxograma-pt.png';
import processImageEN from '../../assets/agenda-esporte-fluxograma-en.png';
import agendaColorPalette from '../../assets/agenda-esporte-color-palette.png';
import agendaWireframe from '../../assets/agenda-esporte-wireframe.png';
import agendaResultado from '../../assets/agenda-esporte-resultado.png';

export const AgendaEsporteCase: React.FC = () => {
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
              src={heroImage}
              alt="Agenda Esporte"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl text-[#31364A] leading-tight mb-6">
              Agenda Esporte
            </h1>
            <p className="text-[#31364A]/70">
              {language === 'pt'
                ? 'Sistema de gestão e agendamento de reservas de quadras esportivas'
                : 'Sports court management and reservation scheduling system'}
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
                  ? 'O mercado de centros esportivos e aluguel de quadras frequentemente sofre com processos arcaicos e descentralizados, onde muitos proprietários ainda dependem exclusivamente de planilhas manuais, agendas de papel ou conversas intermináveis em aplicações de mensagens para gerir os seus horários. Esta falta de digitalização gera problemas críticos em ambas as pontas do negócio. Do lado do proprietário, observa-se uma perda constante de receita devido a faltas não justificadas (no-shows), dificuldade extrema em gerir pagamentos, conflitos recorrentes de horários na agenda e uma ausência total de dados estratégicos para o crescimento do negócio. Já do lado do atleta, o cenário é de frustração ao tentar encontrar horários disponíveis, demora no atendimento e uma sensação de insegurança em processos de reserva informais. O desafio central foi projetar uma solução que unificasse a presença digital através de uma vitrine pública e a gestão operacional via ERP numa plataforma única e escalável no modelo SaaS. O sistema precisava de ser suficientemente simples para um funcionário utilizar no dia a dia e, simultaneamente, robusto para que um proprietário pudesse gerir múltiplos centros de forma centralizada.'
                  : 'The sports facility and court rental market often relies on outdated and fragmented processes, where many owners still depend on manual spreadsheets, paper schedules, or endless conversations through messaging apps to manage bookings. This lack of digitalization creates critical issues on both sides of the business. From the owner’s perspective, there is a constant loss of revenue due to no-shows, extreme difficulty in managing payments, recurring scheduling conflicts, and a complete lack of strategic data to support business growth. On the athlete’s side, the experience is often frustrating-difficulty finding available time slots, slow response times, and a lack of trust in informal booking processes. The core challenge was to design a solution that could unify digital presence through a public-facing storefront and operational management via an ERP system into a single, scalable SaaS platform. The system needed to be simple enough for daily use by staff, while also robust enough for owners to manage multiple facilities in a centralized way.'}
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
                  ? 'Para desenvolver a solução, o fluxo de trabalho foi estruturado em quatro etapas fundamentais, começando pela imersão e pesquisa. Nesta fase, analisamos detalhadamente as jornadas de donos de quadras e de jogadores, identificando que a agilidade na reserva e a confirmação imediata de pagamento eram os pontos mais críticos para o sucesso da operação. Com estes dados, avançamos para a arquitetura de informação, onde o sistema foi estruturado num modelo Multi-tenant. Isto garantiu que cada centro esportivo tivesse o seu ambiente isolado, com URLs personalizadas e configurações de layout próprias, permitindo uma experiência de marca própria para cada cliente. No design de experiência (UX/UI), priorizámos uma interface Mobile-First para a vitrine pública, reconhecendo que a grande maioria das reservas é efetuada através de smartphones. Para o painel administrativo, o foco recaiu sobre uma interface de alta densidade de informação, destacando-se o Dashboard e a Agenda Inteligente com recursos de drag-and-drop para facilitar o manuseio rápido dos horários. Finalmente, na fase de desenvolvimento e integração, implementámos um fluxo de checkout transparente com APIs de gateways de pagamento, assegurando que a reserva e a conciliação financeira ocorressem de forma automática e sem erros humanos.'
                  : 'To develop the solution, the workflow was structured into four key stages, starting with immersion and research. At this stage, we analyzed in detail the journeys of both facility owners and players, identifying booking speed and instant payment confirmation as the most critical factors for operational success. Based on these insights, we moved into information architecture, structuring the system using a multi-tenant model. This ensured that each sports facility had its own isolated environment, with custom URLs and layout configurations, enabling a white-label experience for each client. In the UX/UI design phase, we prioritized a mobile-first interface for the public storefront, recognizing that the majority of bookings are made via smartphones. For the admin panel, the focus was on a high-density information interface, highlighting the dashboard and a smart scheduling system with drag-and-drop interactions to enable fast time slot management. Finally, during development and integration, we implemented a seamless checkout flow using payment gateway APIs, ensuring that booking and financial reconciliation occurred automatically and without human error.'}
              </p>
            </div>

            {/* Process Flowchart */}
            <div className="rounded-xl overflow-hidden shadow-xl bg-white mt-8">
              <ImageWithFallback
                src={language === 'pt' ? processImagePT : processImageEN}
                alt={language === 'pt' ? 'Fluxograma do Agenda Esporte' : 'Agenda Esporte flowchart'}
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
                  ? 'A solução final apresenta-se como uma plataforma integrada composta por dois pilares principais que automatizam todo o ciclo de negócio, desde a descoberta da quadra no Google até ao depósito do valor na conta do proprietário, reduzindo o trabalho manual em cerca de 80%. O primeiro pilar é a Vitrine Digital e Sistema de Reservas, um site personalizado para cada centro esportivo onde o utilizador pode filtrar quadras por modalidade, visualizar a agenda em tempo real, realizar o pagamento via Pix ou Cartão e receber uma confirmação instantânea. O segundo pilar é o Painel de Gestão, que serve tanto ao proprietário como ao administrador da plataforma. Para o dono da quadra, funciona como uma central de controlo com agenda inteligente, dashboards financeiros e relatórios de ocupação. O sistema disponibiliza um Painel Master para o controlo do faturamento global, gestão de planos de assinatura, monitorização de métricas de crescimento como MRR e Churn, além do provisionamento automático de novos clientes.'
                  : 'The final solution is an integrated platform composed of two main pillars that automate the entire business cycle-from court discovery on Google to payment settlement in the owner’s account-reducing manual work by approximately 80%. The first pillar is the Digital Storefront and Booking System: a customized website for each sports facility where users can filter courts by sport, view real-time availability, complete payments via Pix or credit card, and receive instant confirmation. The second pillar is the Management Panel, serving both facility owners and platform administrators. For court owners, it acts as a control center with a smart scheduling system, financial dashboards, and occupancy reports. The system also provides a Master Panel for global revenue control, subscription plan management, monitoring key growth metrics such as MRR and churn, as well as automated client provisioning.'}
              </p>
            </div>

            {/* Solution Images Showcase */}
            <div className="space-y-8 mt-12">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={agendaColorPalette}
                  alt={language === 'pt' ? 'Paleta de cores do Agenda Esporte' : 'Agenda Esporte color palette'}
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={agendaWireframe}
                  alt={language === 'pt' ? 'Wireframes do Agenda Esporte' : 'Agenda Esporte wireframes'}
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={agendaResultado}
                  alt={language === 'pt' ? 'Resultado final do Agenda Esporte' : 'Agenda Esporte final result'}
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
                  ? 'O projeto validou a premissa de que a conveniência é o maior motor de conversão no mercado esportivo atual. Através da implementação das notificações automáticas, percebi que a automação é sinónimo de retenção, uma vez que o uso de lembretes reduziu drasticamente o índice de esquecimento por parte dos jogadores. Além disso, a capacidade de tomar decisões baseadas em dados transformou o negócio dos clientes; os relatórios de horários ociosos permitiram a criação de promoções dinâmicas que aumentaram o faturamento em períodos de baixa procura. Por fim, o modelo de escalabilidade SaaS provou ser extremamente versátil, permitindo que a plataforma atenda com a mesma eficiência desde um pequeno proprietário de uma quadra de bairro até grandes complexos esportivos com múltiplas unidades. Este projeto reafirma a minha capacidade de entregar produtos digitais complexos e focados em resolver problemas reais de negócio através de um design centrado no utilizador e de uma arquitetura de software sólida.'
                  : 'The project validated the assumption that convenience is the main driver of conversion in today’s sports market. Through the implementation of automated notifications, I observed that automation is directly tied to retention, as reminders significantly reduced no-show rates. Additionally, the ability to make data-driven decisions transformed clients’ businesses. Reports on idle time slots enabled the creation of dynamic promotions, increasing revenue during low-demand periods. Finally, the scalability of the SaaS model proved highly versatile, allowing the platform to efficiently serve both small, single-court owners and large multi-location sports complexes. This project reinforces my ability to deliver complex digital products focused on solving real business problems through user-centered design and a solid software architecture.'}
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
