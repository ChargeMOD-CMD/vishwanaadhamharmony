import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import music from "@/assets/music.jpg";
import fineArts from "@/assets/fine-arts.jpg";
import { Phone, MessageCircle, Music2, Palette, Sparkles, ArrowRight } from "lucide-react";
import { RagaWheel } from "@/components/RagaWheel";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Vishwa Naadham — Music & Fine Arts Academy in Chennai" },
      { name: "description", content: "Where Talent Meets Tradition. Learn Carnatic vocal, keyboard, guitar, violin, flute, drawing, painting & creative arts at Chennai's premier academy." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />

        {/* animated waves */}
        <svg className="absolute bottom-0 left-0 w-full h-32 text-gold/30 animate-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C240,128 480,0 720,48 C960,96 1200,32 1440,80 L1440,120 L0,120 Z" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-44">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs tracking-[0.25em] uppercase text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Est. Chennai
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
              Where Talent <br /> Meets <span className="text-gradient-gold italic">Tradition</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-85">
              Sri Vishwa Naadham Music & Fine Arts Academy — a sanctuary for classical music,
              modern instruments, and timeless visual arts.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/enroll" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-gold-foreground font-semibold shadow-[var(--shadow-gold)] hover:scale-105 transition-transform">
                Join Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+919841634178" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/30 font-medium hover:bg-white/20 transition">
                <Phone className="h-4 w-4" /> +91 98416 34178
              </a>
              <a href="https://wa.me/919841634178" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/30 font-medium hover:bg-white/20 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STATS */}
      <section className="mx-auto max-w-7xl px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card border border-border rounded-3xl p-6 md:p-8 shadow-[var(--shadow-elegant)]">
          {[
            ["9+", "Disciplines"],
            ["500+", "Students"],
            ["15+", "Master Gurus"],
            ["6 Days", "Weekly Classes"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TWO PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Our Disciplines</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Two arts. One soul.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Music", icon: Music2, img: music, blurb: "Carnatic Vocal · Keyboard · Guitar · Violin · Flute" },
            { title: "Fine Arts", icon: Palette, img: fineArts, blurb: "Drawing · Painting · Craft · Creative Art for Kids" },
          ].map((p) => (
            <Link key={p.title} to="/courses" className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-transform">
              <img src={p.img} alt={p.title} loading="lazy" className="h-72 w-full object-cover group-hover:scale-105 transition-transform duration-700" width={1024} height={1024} />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/95 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-primary-foreground">
                <p.icon className="h-7 w-7 text-gold mb-3" />
                <h3 className="font-display text-3xl font-bold">{p.title}</h3>
                <p className="opacity-85 text-sm mt-1">{p.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-gold text-sm font-medium">Explore courses <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <RagaWheel />
      <TestimonialsMarquee />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-3xl bg-hero text-primary-foreground p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-primary-glow/30 blur-3xl" />
          <h2 className="font-display text-4xl md:text-5xl font-bold relative">Begin your journey today.</h2>
          <p className="mt-4 opacity-85 max-w-xl mx-auto relative">
            Personal guidance, intimate batches, and a tradition that has shaped artists for generations.
          </p>
          <Link to="/enroll" className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-gold-foreground font-semibold relative hover:scale-105 transition-transform">
            Reserve a Trial Class <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
