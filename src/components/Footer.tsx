/**
 * Footer Component
 * Simple footer with social links and copyright
 */

import { Facebook, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sunteang", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sunteangserey/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/sunt.teang", label: "Facebook" },
    { icon: Mail, href: "mailto:sereysunteang@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Serey Sunteang. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
