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
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
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
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const responseElement = document.getElementById('formResponse');
        
        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                responseElement.innerHTML = '<p class="success">Thank you! Your message has been sent successfully.</p>';
                contactForm.reset();
            } else {
                responseElement.innerHTML = '<p class="error">Oops! Something went wrong. Please try again later.</p>';
            }
        } catch (error) {
            console.error('Form submission error:', error);
            responseElement.innerHTML = '<p class="error">Oops! Something went wrong. Please try again later.</p>';
        }
    });
}

// Skill Bar Animation
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLevel = entry.target.querySelector('.skill-level');
            if (skillLevel) {
                const level = skillLevel.dataset.level;
                skillLevel.style.setProperty('--skill-level', `${level}%`);
            }
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
            link.href = 'oumar_cv.pdf';
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