let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
sections.forEach(sec => {
let top = window.scrolly;
let offset = sec.offsetTop-150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');
if(top >= offset && top < offset + height){
navLinks.forEach(links => {
links.classList.remove('active');
document.querySelector('header nav a [href*="' + id + '"]').classList.add
('active')
})
}
})
}
menuIcon.onclick= () => {
menuIcon.classList.toggle('bx-bx');
navbar.classList.toggle('active');
}

src="https://cdn.emailjs.com/dist/email.min.js"

(function(){
    emailjs.init("99mk0JKG8Bj0Xurmv");
})();

document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();

    emailjs.sendForm('service_sconzzb', 'template_h9t44xd', this)
    .then(()=> {
        alert('message sent successfully!');
        this.reset();
    }, (error) => {
        console.error('FAILED...', error);
        alert('Oops! Something went wrong.');
    });
});