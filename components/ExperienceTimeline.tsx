import { timeline } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary">Trajectory</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Two decades of shaping digital futures.
          </h2>
        </div>
        <p className="max-w-xl text-base text-white/60">
          From boutique studios to global platforms, I build bridges between vision and delivery.
          Every stop sharpened the craft of translating complexity into elegant systems.
        </p>
      </div>
      <div className="relative border-l border-white/10 pl-10">
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-secondary/50 via-white/10 to-transparent" />
        <div className="flex flex-col gap-12">
          {timeline.map((event) => (
            <article key={event.title} className="relative pl-4">
              <span className="absolute -left-[38px] mt-1 h-3 w-3 rounded-full bg-secondary shadow-glow" />
              <p className="text-sm uppercase tracking-[0.24em] text-white/50">{event.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{event.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
