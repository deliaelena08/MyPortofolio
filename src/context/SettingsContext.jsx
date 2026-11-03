import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../i18n/translations';

const SettingsContext = createContext(null);

function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

// eslint-disable-next-line react/prop-types -- no PropTypes dep added, children is self-evident here
export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [language, setLanguage] = useState(
    () => localStorage.getItem('language') || 'en'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const t = (key) => translations[language][key] ?? key;

  return (
    <SettingsContext.Provider
      value={{ theme, toggleTheme, language, setLanguage, t }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
}
