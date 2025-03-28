
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "@/context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    // Initialize sections as visible instead of requiring intersection
    sections.forEach(section => {
      section.classList.add('animate-fade-in');
      section.style.opacity = '1'; // Make sections visible by default
    });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
