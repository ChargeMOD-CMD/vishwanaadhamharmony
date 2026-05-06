import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Heart, BookOpen, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sri Vishwa Naadham Academy" },
      { name: "description", content: "Our story, mission and teaching philosophy — blending classical Indian traditions with modern artistic learning." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">About the Academy</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">A home for the artist within.</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
        Sri Vishwa Naadham is a premier institution dedicated to nurturing artistic talent in music and fine arts.
        We blend classical traditions with modern learning methods to create a holistic creative experience.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {[
          { icon: BookOpen, title: "Our Story", body: "Born from a love for India's living arts, the academy grew from a single guru-shishya circle into a thriving creative home." },
          { icon: Heart, title: "Our Mission", body: "To preserve tradition while empowering each student to find a uniquely personal artistic voice." },
          { icon: Sparkles, title: "Philosophy", body: "Discipline meets delight. We teach technique with patience and creativity with courage." },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl bg-card border border-border p-7 hover:shadow-[var(--shadow-elegant)] transition-shadow">
            <div className="h-11 w-11 rounded-xl bg-secondary text-primary grid place-items-center mb-4">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-3xl bg-secondary p-10 md:p-14">
        <Users className="h-8 w-8 text-primary mb-4" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">For every age. For every aspiration.</h2>
        <p className="mt-4 text-secondary-foreground/80 max-w-2xl">
          From four-year-olds making their first brushstroke to adults rediscovering the violin —
          our gurus design a path tailored to your rhythm of learning.
        </p>
      </div>
    </div>
  );
}
