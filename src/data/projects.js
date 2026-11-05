// ponytail: screenshots are placeholders (gradient tiles) until real images are dropped
// into src/assets/projects/<slug>.png — update `image` below when ready.
export const projects = [
  {
    slug: 'cravebuddy',
    title: 'CraveBuddy',
    subtitle: 'AI-powered dessert recommender — Bachelor thesis project',
    description:
      'A hybrid recommendation engine that turns natural-language cravings ("something fruity, no nuts") into safe, relevant dessert suggestions. Combines Sentence-Transformer embeddings (fine-tuned with TSDAE for Romanian) with deterministic allergen filtering, served through a microservices architecture with real-time updates and an interactive bakery map.',
    role: 'Solo project — backend, AI microservice, frontend, and research',
    tags: [
      'React',
      'Spring Boot',
      'FastAPI',
      'PostgreSQL',
      'Sentence-BERT',
      'WebSockets',
    ],
    links: {
      api: 'https://github.com/deliaelena08/CraveBuddy_api',
      frontend: 'https://github.com/deliaelena08/CraveBuddy_FE',
      ai: 'https://github.com/deliaelena08/CrabveBuddy_AI',
    },
    image: null,
  },
  {
    slug: 'social-network',
    title: 'SocialNetwork',
    subtitle: 'Desktop social platform with real-time chat',
    description:
      'A JavaFX desktop application for connecting friends and managing relationships: secure authentication with hashed passwords, profile browsing, friend requests, and real-time chat with live notifications, backed by PostgreSQL.',
    role: 'Solo project',
    tags: ['Java', 'JavaFX', 'PostgreSQL', 'Sockets'],
    links: {
      repo: 'https://github.com/deliaelena08/SocialNetwork',
    },
    image: null,
  },
  {
    slug: 'keep-up-with-your-car',
    title: 'Keep up with your car',
    subtitle: 'Android app for vehicle document tracking',
    description:
      'An Android app built for a transport business to track vehicle-related documents and taxes, update expiration dates, and get notified before renewals are due — reducing manual paperwork for fleet operators.',
    role: 'Solo project',
    tags: ['Python', 'KivyMD', 'SQL', 'Android'],
    links: {
      repo: 'https://github.com/deliaelena08/Keep-up-with-your-car',
    },
    image: null,
  },
  {
    slug: 'pet-explorer',
    title: 'PetExplorer',
    subtitle: 'Team project — pet discovery platform',
    description:
      'A full-stack platform for discovering and exploring pets, built as part of a team. Contributed to backend and frontend development alongside the rest of the team.',
    role: 'Team project — backend & frontend contributor',
    tags: ['Backend', 'Frontend', 'Team Project'],
    links: {
      api: 'https://github.com/mariusvicol/PetExplorerBackend',
      frontend: 'https://github.com/mariusvicol/PetExplorerFrontend',
    },
    image: null,
  },
];
