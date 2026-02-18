import bgAbstract from "@/assets/bg-abstract.jpg";
import logo from "@/assets/logo.svg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgAbstract}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <img
            src={logo}
            alt="EtecApp Media"
            className="h-20 md:h-28 mx-auto mb-8"
          />
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-foreground mb-4">
            <span className="text-primary glow-text">EtecApp</span> Media
          </h1>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 tracking-wide">
            Crafting fast, modern & visually compelling digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#projects")}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-widest uppercase hover:shadow-[0_0_30px_hsl(190_100%_50%/0.4)] transition-shadow duration-300"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3 rounded-lg border border-primary/40 text-primary font-display text-sm font-semibold tracking-widest uppercase hover:bg-primary/10 transition-colors duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
