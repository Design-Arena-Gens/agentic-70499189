'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-secondary">Featured Work</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Interfaces that blend craft and performance.
          </h2>
        </div>
        <p className="max-w-xl text-base text-white/60">
          Each project is a bespoke system designed to scale. From product launches to flagship
          narratives, the goal is consistent—ship experiences that feel inevitable.
        </p>
      </div>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02]"
          >
            <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative aspect-[16/10] md:aspect-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 md:group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-surface/50 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col gap-6 p-8 md:p-12">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-secondary">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/65">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-white"
                >
                  View case study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-4 w-4"
                  >
                    <path d="M9 5h10v10" />
                    <path d="M5 19 19 5" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
