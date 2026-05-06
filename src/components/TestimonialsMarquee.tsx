import { Quote } from "lucide-react";

const items = [
  { q: "My daughter found her voice here. Truly transformative.", a: "Meera, Parent" },
  { q: "The gurus blend tradition with such warmth and patience.", a: "Karthik, Vocal Student" },
  { q: "I picked up a brush at 40 — and never put it down.", a: "Anitha, Painting" },
  { q: "Best violin teacher in Chennai, hands down.", a: "Rahul, Violin" },
  { q: "My son looks forward to art class every weekend!", a: "Divya, Parent" },
  { q: "Sound, soul, and discipline — all in one place.", a: "Vivek, Flute" },
];

export function TestimonialsMarquee() {
  const row = [...items, ...items];
  return (
    <section className="py-20 overflow-hidden bg-secondary/40">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Voices of our family</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Loved by students & parents.</h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 marquee-track">
          {row.map((t, i) => (
            <figure key={i} className="shrink-0 w-[340px] rounded-2xl bg-card border border-border p-6 shadow-sm">
              <Quote className="h-6 w-6 text-gold" />
              <blockquote className="mt-3 text-foreground/90">{t.q}</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        .marquee-track { animation: marquee 40s linear infinite; width: max-content; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}
