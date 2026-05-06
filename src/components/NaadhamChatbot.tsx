import { useState } from "react";
import { Sparkles, Send, X } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const SUGGESTIONS = [
  "Recommend a course for me",
  "What are the class timings?",
  "Tell me about your teachers",
  "How do I enroll?",
];

const seedReply = (q: string) => {
  const t = q.toLowerCase();
  if (t.includes("time") || t.includes("timing")) return "Weekdays 4–8 PM and weekends 10 AM–6 PM. Would you like to book a trial class?";
  if (t.includes("enrol") || t.includes("join") || t.includes("register")) return "You can enroll on our Enrollment page — pick a course, fill the form, and we'll reach out within 24 hours.";
  if (t.includes("teacher") || t.includes("instructor")) return "Our gurus blend decades of classical training with modern teaching. Visit the Instructors page to meet them.";
  if (t.includes("recommend") || t.includes("course")) return "Tell me your age and interest — vocal, instrument, or fine arts? I'll suggest the perfect raga of learning for you.";
  if (t.includes("fee") || t.includes("price")) return "Course fees vary by discipline. Share your interest and I'll connect you with our coordinator.";
  return "Lovely question! Let me guide you — try one of the suggestions below or share more about what you'd like to learn.";
};

export function NaadhamChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Namaste! I'm Naadham — your AI guide. How may I help you discover the art within?" },
  ]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "bot", text: seedReply(q) }]);
    setInput("");
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Naadham AI Guide"
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-primary text-primary-foreground grid place-items-center animate-pulse-glow hover:scale-110 transition-transform"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-glow to-primary opacity-90" />
          <Sparkles className="relative h-7 w-7 text-gold" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-3xl bg-card border border-border shadow-[var(--shadow-elegant)] overflow-hidden animate-fade-up">
          <div className="bg-hero text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gold/20 grid place-items-center">
                <Sparkles className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="font-display font-semibold">Naadham AI Guide</div>
                <div className="text-xs opacity-75">Creative · Inspiring</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-5 w-5" /></button>
          </div>

          <div className="h-72 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border rounded-bl-sm"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 flex gap-2 flex-wrap border-t border-border">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => send(s)} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-accent transition">
                {s}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="p-3 flex gap-2 border-t border-border">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Naadham…"
              className="flex-1 px-3 py-2 rounded-full bg-muted text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button type="submit" className="h-9 w-9 grid place-items-center rounded-full bg-primary text-primary-foreground hover:opacity-90">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
