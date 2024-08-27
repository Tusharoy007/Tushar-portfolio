// JavaScript for animated text
const text = document.querySelector('.animated-text');
const words = ['Front-End Developer', 'Designer', 'Coder'];
let wordIndex = 0;

function changeText() {
    text.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}
const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form inputs
    if (!name || !email || !message) {
        document.getElementById('responseMessage').innerText = 'Please fill out all fields.';
        return;
    }

    // Simulate form submission process
    document.getElementById('responseMessage').innerText = 'Sending your message...';

    // Simulate an AJAX request (you can replace this with actual email sending logic)
    setTimeout(function() {
        document.getElementById('responseMessage').innerText = 'Thank you! Your message has been sent.';
        document.getElementById('contactForm').reset();
    }, 2000);



