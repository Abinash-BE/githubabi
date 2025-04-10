let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
sections.forEach(sec => {
let top = window.scrollY;
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

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email: document.getElementById("(email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_sconzzb", "template_h9t44xd", parms).then(alert("Email sent!!"))
}