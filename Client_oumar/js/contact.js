// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const formResponse = document.querySelector('.form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            
            // Validate form data
            if (!validateForm(formData)) {
                return;
            }

            try {
                // Show loading state
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitButton.disabled = true;

                // Submit the form to Formspree
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Show success message
                    showResponse('Thank you! Your message has been sent successfully.', true);
                    contactForm.reset();
                } else {
                    // Show error message
                    showResponse('Sorry, there was an error sending your message. Please try again.', false);
                }

                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;

            } catch (error) {
                console.error('Error:', error);
                showResponse('Sorry, there was an error sending your message. Please try again.', false);
                
                // Reset button
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }

    // Form validation
    function validateForm(formData) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!formData.get('name') || formData.get('name').trim().length < 2) {
            showResponse('Please enter a valid name', false);
            return false;
        }
        
        if (!formData.get('email') || !emailRegex.test(formData.get('email'))) {
            showResponse('Please enter a valid email address', false);
            return false;
        }
        
        if (!formData.get('message') || formData.get('message').trim().length < 10) {
            showResponse('Please enter a message (minimum 10 characters)', false);
            return false;
        }
        
        return true;
    }

    // Show response message
    function showResponse(message, isSuccess) {
        if (formResponse) {
            formResponse.innerHTML = `<div class="${isSuccess ? 'success' : 'error'}">${message}</div>`;
            formResponse.style.display = 'block';
            
            // Scroll to response
            formResponse.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Hide message after 5 seconds
            setTimeout(() => {
                formResponse.style.display = 'none';
            }, 5000);
        }
    }
}); 