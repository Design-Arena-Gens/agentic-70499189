import Link from "next/link";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Practice", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-surface/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Mantis<span className="text-secondary">Works</span>
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/80 transition hover:border-secondary hover:bg-secondary/10 hover:text-white"
        >
          Engage
        </Link>
      </div>
    </header>
  );
}
