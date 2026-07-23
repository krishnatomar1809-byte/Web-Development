/*============================

Typing Animation

=============================*/

const text = [

"Frontend Developer",

"C++ Programmer",

"DSA Enthusiast",

"Problem Solver",

"Tech Learner"

];

let index = 0;

let charIndex = 0;

let currentText = "";

let isDeleting = false;

const typing = document.getElementById("typing");

function type(){

    currentText = text[index];

    if(!isDeleting){

        typing.textContent = currentText.substring(0,charIndex++);

        if(charIndex > currentText.length){

            isDeleting = true;

            setTimeout(type,1500);

            return;

        }

    }

    else{

        typing.textContent = currentText.substring(0,charIndex--);

        if(charIndex < 0){

            isDeleting = false;

            index++;

            if(index >= text.length){

                index = 0;

            }

        }

    }

    setTimeout(type,isDeleting ? 50 : 120);

}

type();



/*============================

Navbar Background

=============================*/

window.addEventListener("scroll",()=>{

const nav = document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="rgba(7,11,23,.92)";

}

else{

nav.style.background="rgba(255,255,255,.05)";

}

});



/*============================

Smooth Fade Animation

=============================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hidden = document.querySelectorAll(

".about,.skills,.education,.stats,.projects,.contact"

);

hidden.forEach((el)=>observer.observe(el));



/*============================

Active Menu

=============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop;

const height=section.clientHeight;

if(pageYOffset>=top-150){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});