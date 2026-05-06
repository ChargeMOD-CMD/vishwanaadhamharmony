import { createFileRoute } from "@tanstack/react-router";
import music from "@/assets/music.jpg";
import fineArts from "@/assets/fine-arts.jpg";
import hero from "@/assets/hero.jpg";
import { Play } from "lucide-react";

export const Route = createFileRoute("/showcase")({
  head: () => ({
    meta: [
      { title: "Student Showcase — Sri Vishwa Naadham" },
      { name: "description", content: "Performances, art gallery, and video highlights from our students." },
    ],
  }),
  component: Showcase,
});

const items = [
  { img: hero, title: "Annual Concert 2025", tag: "Music" },
  { img: fineArts, title: "Tanjore Workshop", tag: "Fine Arts" },
  { img: music, title: "Violin Recital", tag: "Music" },
  { img: fineArts, title: "Kids Art Expo", tag: "Fine Arts" },
  { img: hero, title: "Carnatic Margazhi", tag: "Music" },
  { img: music, title: "Ensemble Night", tag: "Music" },
];

function Showcase() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Student Showcase</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">Voices & visions.</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        A glimpse of the performances, paintings and creative milestones from our students.
      </p>

      <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <div key={i} className={`group relative overflow-hidden rounded-3xl ${i % 5 === 0 ? "lg:row-span-2 lg:col-span-2" : ""}`}>
            <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" width={800} height={600} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
            <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="h-14 w-14 rounded-full bg-gold text-gold-foreground grid place-items-center">
                <Play className="h-5 w-5 ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-5 text-primary-foreground">
              <span className="text-xs uppercase tracking-widest text-gold">{it.tag}</span>
              <h3 className="font-display text-xl font-semibold mt-1">{it.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
