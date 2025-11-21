export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p>Mantis Works © {new Date().getFullYear()} — Crafted on the unceded lands of the Ohlone.</p>
        <div className="flex items-center gap-4">
          <a href="#projects" className="transition hover:text-white">
            Work
          </a>
          <a href="#services" className="transition hover:text-white">
            Practice
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
