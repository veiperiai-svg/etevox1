import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2 tracking-tight">
          Contact <span className="text-primary">Us</span>
        </h2>
        <div className="w-12 h-0.5 bg-primary/40 mx-auto mb-14 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col justify-center gap-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind? Let's talk about how we can bring your vision to life.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                <p className="text-foreground">contact@etecappmedia.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                <p className="text-foreground">Remote — Worldwide</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-5">
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wide block mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/40 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wide block mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/40 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wide block mb-2">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/40 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              <Send className="w-4 h-4" />
              {submitted ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
