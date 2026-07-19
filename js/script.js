/*=========================================
            ATYAF SOCIAL
=========================================*/

const gallery = document.querySelector(".gallery-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const images = document.querySelectorAll(".gallery-track img");

let imageWidth = images[0].offsetWidth + 22;

/*=========================================
            NEXT
=========================================*/

nextBtn.addEventListener("click", () => {

gallery.scrollBy({

left: imageWidth,

behavior: "smooth"

});

});

/*=========================================
            PREVIOUS
=========================================*/

prevBtn.addEventListener("click", () => {

gallery.scrollBy({

left: -imageWidth,

behavior: "smooth"

});

});

/*=========================================
        AUTO SLIDE
=========================================*/

setInterval(()=>{

if(gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth-5){

gallery.scrollTo({

left:0,

behavior:"smooth"

});

}else{

gallery.scrollBy({

left:imageWidth,

behavior:"smooth"

});

}

},4000);

/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals=document.querySelectorAll(

".card,.contact-box,.gallery-section,footer"

);

function reveal(){

const windowHeight=window.innerHeight;

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<windowHeight-120){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

}

reveals.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition="1s";

});

window.addEventListener("scroll",reveal);

reveal();

/*=========================================
        PARALLAX
=========================================*/

window.addEventListener("scroll",()=>{

const value=window.scrollY;

document.querySelector(".background-circle.one").style.transform=`translateY(${value*0.08}px)`;

document.querySelector(".background-circle.two").style.transform=`translateY(-${value*0.06}px)`;

document.querySelector(".background-circle.three").style.transform=`translateY(${value*0.04}px)`;

});

/*=========================================
        CARD HOVER
=========================================*/

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,#fff,#fbfbfb)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#fff";

});

});

/*=========================================
            TOUCH SLIDER
=========================================*/

let startX=0;

let scrollLeft=0;

let isDown=false;

gallery.addEventListener("mousedown",(e)=>{

isDown=true;

startX=e.pageX-gallery.offsetLeft;

scrollLeft=gallery.scrollLeft;

});

gallery.addEventListener("mouseleave",()=>{

isDown=false;

});

gallery.addEventListener("mouseup",()=>{

isDown=false;

});

gallery.addEventListener("mousemove",(e)=>{

if(!isDown)return;

e.preventDefault();

const x=e.pageX-gallery.offsetLeft;

const walk=(x-startX)*2;

gallery.scrollLeft=scrollLeft-walk;

});

/*=========================================
            MOBILE TOUCH
=========================================*/

let touchStart=0;

gallery.addEventListener("touchstart",(e)=>{

touchStart=e.touches[0].clientX;

});

gallery.addEventListener("touchmove",(e)=>{

let move=e.touches[0].clientX;

gallery.scrollLeft+=(touchStart-move);

touchStart=move;

});

/*=========================================
        RESIZE
=========================================*/

window.addEventListener("resize",()=>{

imageWidth=images[0].offsetWidth+22;

});

/*=========================================
            LOADED
=========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});
