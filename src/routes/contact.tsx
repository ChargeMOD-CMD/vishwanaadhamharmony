import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sri Vishwa Naadham Academy" },
      { name: "description", content: "Visit, call or WhatsApp Sri Vishwa Naadham Music & Fine Arts Academy in Chennai." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Contact</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">Let's talk art.</h1>

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        {[
          { icon: Phone, label: "Phone", value: "+91 98416 34178", href: "tel:+919841634178" },
          { icon: MessageCircle, label: "WhatsApp", value: "+91 98416 34178", href: "https://wa.me/919841634178" },
          { icon: Mail, label: "Email", value: "info@vishwanaadhamacademy.com", href: "mailto:info@vishwanaadhamacademy.com" },
        ].map((c) => (
          <a key={c.label} href={c.href} className="group rounded-2xl bg-card border border-border p-6 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
            <div className="h-11 w-11 rounded-xl bg-secondary text-primary grid place-items-center">
              <c.icon className="h-5 w-5" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
            <p className="font-medium mt-1 group-hover:text-primary transition-colors">{c.value}</p>
          </a>
        ))}
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-card border border-border p-8">
          <Clock className="h-6 w-6 text-gold" />
          <h3 className="font-display text-2xl font-semibold mt-3">Class Timings</h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between border-b border-border py-2">
              <span className="text-muted-foreground">Weekdays</span>
              <span className="font-medium">4:00 PM – 8:00 PM</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Weekends</span>
              <span className="font-medium">10:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-card border border-border p-8">
          <MapPin className="h-6 w-6 text-gold" />
          <h3 className="font-display text-2xl font-semibold mt-3">Visit Us</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Sri Vishwa Naadham Music & Fine Arts Academy<br />
            Chennai, Tamil Nadu, India
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl overflow-hidden border border-border">
        <iframe
          title="Map"
          src="https://www.google.com/maps?q=Chennai,Tamil+Nadu&output=embed"
          className="w-full h-80 border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
