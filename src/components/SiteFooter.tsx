import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-bold">Sri Vishwa Naadham</h3>
          <p className="mt-2 text-sm opacity-80 italic">Where Talent Meets Tradition</p>
          <p className="mt-6 max-w-md text-sm opacity-80">
            A premier institution dedicated to nurturing artistic talent in music and fine arts —
            blending classical traditions with modern learning methods.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gold">Explore</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link to="/showcase">Showcase</Link></li>
            <li><Link to="/enroll">Enroll</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gold">Connect</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-2 items-center"><Phone className="h-4 w-4" /><span>+91 98416 34178</span></li>
            <li className="flex gap-2 items-center"><Mail className="h-4 w-4" /><span>info@vishwanaadhamacademy.com</span></li>
            <li className="flex gap-2 items-start"><MapPin className="h-4 w-4 mt-0.5" /><span>Chennai, Tamil Nadu, India</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Sri Vishwa Naadham Music & Fine Arts Academy. All rights reserved.
      </div>
    </footer>
  );
}
