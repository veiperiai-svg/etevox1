import bgAbstract from "@/assets/bg-abstract.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgAbstract} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
            Etevox | <span className="gradient-text font-black tracking-tight font-['Outfit']">Media</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>

            <button
              onClick={() => scrollTo("#projects")}
              className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity duration-200">

              {t.hero.viewProjects}
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3 rounded-xl border border-border text-foreground font-heading text-sm font-semibold tracking-wide hover:bg-secondary transition-colors duration-200">

              {t.hero.getInTouch}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;