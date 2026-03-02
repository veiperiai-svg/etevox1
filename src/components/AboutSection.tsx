import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const AboutSection = () => {
  const { t } = useLanguage();

  const team = [
    { name: t.about.member1Name, role: t.about.member1Role, initials: "AK" },
    { name: t.about.member2Name, role: t.about.member2Role, initials: "MV" },
    { name: t.about.member3Name, role: t.about.member3Role, initials: "LS" },
  ];

  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">{t.about.label}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map(({ name, role, initials }, i) => (
            <motion.div
              key={name}
              className="text-center group"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="w-24 h-24 rounded-full gradient-bg mx-auto mb-5 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow duration-300">
                <span className="text-primary-foreground font-heading font-bold text-lg">{initials}</span>
              </div>
              <h3 className="font-heading text-base font-semibold mb-1">{name}</h3>
              <p className="text-muted-foreground text-sm">{role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
