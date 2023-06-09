const homeBlock = document.querySelector('.home-block');
const aboutBlock = document.querySelector('.about-block');
const workBlock = document.querySelector('.work-block');
const projectBlock = document.querySelector('.project-block');
const portfolioBlock = document.querySelector('.portfolio-block')
const contactBlock = document.querySelector('.contact-block');

const dutchBtn = document.querySelector('.translate-dutch');
const englishBtn = document.querySelector('.translate-english');

const dutchVersion = document.querySelector('.dutch-version');
const englishVersion = document.querySelector('.english-version');

let page = homeBlock;

if(aboutBlock){
    page = aboutBlock;
}
else if(workBlock){
    page = workBlock;
}
else if(projectBlock){
    page = projectBlock;
}
else if(contactBlock){
    page = contactBlock
}

function translatePage(){
    if(page && (homeBlock || aboutBlock || workBlock || projectBlock || contactBlock)){
        dutchVersion.classList.toggle('hidden');
        englishVersion.classList.toggle('hidden');
    }
}

dutchBtn.addEventListener('click', translatePage);
englishBtn.addEventListener('click', translatePage);

