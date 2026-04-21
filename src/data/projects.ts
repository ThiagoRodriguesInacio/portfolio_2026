export const projectsData = [
  {
    slug: "kairos-time-project-cost-management",
    title: {
      pt: "Kairos",
      en: "Kairos"
    },
    tagline: {
      pt: "Conectando controle de tempo à rentabilidade de projetos em um SaaS B2B",
      en: "Connecting time tracking to project profitability in a B2B SaaS"
    },
    tags: ["SaaS", "B2B", "Time Tracking", "Product Design", "Dashboards", "Financial Control"],
    image_url: "kairos-dashboard",
    impact_summary: {
      pt: "Estruturação de uma plataforma B2B para gestão de tempo e custos de projetos com foco em visibilidade financeira",
      en: "Designed a B2B platform for time and project cost management focused on financial visibility"
    },
    role: {
      pt: "Product Designer",
      en: "Product Designer"
    },
    tools: ["Figma", "FigJam", "Notion"],
    challenge: {
      pt: "A gestão de projetos frequentemente prioriza o acompanhamento de tarefas e prazos, mas oferece pouca visibilidade sobre o impacto financeiro do tempo investido. Em muitos cenários, equipes conseguem acompanhar a execução do trabalho, mas não possuem clareza sobre quanto cada projeto está custando ou sobre sua rentabilidade ao longo do tempo. No contexto do Kairos, o desafio foi endereçar a falta de conexão entre produtividade e custo, especialmente em projetos que combinam contratos de valor fixo com cobrança por horas excedentes. Além disso, a dispersão de informações entre múltiplas ferramentas dificultava análises consolidadas e comprometia decisões estratégicas. O objetivo foi estruturar uma solução capaz de integrar tempo, tarefas, documentação e dados financeiros em um único sistema.",
      en: "Project management often prioritizes tracking tasks and deadlines while offering little visibility into the financial impact of the time invested. In many scenarios, teams can monitor work execution but lack clarity on how much each project costs or its profitability over time. In the context of Kairos, the challenge was to address the disconnect between productivity and cost, especially in projects involving fixed-fee contracts combined with hourly overages. Furthermore, the dispersion of information across multiple tools hindered consolidated analysis and undermined strategic decision-making. The goal was to build a solution capable of integrating time, tasks, documentation, and financial data into a single system."
    },
    process: {
      pt: "O processo de design do Kairos foi orientado pela necessidade de estruturar um produto SaaS B2B focado em controle financeiro baseado em horas trabalhadas e organização do fluxo operacional das equipes. O projeto partiu da definição clara dos perfis de Administrador e Colaborador, estabelecendo responsabilidades e níveis de acesso distintos. Foram mapeadas as principais jornadas do sistema, desde o cadastro de clientes e projetos com regras financeiras até o registro de tempo, organização de tarefas e visualização de dados analíticos. A arquitetura da informação foi desenhada para integrar módulos operacionais, como tarefas e documentação, com módulos gerenciais voltados à análise financeira e desempenho. Interfaces e fluxos mais complexos, como a criação de projetos com lógica híbrida de cobrança e o cálculo automático de custos com base nas horas registradas, foram cuidadosamente estruturados para garantir clareza e consistência. As diretrizes visuais e padrões de componentização foram definidos utilizando React e Shadcn UI, priorizando legibilidade, feedback de sistema e organização da informação.",
      en: "The design process for Kairos was guided by the need to structure a B2B SaaS product focused on financial control based on worked hours and the organization of team workflows. The project began with a clear definition of the Administrator and Collaborator roles, establishing distinct responsibilities and access levels. Key user journeys were mapped, covering everything from client and project creation with financial rules to time tracking, task organization, and analytical data visualization. The information architecture was designed to integrate operational modules, such as tasks and documentation, with managerial modules focused on financial analysis and performance. More complex interfaces and flows, including project creation with hybrid pricing logic and automatic cost calculation based on logged hours, were carefully structured to ensure clarity and consistency. Visual guidelines and component standards were defined using React and Shadcn UI, prioritizing readability, system feedback, and information organization."
    },
    solution: {
      pt: "O Kairos é uma plataforma web de Gestão de Tempo e Projetos projetada para centralizar a operação das equipes e oferecer suporte à análise financeira dos projetos. A solução permite o gerenciamento de usuários, clientes e projetos, com definição de regras financeiras que conectam valor fixo, limite de horas e cálculo de horas excedentes. No nível operacional, o sistema possibilita a organização de tarefas e o registro de tempo por meio de um cronômetro vinculado às atividades, incluindo a descrição do trabalho realizado em cada sessão. Esses registros alimentam automaticamente os cálculos financeiros do projeto, garantindo consistência entre esforço e custo. No nível gerencial, o Kairos oferece dashboards analíticos projetados para consolidar dados de horas, custos, prazos e desempenho da equipe. A solução também centraliza a documentação dos projetos em uma estrutura hierárquica, apoiando a organização e o acesso à informação em um único ambiente.",
      en: "Kairos is a web-based Time and Project Management platform designed to centralize team operations and support financial analysis at the project level. The solution enables the management of users, clients, and projects, with configurable financial rules that connect fixed pricing, hour limits, and overtime cost calculation. At the operational level, the system allows users to organize tasks and track time through a task-linked timer, including a description of the work performed in each session. These records automatically feed into the project’s financial calculations, ensuring consistency between effort and cost. At the managerial level, Kairos provides analytical dashboards designed to consolidate data on hours, costs, deadlines, and team performance. The platform also centralizes project documentation in a hierarchical structure, supporting organized access to information within a single work environment."
    },
    learnings: {
      pt: "O desenvolvimento do Kairos reforçou a importância de integrar dados operacionais e financeiros desde a concepção do produto. O projeto evidenciou que o controle de tempo só gera valor estratégico quando está diretamente conectado a regras claras de custo e rentabilidade. Um dos principais aprendizados foi a necessidade de tornar regras financeiras complexas compreensíveis por meio da interface, evitando ambiguidades na configuração e na análise dos projetos. Também ficou claro que a simplicidade no registro de tempo é essencial para garantir a qualidade dos dados utilizados nas análises gerenciais. O projeto consolidou aprendizados importantes sobre o desenho de produtos SaaS B2B complexos, especialmente na interseção entre experiência do usuário, regras de negócio e análise financeira orientada a dados.",
      en: "The development of Kairos reinforced the importance of integrating operational and financial data from the earliest stages of product design. The project demonstrated that time tracking only delivers strategic value when it is directly connected to clear cost and profitability rules. One of the main learnings was the need to make complex financial rules understandable through the interface, avoiding ambiguity in both configuration and project analysis. It also became clear that simplicity in time tracking is essential to ensure data quality for managerial insights. Overall, the project consolidated valuable learnings about designing complex B2B SaaS products, particularly at the intersection of user experience, business rules, and data-driven financial analysis."
    }
  },
  {
    slug: "agenda-esporte",
    title: {
      pt: "Agenda Esporte",
      en: "Agenda Esporte"
    },
    tagline: {
      pt: "Gestão Sistema de gestão e agendamento de reservas de quadras esportivas",
      en: "Sports court management and reservation scheduling system"
    },
    tags: ["Web App", "B2B2C", "Dashboards", "Product Design", "Design System"],
    image_url: "agenda-esporte-banner-card",
    impact_summary: {
      pt: "Redução de 40% nas solicitações de suporte dos professores",
      en: "40% reduction in teacher support requests"
    },
    role: {
      pt: "Product Designer",
      en: "Product Designer"
    },
    tools: ["Figma", "FigJam", "Notion"],
    challenge: {
      pt: "A plataforma educacional existente tinha interfaces fragmentadas entre aulas ao vivo, materiais assíncronos e sistema de avaliações. Professores relatavam frustração ao alternar entre 4 sistemas diferentes para completar tarefas básicas.\n\nO objetivo era unificar a experiência mantendo a robustez das funcionalidades individuais, sem sobrecarregar usuários que já enfrentavam alta curva de aprendizado tecnológico.",
      en: "The existing educational platform had fragmented interfaces between live classes, asynchronous materials and assessment system. Teachers reported frustration when switching between 4 different systems to complete basic tasks.\n\nThe goal was to unify the experience while maintaining the robustness of individual features, without overwhelming users who already faced a high technological learning curve."
    },
    challenge_highlight: {
      pt: "4 sistemas diferentes para tarefas básicas de ensino",
      en: "4 different systems for basic teaching tasks"
    },
    process: {
      pt: "Realizei sessões de observação contextual com 12 professores durante suas rotinas reais. Mapeei todos os fluxos críticos e criei um inventário de componentes existentes. Propus uma arquitetura de informação unificada validada através de card sorting com usuários finais.",
      en: "I conducted contextual observation sessions with 12 teachers during their real routines. I mapped all critical flows and created an inventory of existing components. I proposed a unified information architecture validated through card sorting with end users."
    },
    solution: {
      pt: "Projetei um Design System escalável com biblioteca de 45+ componentes reutilizáveis. A nova interface consolidou todas as funcionalidades em uma navegação lateral contextual. Implementei padrões de acessibilidade WCAG AA e modo escuro nativo, fundamental para professores que trabalham em horários noturnos.",
      en: "I designed a scalable Design System with library of 45+ reusable components. The new interface consolidated all features into contextual side navigation. I implemented WCAG AA accessibility standards and native dark mode, fundamental for teachers working night shifts."
    },
    learnings: {
      pt: "Testes A/B comparando a interface antiga vs. nova mostraram 40% de redução em tickets de suporte e aumento de 28% no uso de funcionalidades avançadas. A chave foi equilibrar consolidação com clareza visual, evitando sobrecarregar uma única tela.",
      en: "A/B tests comparing old vs. new interface showed 40% reduction in support tickets and 28% increase in use of advanced features. The key was balancing consolidation with visual clarity, avoiding overloading a single screen."
    }
  }
];

export default projectsData;