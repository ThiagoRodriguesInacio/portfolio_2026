# Portfólio Thiago Rodrigues - Product Designer UI/UX

Portfólio digital profissional desenvolvido para apresentação estratégica de Cases de Estudo e Proposta de Valor como Designer de UI/UX.

## 🎯 Sobre o Projeto

Este portfólio foi desenvolvido seguindo a especificação funcional PORTF-V1, com foco em:

- Apresentação estratégica de projetos de design
- Comunicação clara do processo de Product Thinking
- Facilitar contato com recrutadores e empresas
- Performance e acessibilidade (WCAG 2.1 AA)

## ✨ Funcionalidades

### RF01 - Alternância de Idioma (L10N)
- Suporte completo para Português (Brasil) e Inglês (USA)
- Persistência da preferência de idioma
- Seletor intuitivo na Navbar

### RF02 - Página Inicial (Home)
- Hero Section com proposta de valor
- Grid de projetos selecionados
- Navegação por scroll anchor
- Design responsivo (Mobile, Tablet, Desktop)

### RF03 - Páginas de Case Study
- Narrativa linear detalhada
- Seções: Desafio, Processo, Solução, Aprendizados
- Elementos visuais de alta qualidade
- Foco na metodologia e resultados

### RF04 - Página Sobre
- Perfil profissional estruturado
- Hard Skills e Soft Skills organizadas
- Formação acadêmica filtrada
- CTA para LinkedIn

### RF05-RF09 - Componentes de Interface
- Navbar fixa e responsiva
- Menu hamburger para mobile
- CTAs contextuais (WhatsApp/LinkedIn)
- Rodapé com informações de contato

## 🛠️ Tecnologias

- **React** - Biblioteca JavaScript para UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS utilitário
- **Lucide React** - Ícones
- **Vite** - Build tool e dev server

## 🎨 Design System

### Paleta de Cores

- **Primary Blue**: `#2563eb` - CTAs e ações importantes
- **Grays**: `#111827` (texto), `#f9fafb` (background claro)
- **Hover States**: `#1d4ed8`

### Tipografia

- **Fonte**: Inter (Sans-serif moderna)
- **Escala**: 16px base, hierarquia de 18px a 48px
- **Pesos**: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)

### Breakpoints

- **Mobile**: max-width 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 📁 Estrutura de Arquivos

```
/
├── components/
│   ├── Navbar.tsx              # Navegação principal
│   ├── HeroSection.tsx         # Seção hero da home
│   ├── ProjectsGrid.tsx        # Grid de projetos
│   ├── ProjectCard.tsx         # Card individual de projeto
│   ├── CaseStudyPage.tsx       # Template de case study
│   ├── AboutSection.tsx        # Seção sobre mim
│   ├── Footer.tsx              # Rodapé com contatos
│   └── LanguageSwitcher.tsx    # Seletor de idioma
├── contexts/
│   └── LanguageContext.tsx     # Context API para i18n
├── data/
│   ├── projects.json           # Dados dos projetos
│   ├── translations.json       # Traduções PT/EN
│   └── about.json              # Dados pessoais e links
├── styles/
│   └── globals.css             # Estilos globais e tokens
└── App.tsx                     # Componente principal
```

## 🚀 Como Usar

### Personalização

1. **Atualizar informações pessoais** - Edite `/data/about.json`:
```json
{
  "email": "seu@email.com",
  "whatsapp_url": "https://wa.me/5511999999999",
  "linkedin_url": "https://www.linkedin.com/in/seuperfil"
}
```

2. **Adicionar novos projetos** - Edite `/data/projects.json`:
```json
{
  "slug": "nome-do-projeto",
  "title": { "pt": "Título PT", "en": "Title EN" },
  "tagline": { "pt": "Descrição PT", "en": "Description EN" },
  "tags": ["Mobile", "UI", "Research"],
  // ... demais campos
}
```

3. **Atualizar traduções** - Edite `/data/translations.json`

4. **Substituir imagens** - Utilize o Unsplash ou adicione imagens próprias

## ♿ Acessibilidade (WCAG 2.1 AA)

- ✅ Contraste de cor mínimo 4.5:1
- ✅ Navegação completa por teclado
- ✅ Anéis de foco (outline) visíveis
- ✅ Uso semântico de HTML (h1, h2, nav, main, footer)
- ✅ Alt text em todas as imagens
- ✅ Labels em campos de formulário
- ✅ ARIA labels em botões e links

## 🎯 SEO

- Meta tags descritivas
- Open Graph para redes sociais
- URLs amigáveis (slug-based)
- Semantic HTML
- Títulos hierárquicos
- Fast loading (< 2s LCP)

## 📱 Responsividade

O portfólio é 100% responsivo:

- **Mobile**: Layout em coluna única, menu hamburger
- **Tablet**: Layout híbrido, 2 colunas no grid
- **Desktop**: Layout completo, 3 colunas no grid

## 🌐 Idiomas Suportados

- 🇧🇷 Português (Brasil) - Idioma padrão
- 🇺🇸 English (USA)

## 📊 Performance

- Imagens otimizadas (Unsplash CDN)
- Lazy loading
- Smooth scroll nativo
- Font optimization (Google Fonts)
- Cache headers

## 📝 Licença

© 2025 Thiago Rodrigues. Todos os direitos reservados.

---

**Desenvolvido seguindo as melhores práticas de:**
- UI/UX Design
- Acessibilidade Web
- Performance Front-end
- SEO e Semântica
