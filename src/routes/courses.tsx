import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic2, Piano, Guitar, Music, Wind, Pencil, Palette, Scissors, Baby, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Music & Fine Arts | Sri Vishwa Naadham" },
      { name: "description", content: "Carnatic vocal, keyboard, guitar, violin, flute, drawing, painting, craft and creative arts for kids." },
    ],
  }),
  component: Courses,
});

const music = [
  { name: "Carnatic Vocal", icon: Mic2, blurb: "The foundation of South Indian classical tradition." },
  { name: "Keyboard", icon: Piano, blurb: "Western & film music with classical grounding." },
  { name: "Guitar", icon: Guitar, blurb: "Acoustic & electric, beginner to performer." },
  { name: "Violin", icon: Music, blurb: "Indian & Western styles taught with patience." },
  { name: "Flute", icon: Wind, blurb: "Bansuri & Carnatic flute for breath and bhava." },
];

const arts = [
  { name: "Drawing", icon: Pencil, blurb: "Pencil, charcoal & ink — the fundamentals." },
  { name: "Painting", icon: Palette, blurb: "Acrylic, watercolour & traditional Indian forms." },
  { name: "Craft", icon: Scissors, blurb: "Hands-on artistic crafts for every age." },
  { name: "Creative Art for Kids", icon: Baby, blurb: "Playful, imaginative classes for young artists." },
];

function Card({ name, icon: Icon, blurb }: { name: string; icon: typeof Mic2; blurb: string }) {
  return (
    <div className="group rounded-2xl bg-card border border-border p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-all">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground grid place-items-center group-hover:scale-110 transition-transform">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{blurb}</p>
      <Link to="/enroll" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
        Enroll <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

function Courses() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Curriculum</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">Courses</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Choose from nine carefully crafted disciplines — taught by master gurus in intimate batches.
      </p>

      <h2 className="font-display text-3xl font-bold mt-16 text-primary">Music</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {music.map((c) => <Card key={c.name} {...c} />)}
      </div>

      <h2 className="font-display text-3xl font-bold mt-16 text-primary">Fine Arts</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {arts.map((c) => <Card key={c.name} {...c} />)}
      </div>
    </div>
  );
}
