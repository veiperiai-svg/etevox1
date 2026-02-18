import { Code, Monitor, Smartphone, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 tracking-wider">
          About <span className="text-primary glow-text">Us</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12 opacity-60" />

        <div className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12 glow-border mb-16">
          <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/90 tracking-wide">
            We are Front-End Web Designers crafting fast, modern, and visually compelling websites
            that turn visitors into customers. We combine clean code with intuitive user experience
            and striking design to create responsive, mobile-friendly interfaces that look flawless
            on every device. Whether you need a brand-new website or a redesign that elevates your
            online presence, we focus on performance, usability, and detail — delivering digital
            experiences that not only look great but drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Code, title: "Clean Code", desc: "Semantic, maintainable & performant" },
            { icon: Monitor, title: "Responsive Design", desc: "Pixel-perfect on every screen" },
            { icon: Zap, title: "Fast Performance", desc: "Optimized for speed & SEO" },
            { icon: Smartphone, title: "Mobile First", desc: "Built for the modern user" },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass rounded-xl p-6 text-center group hover:glow-border transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold tracking-wider mb-2">{title}</h3>
              <p className="font-body text-muted-foreground text-sm tracking-wide">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
