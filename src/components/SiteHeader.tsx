import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/instructors", label: "Instructors" },
  { to: "/showcase", label: "Showcase" },
  { to: "/enroll", label: "Enroll" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-full bg-primary grid place-items-center shadow-[var(--shadow-gold)] group-hover:scale-105 transition-transform">
            <img src={logo} alt="Sri Vishwa Naadham" className="h-9 w-9 object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-primary">Sri Vishwa Naadham</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Music & Fine Arts</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-primary bg-secondary rounded-full" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/enroll"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 shadow-[var(--shadow-elegant)] transition"
        >
          Join Now
        </Link>

        <button className="lg:hidden p-2 text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-foreground/80 hover:text-primary">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
