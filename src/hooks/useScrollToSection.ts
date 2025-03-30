import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Initial scroll
    handleScroll();

    // Handle hash changes
    window.addEventListener('hashchange', handleScroll);
    
    // Handle manual scrolling
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          const id = section.getAttribute('id');
          if (id && window.location.hash !== `#${id}`) {
            window.location.hash = `#${id}`;
          }
        }
      });
    });

    return () => {
      window.removeEventListener('hashchange', handleScroll);
    };
  }, [location]);
}; 