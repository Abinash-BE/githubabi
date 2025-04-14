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

 const words = ["Software developer", "Frontent-Developer", "Web Designer", "App Developer", "UI/UX Designer"];
 let i= 0;
 let j= 0;
 let currentWord = '';
 let isDeleting = false;

 function type() {
    currentWord = words[i];
    let displayText = isDeleting
    ? currentWord.substring(0, j--)
    : currentWord.substring(0, j++);

    document.querySelector(".auto-type").textContent = displayText;

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    }else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i+1)% words.length;
        setTimeout(type, 500);
    }else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
 }

 type();