/* eslint-disable react/prop-types -- no PropTypes dep added; shape lives in src/data/projects.js */
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SHORT_LABELS = { repo: 'View Code', api: 'API', ai: 'AI' };

// camelCase link keys (e.g. "mppLabs") -> "Mpp Labs"; known short keys use SHORT_LABELS.
function linkLabel(key) {
  if (SHORT_LABELS[key]) return SHORT_LABELS[key];
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

function ProjectCard({ project }) {
  const linkEntries = Object.entries(project.links);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-primary/60 dark:border-text-muted/10 dark:bg-surface"
    >
      {/* Soft violet glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_40px_6px_rgba(167,139,250,0.35)] transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative mb-5 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent text-sm font-medium text-primary/70 dark:from-primary/25 dark:via-surface dark:to-surface">
        {/* ponytail: swap for <img src={project.image} /> once screenshots land in src/assets/projects */}
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full rounded-xl object-cover"
          />
        ) : (
          project.title
        )}
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-text-main">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-primary">
        {project.subtitle}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-text-muted">
        {project.description}
      </p>
      <p className="mt-3 text-xs italic text-slate-500 dark:text-text-muted/80">
        {project.role}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-4 dark:border-text-muted/10">
        {linkEntries.map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-slate-700 underline-offset-4 transition hover:text-primary hover:underline dark:text-text-main"
          >
            {linkLabel(key)}
          </a>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-16 max-w-2xl"
      >
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Projects
        </span>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-text-main">
          Things I&apos;ve built
        </h2>
        <p className="mt-4 text-slate-600 dark:text-text-muted">
          A mix of solo and team projects spanning AI, full-stack web, and
          mobile development.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
