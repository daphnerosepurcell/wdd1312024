document.addEventListener('DOMContentLoaded', () => {
    const feedbackElement = document.getElementById('form-feedback');
    const formElement = document.getElementById('contact-form');

    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        const userName = formElement.name.value;
        feedbackElement.innerHTML = `Thank you ${userName}, I will get back to you in 3-5 business days.`;
        feedbackElement.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
});
