// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

function updateIcon(theme) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.about, .education, .experience, .languages, .certifications').forEach(section => {
    observer.observe(section);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Skill Bar Animation
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLevel = entry.target.querySelector('.skill-level');
            const level = skillLevel.dataset.level;
            skillLevel.style.setProperty('--skill-level', `${level}%`);
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

skillItems.forEach(item => skillObserver.observe(item));

// Scroll Indicator
const scrollIndicator = document.createElement('div');
scrollIndicator.className = 'scroll-indicator';
scrollIndicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
document.querySelector('.hero').appendChild(scrollIndicator);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CV Download Handler
const downloadCVBtn = document.getElementById('downloadCV');
if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        
        try {
            // Show loading state
            downloadCVBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            downloadCVBtn.disabled = true;
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = 'cv.pdf';
            link.download = 'Oumar_Bagayoko_CV.pdf';
            
            // Append to body, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Reset button state after a short delay
            setTimeout(() => {
                downloadCVBtn.innerHTML = 'Download CV';
                downloadCVBtn.disabled = false;
            }, 2000);
            
        } catch (error) {
            console.error('Error downloading CV:', error);
            // Show error state
            downloadCVBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Download Failed';
            downloadCVBtn.disabled = false;
            
            // Reset button after error
            setTimeout(() => {
                downloadCVBtn.innerHTML = 'Download CV';
            }, 2000);
        }
    });
} 