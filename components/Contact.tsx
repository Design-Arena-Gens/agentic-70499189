export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <div className="gradient-border rounded-3xl border border-white/5 bg-white/[0.03] p-12 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.32em] text-secondary">Let&apos;s build together</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Tell me about the future you want to ship.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-white/60">
          Whether you need a partner for a flagship launch or a sparring collaborator to pressure
          test ideas, I design the engagement model around momentum. Share a note and we&apos;ll start
          writing the brief together.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-sm uppercase tracking-[0.24em] text-white/60">Direct line</h3>
            <a
              href="mailto:hello@mantis.works"
              className="mt-3 block text-lg font-semibold text-white transition hover:text-secondary"
            >
              hello@mantis.works
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-sm uppercase tracking-[0.24em] text-white/60">Social frequency</h3>
            <div className="mt-3 flex flex-col gap-2 text-white/70">
              <a
                href="https://www.linkedin.com"
                className="transition hover:text-secondary"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com"
                className="transition hover:text-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.github.com"
                className="transition hover:text-secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <form className="mt-10 grid gap-4 md:grid-cols-2">
          <label className="md:col-span-1">
            <span className="text-xs uppercase tracking-[0.24em] text-white/50">Your name</span>
            <input
              type="text"
              placeholder="Ada Lovelace"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-secondary"
            />
          </label>
          <label className="md:col-span-1">
            <span className="text-xs uppercase tracking-[0.24em] text-white/50">Contact email</span>
            <input
              type="email"
              placeholder="ada@lovelace.studio"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-secondary"
            />
          </label>
          <label className="md:col-span-2">
            <span className="text-xs uppercase tracking-[0.24em] text-white/50">Project catalyst</span>
            <textarea
              rows={4}
              placeholder="Share the challenge, the timeline, and the outcome you are chasing."
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-secondary"
            />
          </label>
          <button
            type="submit"
            className="md:col-span-2 rounded-full bg-secondary px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-surface transition hover:bg-white hover:text-surface"
          >
            Send transmission
          </button>
        </form>
      </div>
    </section>
  );
}
