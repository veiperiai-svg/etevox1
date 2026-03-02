import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    { quote: t.testimonials.quote1, name: t.testimonials.name1, role: t.testimonials.role1 },
    { quote: t.testimonials.quote2, name: t.testimonials.name2, role: t.testimonials.role2 },
    { quote: t.testimonials.quote3, name: t.testimonials.name3, role: t.testimonials.role3 },
  ];

  return (
    <section id="testimonials" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">{t.testimonials.label}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            {t.testimonials.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map(({ quote, name, role }, i) => (
            <motion.div
              key={name}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 text-sm">{quote}</p>
              <div>
                <p className="font-heading font-semibold text-sm">{name}</p>
                <p className="text-muted-foreground text-xs">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
