import { Github, Linkedin, Mail, Facebook } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shohancs", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/shohancs", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Mail, href: "mailto:shohancs.dev@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 <span className="text-foreground font-medium">Shohanur Rahman Shohan</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
