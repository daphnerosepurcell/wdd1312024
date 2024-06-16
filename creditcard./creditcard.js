const feedbackElement = document.getElementById('feedback');
const formElement = document.forms[0];
formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    feedbackElement.innerHTML = 'Thank you '+ formElement.user_name.value +', I will get back to you in 3-5 business days.';
    feedbackElement.style.display = "block";
    document.body.classList.toggle('moveDown');
});
