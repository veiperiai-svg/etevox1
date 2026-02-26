import logo from "@/assets/logo.svg";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.footer
      className="border-t border-border py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="EtecApp Media" className="h-5 w-auto opacity-50" />
          <span className="text-xs text-muted-foreground">
            {t.footer.rights}
          </span>
        </div>
        <div className="flex gap-6">
          {links.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
