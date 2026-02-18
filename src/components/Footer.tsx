import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="EtecApp Media" className="h-6 w-auto opacity-60" />
          <span className="font-display text-xs tracking-wider text-muted-foreground">
            © 2026 EtecApp Media. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6">
          {["#about", "#projects", "#services", "#contact"].map((href) => (
            <button
              key={href}
              onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
              className="font-body text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {href.replace("#", "")}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
