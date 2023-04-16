const homeBlock = document.querySelector('.home-block');
const aboutBlock = document.querySelector('.about-block');
const workBlock = document.querySelector('.work-block');
const projectBlock = document.querySelector('.project-block');
const contactBlock = document.querySelector('.contact-block');

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

}
