import { Palette, Layout, RefreshCw, Gauge } from "lucide-react";

const services = [
  { icon: Palette, title: "Web Design", desc: "Stunning, custom designs that reflect your brand identity." },
  { icon: Layout, title: "Front-End Development", desc: "Responsive, fast & interactive websites built with modern tech." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Transform your outdated site into a modern digital experience." },
  { icon: Gauge, title: "Performance Optimization", desc: "Speed up your site for better UX and search rankings." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 tracking-wider">
          Our <span className="text-primary glow-text">Services</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12 opacity-60" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass rounded-xl p-8 group hover:glow-border transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold tracking-wider mb-3">{title}</h3>
              <p className="font-body text-muted-foreground tracking-wide leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
