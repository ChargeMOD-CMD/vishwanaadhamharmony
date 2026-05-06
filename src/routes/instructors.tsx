import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/instructors")({
  head: () => ({
    meta: [
      { title: "Instructors — Sri Vishwa Naadham" },
      { name: "description", content: "Meet our master gurus — decades of training in Carnatic vocal, instruments and fine arts." },
    ],
  }),
  component: Instructors,
});

const team = [
  { name: "Smt. Lakshmi Iyer", role: "Carnatic Vocal", years: "22 yrs", spec: "Krithis · Varnams · Manodharma" },
  { name: "Sri Arjun Krishnan", role: "Violin & Keyboard", years: "18 yrs", spec: "Indian-Western fusion" },
  { name: "Sri Hari Venkatesh", role: "Guitar", years: "12 yrs", spec: "Acoustic · Fingerstyle · Theory" },
  { name: "Smt. Anjali Raman", role: "Flute", years: "15 yrs", spec: "Bansuri · Carnatic flute" },
  { name: "Sri Mohan Das", role: "Painting & Drawing", years: "20 yrs", spec: "Watercolour · Tanjore" },
  { name: "Smt. Priya S.", role: "Creative Art for Kids", years: "10 yrs", spec: "Playful learning · Craft" },
];

function avatarBg(i: number) {
  const grads = [
    "from-primary to-primary-glow",
    "from-gold to-primary-glow",
    "from-primary-glow to-primary",
    "from-primary to-gold",
  ];
  return grads[i % grads.length];
}

function Instructors() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Our Gurus</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">Master teachers.</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Every guru at Sri Vishwa Naadham brings years of stage experience and a deep love for teaching.
      </p>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((t, i) => (
          <div key={t.name} className="rounded-3xl bg-card border border-border overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow">
            <div className={`h-44 bg-gradient-to-br ${avatarBg(i)} flex items-center justify-center`}>
              <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur grid place-items-center font-display text-3xl text-white font-bold">
                {t.name.split(" ").slice(-1)[0][0]}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-primary font-medium mt-0.5">{t.role}</p>
              <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{t.years}</span>
                <span>{t.spec}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
