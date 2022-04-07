const contactForm = document.getElementById('user-form');
const errorMessage = document.getElementById('error_message');
const errMsg = 'Message not sent! Please write your email in small letters';

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  email.trim();
  if (email !== email.toLowerCase()) {
    errorMessage.textContent = errMsg;
  } else {
    contactForm.submit();
    localStorage.clear();
    contactForm.reset();
  }
});