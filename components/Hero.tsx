'use client';

import { motion } from "framer-motion";
import { stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-light bg-[size:120px_120px] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(108,99,255,0.25),transparent_60%)]" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-28 pt-24 md:flex-row md:items-end md:gap-20 md:pt-32">
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            Available for select collaborations Q3 2024
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Architecting the next wave of experiential products.
          </h1>
          <p className="max-w-2xl text-lg text-white/60 md:text-xl">
            I help visionary teams craft cohesive stories, systems, and surfaces. From future-casting
            prototypes to production-grade platforms, I build interfaces that speak human and scale
            global.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="#projects"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-surface transition hover:bg-secondary hover:text-white"
            >
              Explore Featured Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/80 transition hover:border-secondary hover:text-white"
            >
              Schedule a Session
            </a>
          </div>
        </motion.div>
        <motion.div
          className="grid flex-1 grid-cols-2 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="gradient-border relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6"
            >
              <span className="text-3xl font-semibold text-white md:text-4xl">{stat.value}</span>
              <p className="mt-2 text-sm uppercase tracking-wide text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
