import { Code, Monitor, Smartphone, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2 tracking-tight">
          About <span className="text-primary">Us</span>
        </h2>
        <div className="w-12 h-0.5 bg-primary/40 mx-auto mb-14 rounded-full" />

        <div className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12 mb-16">
          <p className="text-base md:text-lg leading-relaxed text-foreground/85">
            We are Front-End Web Designers crafting fast, modern, and visually compelling websites
            that turn visitors into customers. We combine clean code with intuitive user experience
            and striking design to create responsive, mobile-friendly interfaces that look flawless
            on every device. Whether you need a brand-new website or a redesign that elevates your
            online presence, we focus on performance, usability, and detail — delivering digital
            experiences that not only look great but drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Code, title: "Clean Code", desc: "Semantic, maintainable & performant" },
            { icon: Monitor, title: "Responsive Design", desc: "Pixel-perfect on every screen" },
            { icon: Zap, title: "Fast Performance", desc: "Optimized for speed & SEO" },
            { icon: Smartphone, title: "Mobile First", desc: "Built for the modern user" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-xl p-6 text-center hover:border-primary/20 transition-colors duration-200">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
