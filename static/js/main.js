// ===============================
// ELEMENT
// ===============================

const startBtn = document.getElementById("startBtn");
const opening = document.getElementById("opening");
const slideshow = document.getElementById("slideshow");
const slideImage = document.getElementById("slideImage");
const music = document.getElementById("music");

const letterSection = document.getElementById("letterSection");
const typingText = document.getElementById("typingText");
const nextBtn = document.getElementById("nextBtn");

// ===============================
// FOTO
// ===============================

const photos = [
    "/static/img/photo1.jpeg",
    "/static/img/photo2.jpeg",
    "/static/img/photo3.jpeg",
    "/static/img/photo4.jpeg",
]
let photoIndex = 0;

// ===============================
// SURAT
// ===============================

let currentLetter = 1;

const letterLeft=`

Hai cantik... ❤️

Mungkin website ini terlihat sederhana.

Tapi setiap halaman yang kamu baca,
aku buat dengan tulus.

Sebenarnya ada sesuatu
yang sudah lama ingin
aku sampaikan.

Kita memang belum sering bertemu.

Bahkan mungkin selama ini,
aku hanya menjadi seseorang
yang melihatmu dari jauh.

Sesekali melihatmu lewat Instagram,
atau ketika tanpa sengaja
kita berada di tempat yang sama.

`;

const letterRight=`

Aku tidak pernah berani mendekat.

Aku hanya bisa diam,
sambil berharap suatu hari nanti
punya keberanian
untuk mengenalmu lebih dekat.

Entah kenapa,
rasa kagum itu
tidak pernah hilang.

Justru semakin membuatku yakin,
bahwa aku ingin jujur
tentang apa yang aku rasakan.

Dan hari ini...

Aku memilih untuk berani.

❤️

`;


// ===============================
// TOMBOL MULAI
// ===============================

startBtn.addEventListener("click", function () {

    music.play();

    opening.style.opacity = "0";

    setTimeout(() => {

        opening.style.display = "none";

        slideshow.style.display = "flex";

        startSlide();

    }, 800);

});

// ===============================
// SLIDESHOW
// ===============================

function startSlide() {

    slideImage.src = photos[photoIndex];

    photoIndex++;

    if (photoIndex < photos.length) {

        setTimeout(startSlide, 3000);

    } else {

        setTimeout(showLetter, 3000);

    }

}

// ===============================
// SURAT
// ===============================

function showLetter(){

    slideshow.style.display="none";

    letterSection.style.display="flex";

    typingLeft.innerHTML="";

    typingRight.innerHTML="";

    nextBtn.style.display="none";

    typeLeft();

}

let i = 0;

let leftIndex=0;
let rightIndex=0;

function typeLeft(){

    if(leftIndex<letterLeft.length){

        typingLeft.innerHTML+=letterLeft.charAt(leftIndex);

        leftIndex++;

        setTimeout(typeLeft,35);

    }else{

        typeRight();

    }

}

function typeRight(){

    if(rightIndex<letterRight.length){

        typingRight.innerHTML+=letterRight.charAt(rightIndex);

        rightIndex++;

        setTimeout(typeRight,35);

    }else{

        nextBtn.style.display="block";

    }

}

// ===============================
// NEXT
// ===============================

nextBtn.onclick = () => {

    if(currentLetter == 1){

        currentLetter = 2;

        typingText.innerHTML = "";

        nextBtn.style.display = "none";

        i = 0;

        typeWriter(letter2);

    }else{

        letterSection.style.display = "none";

        countdownSection.style.display = "flex";

        startCountdown();

    }

}

//=========================
// COUNTDOWN
//=========================

const countdownSection=document.getElementById("countdownSection");

const countNumber=document.getElementById("countNumber");

const questionSection=document.getElementById("questionSection");

const yesBtn=document.getElementById("yesBtn");

const noBtn=document.getElementById("noBtn");

nextBtn.onclick=()=>{

letterSection.style.display="none";

countdownSection.style.display="flex";

startCountdown();

}

function startCountdown(){

let number=3;

countNumber.innerHTML=number;

const timer=setInterval(()=>{

number--;

if(number>0){

countNumber.innerHTML=number;

}

else{

clearInterval(timer);

countdownSection.style.display="none";

questionSection.style.display="flex";

}

},1000);

}

//=========================
// TOMBOL NGGAK LARI
//=========================

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*300-150;

const y=Math.random()*300-150;

noBtn.style.transform=`translate(${x}px,${y}px)`;

});

//=========================
// IYA
//=========================

yesBtn.onclick = () => {

    questionSection.style.display = "none";

    endingSection.style.display = "flex";

    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    createHearts();

};

//=========================
// ENDING
//=========================

const endingSection=document.getElementById("endingSection");

const heartsContainer=document.getElementById("heartsContainer");

yesBtn.onclick=()=>{

questionSection.style.display="none";

endingSection.style.display="flex";

createHearts();

}

//=========================
// HEART ANIMATION
//=========================

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*3+3)+"s";

heart.style.fontSize=(Math.random()*25+20)+"px";

heartsContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},250);

}