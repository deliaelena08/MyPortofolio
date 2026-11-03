// ponytail: flat key->string dict per language; swap for i18next if routes/pluralization are needed later.
export const translations = {
  en: {
    settings: 'Settings',
    language: 'Language',
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',
    quickLinks: 'Quick Links',
    reportIssue: 'Report an Issue',
    contactMe: 'Contact Me',
  },
  ro: {
    settings: 'Setări',
    language: 'Limbă',
    theme: 'Temă',
    dark: 'Întunecat',
    light: 'Luminos',
    quickLinks: 'Linkuri rapide',
    reportIssue: 'Raportează o problemă',
    contactMe: 'Contactează-mă',
  },
  de: {
    settings: 'Einstellungen',
    language: 'Sprache',
    theme: 'Thema',
    dark: 'Dunkel',
    light: 'Hell',
    quickLinks: 'Schnellzugriff',
    reportIssue: 'Problem melden',
    contactMe: 'Kontaktiere mich',
  },
};

export const languages = [
  { code: 'en', label: 'English' },
  { code: 'ro', label: 'Română' },
  { code: 'de', label: 'Deutsch' },
];
