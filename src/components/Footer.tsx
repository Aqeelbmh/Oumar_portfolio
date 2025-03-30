import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "bmhaqeel995@gmail.com";
  const linkedinUrl = "http://www.linkedin.com/in/mohamed-hakeel-67323721b";

  return (
    <footer className="bg-secondary/50 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Developed by Aqeel | All rights reserved
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              <a 
                href={`mailto:${email}`}
                className="hover:text-primary transition-colors"
              >
                {email}
              </a>
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
