import { useEffect, useRef, useState } from 'react';
import { useSettings } from '../context/SettingsContext';
import { languages } from '../i18n/translations';

export default function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme, language, setLanguage, t } = useSettings();
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  // Minimal modal behavior: Escape closes, focus moves in on open and
  // back to the trigger on close, body scroll is locked while open.
  // ponytail: no full focus-trap (Tab wrap) — add if keyboard users report tabbing out.
  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const trigger = triggerRef.current;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t('settings')}
        aria-expanded={open}
        className="fixed right-6 top-6 z-40 rounded-full border border-slate-300 bg-white p-2 text-slate-700 shadow-sm transition hover:border-primary hover:text-primary dark:border-text-muted/30 dark:bg-surface dark:text-text-muted dark:hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t('settings')}
          className="fixed inset-0 z-50 flex justify-end"
        >
          <button
            type="button"
            aria-label={t('close')}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-slate-900/40 dark:bg-background/70"
          />

          <aside className="relative flex h-full w-full max-w-sm flex-col gap-10 overflow-y-auto bg-white px-8 py-10 text-slate-900 shadow-xl dark:bg-surface dark:text-text-main">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{t('settings')}</h2>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t('close')}
                className="rounded-full p-1 text-slate-500 hover:text-primary dark:text-text-muted"
              >
                ✕
              </button>
            </div>

            {/* Language */}
            <section>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-text-muted">
                {t('language')}
              </h3>
              <div className="flex flex-col gap-2">
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    type="button"
                    onClick={() => setLanguage(lng.code)}
                    aria-pressed={language === lng.code}
                    className={`rounded-lg border px-4 py-2 text-left text-sm transition ${
                      language === lng.code
                        ? 'border-primary bg-primary/10 font-semibold text-primary'
                        : 'border-slate-200 text-slate-700 hover:border-primary dark:border-text-muted/20 dark:text-text-muted'
                    }`}
                  >
                    {lng.label}
                  </button>
                ))}
              </div>
            </section>

            {/* Theme */}
            <section>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-text-muted">
                {t('theme')}
              </h3>
              <button
                type="button"
                onClick={toggleTheme}
                role="switch"
                aria-checked={theme === 'dark'}
                className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-primary dark:border-text-muted/20 dark:text-text-muted"
              >
                <span>{theme === 'dark' ? t('dark') : t('light')}</span>
                <span className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-300 dark:bg-primary">
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
                      theme === 'dark' ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </span>
              </button>
            </section>

            {/* Quick Links */}
            <section>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-text-muted">
                {t('quickLinks')}
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  // TODO: replace with real repo URL before deploying
                  href="https://github.com/your-username/portfolio/issues/new"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:text-primary dark:border-text-muted/20 dark:text-text-muted"
                >
                  {t('reportIssue')}
                </a>
                <div className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:bg-background dark:text-text-muted">
                  <p className="font-medium text-slate-800 dark:text-text-main">
                    {t('contactMe')}
                  </p>
                  {/* TODO: replace with real contact email before deploying */}
                  <a
                    href="mailto:you@example.com"
                    className="text-primary hover:underline"
                  >
                    you@example.com
                  </a>
                </div>
              </div>
            </section>
          </aside>
        </div>
      )}
    </>
  );
}
