import { useEffect, useRef, useState } from "react";

const ITEMS = [
  "Carnatic Vocal", "Keyboard", "Guitar", "Violin", "Flute",
  "Drawing", "Painting", "Craft", "Creative Art",
];

export function RagaWheel() {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (window.innerHeight / 2 - center) * 0.25;
        setRot(offset);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % ITEMS.length), 1800);
    return () => clearInterval(id);
  }, []);

  const radius = 180;

  return (
    <section ref={ref} className="relative mx-auto max-w-7xl px-6 py-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">The Raga Wheel</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            One academy. <br /><span className="text-gradient-gold italic">Nine paths.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Each discipline is a note in a larger raga. Rotate, explore, and find the one that resonates with you.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Currently highlighting: <strong className="text-primary">{ITEMS[active]}</strong>
          </div>
        </div>

        <div className="relative h-[440px] grid place-items-center">
          {/* Concentric rings */}
          <div className="absolute inset-0 grid place-items-center">
            {[0.5, 0.75, 1].map((s, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-primary/15"
                style={{ width: 380 * s, height: 380 * s }}
              />
            ))}
          </div>

          {/* Wheel */}
          <div
            className="relative h-[380px] w-[380px] transition-transform duration-300 ease-out"
            style={{ transform: `rotate(${rot}deg)` }}
          >
            {ITEMS.map((label, i) => {
              const angle = (i / ITEMS.length) * Math.PI * 2 - Math.PI / 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = i === active;
              return (
                <div
                  key={label}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${-rot}deg)` }}
                >
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-500 whitespace-nowrap ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary scale-110 shadow-[var(--shadow-gold)]"
                        : "bg-card text-foreground border-border hover:border-primary"
                    }`}
                  >
                    {label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center orb */}
          <div className="absolute h-28 w-28 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-[var(--shadow-elegant)] animate-pulse-glow">
            <div className="font-display text-gold text-2xl">ॐ</div>
          </div>
        </div>
      </div>
    </section>
  );
}
