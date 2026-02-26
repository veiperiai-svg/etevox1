import { Palette, Layout, RefreshCw, Gauge } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Palette, title: t.services.webDesign, desc: t.services.webDesignDesc },
    { icon: Layout, title: t.services.frontEnd, desc: t.services.frontEndDesc },
    { icon: RefreshCw, title: t.services.redesign, desc: t.services.redesignDesc },
    { icon: Gauge, title: t.services.performance, desc: t.services.performanceDesc },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-2 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {t.services.title} <span className="text-primary">{t.services.titleAccent}</span>
        </motion.h2>
        <motion.div
          className="w-12 h-0.5 bg-primary/40 mx-auto mb-14 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="glass rounded-xl p-8 hover:border-primary/20 transition-colors duration-200"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-base font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
