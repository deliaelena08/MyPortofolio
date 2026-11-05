// ponytail: screenshots are placeholders (gradient tiles) until real images are dropped
// into src/assets/projects/<slug>.png — update `image` below when ready.
export const projects = [
  {
    slug: 'cravebuddy',
    title: 'CraveBuddy',
    subtitle: 'AI-powered dessert recommender — Bachelor thesis project',
    description:
      'A hybrid recommendation engine that turns natural-language cravings ("something fruity, no nuts") into safe, relevant dessert suggestions. Combines Sentence-Transformer embeddings (fine-tuned with TSDAE for Romanian) with deterministic allergen filtering, served through a microservices architecture with real-time updates and an interactive bakery map.',
    role: 'Solo project',
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
    subtitle: 'Mobile platform for pet owners — team project',
    description:
      'A three-tier platform for pet owners: a native Android app for finding vets, parks, pet stores, and lost-pet listings, backed by a Spring Boot API and a dedicated Flask/Gemini microservice that auto-generates descriptions from lost-pet photos. Includes Google Maps integration and Google OAuth2 + 2FA login.',
    role: 'Team project (11 contributors)',
    tags: [
      'Android',
      'Spring Boot',
      'Flask',
      'Gemini API',
      'PostgreSQL',
      'OAuth2',
    ],
    links: {
      api: 'https://github.com/deliaelena08/PetExplorerBackend',
      frontend: 'https://github.com/deliaelena08/PetExplorerFrontend',
    },
    image: null,
  },
  {
    slug: 'digital-triage-system',
    title: 'Digital Triage System',
    subtitle: 'AI-powered medical triage — team research project',
    description:
      'A dual-model triage pipeline trained on MIMIC-III clinical notes: BioBERT routes patients to the correct medical specialty (77.4% accuracy across 9 specialties), while PubMedBERT assesses case severity via discharge-disposition prediction (68.4% accuracy). Benchmarked against ClinicalBERT and RoBERTa, with SHAP-based explainability for clinical trust.',
    role: 'Team project',
    tags: ['Python', 'BioBERT', 'PubMedBERT', 'NLP', 'SHAP', 'MIMIC-III'],
    links: {
      // Repo is hosted under teammate Titieni Paul's account (public)
      repo: 'https://github.com/tpaul790/DigitalTriage',
    },
    image: null,
  },
  {
    slug: 'university-coursework',
    title: 'Other University Projects',
    subtitle: 'Selected coursework across semesters',
    description:
      'A selection of standalone projects from coursework: a tile-matching Memory Game built in C++ with Qt (click-tracking score system), parallel/distributed programming lab assignments (MPP), and the full semester-by-semester archive of smaller assignments and exercises.',
    role: 'Solo coursework',
    tags: ['C++', 'Qt', 'Java', 'Algorithms'],
    links: {
      memoryGame: 'https://github.com/deliaelena08/Memory-Game-Qt',
      mppLabs: 'https://github.com/mpp-at-cs-ubbcluj-ro/teme-lab-deliaelena08',
      archive: 'https://github.com/deliaelena08/University',
    },
    image: null,
  },
];
