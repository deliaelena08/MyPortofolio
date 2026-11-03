function App() {
  return (
    <div className="dark min-h-screen bg-background text-text-main">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6">
        <span className="mb-4 w-fit rounded-full border border-primary/30 bg-surface px-4 py-1 text-sm font-medium text-primary">
          Frontend Engineer
        </span>

        <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Building sharp, thoughtful
          <br />
          interfaces for the web.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-text-muted">
          I design and develop performant, accessible web experiences — blending
          clean engineering with a strong visual point of view.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-background transition hover:brightness-110"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-text-muted/30 px-6 py-3 font-semibold text-text-main transition hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
