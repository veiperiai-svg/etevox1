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
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 tracking-wider">
          Contact <span className="text-primary glow-text">Us</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12 opacity-60" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="flex flex-col justify-center gap-8">
            <p className="font-body text-lg text-muted-foreground tracking-wide leading-relaxed">
              Have a project in mind? Let's talk about how we can bring your vision to life.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display text-xs tracking-wider text-muted-foreground uppercase">Email</p>
                <p className="font-body text-foreground tracking-wide">contact@etecappmedia.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display text-xs tracking-wider text-muted-foreground uppercase">Location</p>
                <p className="font-body text-foreground tracking-wide">Remote — Worldwide</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 glow-border flex flex-col gap-5">
            <div>
              <label className="font-display text-xs tracking-wider text-muted-foreground uppercase block mb-2">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-body text-foreground tracking-wide focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-display text-xs tracking-wider text-muted-foreground uppercase block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-body text-foreground tracking-wide focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-display text-xs tracking-wider text-muted-foreground uppercase block mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-body text-foreground tracking-wide focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-widest uppercase hover:shadow-[0_0_30px_hsl(190_100%_50%/0.4)] transition-shadow duration-300"
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
