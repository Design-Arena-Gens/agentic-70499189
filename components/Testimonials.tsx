import { testimonials } from "@/data/portfolio";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary">Signals</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Partners that champion the journey.
          </h2>
        </div>
        <p className="max-w-xl text-base text-white/60">
          The most valuable products are born from radical collaboration. These leaders share how we
          shaped transformation together.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.name}
            className="gradient-border flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.03] p-8 text-sm text-white/70"
          >
            <p className="text-pretty leading-relaxed">“{testimonial.quote}”</p>
            <footer className="mt-8">
              <p className="text-sm font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-wide text-white/50">{testimonial.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
