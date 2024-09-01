// Initialize EmailJS with your User ID
emailjs.init('4EFptvnCT8IBfzUws');

// Add event listener to your form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm('your_service_id', 'your_template_id', this)
        .then(function(response) {
            console.log('Success:', response);
            alert('Form submitted successfully');
        }, function(error) {
            console.error('Error:', error);
            alert('Error submitting form');
        });
});
