import { Code, Monitor, Smartphone, Zap } from "lucide-react";
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

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Code, title: t.about.cleanCode, desc: t.about.cleanCodeDesc },
    { icon: Monitor, title: t.about.responsiveDesign, desc: t.about.responsiveDesignDesc },
    { icon: Zap, title: t.about.fastPerformance, desc: t.about.fastPerformanceDesc },
    { icon: Smartphone, title: t.about.mobileFirst, desc: t.about.mobileFirstDesc },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-2 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {t.about.title} <span className="text-primary">{t.about.titleAccent}</span>
        </motion.h2>
        <motion.div
          className="w-12 h-0.5 bg-primary/40 mx-auto mb-14 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />

        <motion.div
          className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base md:text-lg leading-relaxed text-foreground/85">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="glass rounded-xl p-6 text-center hover:border-primary/20 transition-colors duration-200"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
