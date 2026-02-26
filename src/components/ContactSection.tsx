import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-2 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {t.contact.title} <span className="text-primary">{t.contact.titleAccent}</span>
        </motion.h2>
        <motion.div
          className="w-12 h-0.5 bg-primary/40 mx-auto mb-14 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.contact.subtitle}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{t.contact.email}</p>
                <p className="text-foreground">contact@etecappmedia.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{t.contact.location}</p>
                <p className="text-foreground">{t.contact.locationValue}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wide block mb-2">{t.contact.name}</label>
              <input
                type="text"
                required
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/40 transition-colors"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wide block mb-2">{t.contact.emailLabel}</label>
              <input
                type="email"
                required
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/40 transition-colors"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wide block mb-2">{t.contact.message}</label>
              <textarea
                required
                rows={4}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/40 transition-colors resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              <Send className="w-4 h-4" />
              {submitted ? t.contact.sent : t.contact.send}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
