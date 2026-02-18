import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CS2 Tools",
    description: "A utility toolkit for Counter-Strike 2 players with advanced features and clean UI.",
    url: "https://cs2tools.netlify.app",
    tags: ["React", "Netlify", "Game Tools"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 tracking-wider">
          Our <span className="text-primary glow-text">Projects</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12 opacity-60" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-8 group hover:glow-border transition-all duration-300 block"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-lg font-bold tracking-wider text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>
              <p className="font-body text-muted-foreground mb-6 tracking-wide leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-display tracking-wider bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
