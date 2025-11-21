import { services } from "@/data/portfolio";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary">Practice areas</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Design partners for ambitious teams.
          </h2>
        </div>
        <p className="max-w-xl text-base text-white/60">
          Every engagement is anchored in measurable outcomes. We co-create frameworks, craft
          interfaces, and establish the operational systems that keep them evolving.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="gradient-border group relative flex flex-col rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
          >
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 text-sm text-white/60">{service.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/60">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
