import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/enroll")({
  head: () => ({
    meta: [
      { title: "Enroll — Sri Vishwa Naadham Academy" },
      { name: "description", content: "Reserve your trial class. Pick a course and begin your artistic journey today." },
    ],
  }),
  component: Enroll,
});

const courses = [
  "Carnatic Vocal", "Keyboard", "Guitar", "Violin", "Flute",
  "Drawing", "Painting", "Craft", "Creative Art for Kids",
];

function Enroll() {
  const [done, setDone] = useState(false);
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Enrollment</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">Begin your journey.</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Fill the form and our coordinator will reach out within 24 hours to schedule a trial class.
      </p>

      <div className="mt-12 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-elegant)]">
          {done ? (
            <div className="text-center py-12">
              <CheckCircle2 className="h-14 w-14 text-gold mx-auto" />
              <h2 className="font-display text-3xl font-bold mt-4">Thank you!</h2>
              <p className="text-muted-foreground mt-2">We've received your enquiry and will be in touch shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setDone(true); }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" required />
                <Field label="Age" name="age" type="number" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Phone" name="phone" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div>
                <label className="text-sm font-medium">Course</label>
                <select required className="mt-1.5 w-full px-4 py-3 rounded-xl border border-input bg-background outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select a course…</option>
                  {courses.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Message (optional)</label>
                <textarea rows={4} className="mt-1.5 w-full px-4 py-3 rounded-xl border border-input bg-background outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
              <button type="submit" className="w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-[var(--shadow-elegant)]">
                Reserve Trial Class
              </button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl bg-secondary p-6">
            <h3 className="font-display text-xl font-semibold text-primary">Class timings</h3>
            <p className="text-sm mt-2 text-secondary-foreground/80">Weekdays · 4:00 PM – 8:00 PM</p>
            <p className="text-sm text-secondary-foreground/80">Weekends · 10:00 AM – 6:00 PM</p>
          </div>
          <div className="rounded-2xl bg-primary text-primary-foreground p-6">
            <h3 className="font-display text-xl font-semibold">Prefer to talk?</h3>
            <p className="text-sm mt-2 opacity-85">Call or WhatsApp our coordinator directly.</p>
            <div className="mt-4 flex flex-col gap-2">
              <a href="tel:+919841634178" className="px-4 py-2.5 rounded-full bg-gold text-gold-foreground text-sm font-semibold text-center">Call +91 98416 34178</a>
              <a href="https://wa.me/919841634178" target="_blank" rel="noreferrer" className="px-4 py-2.5 rounded-full bg-white/10 border border-white/30 text-sm font-semibold text-center hover:bg-white/20">WhatsApp</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input {...rest} className="mt-1.5 w-full px-4 py-3 rounded-xl border border-input bg-background outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
