//queryselectors
const indexDutch = document.querySelector('.dutch-version');
const indexEnglish = document.querySelector('.english-version');
const dutchBtn = document.querySelector('.translate-dutch');
const englishBtn = document.querySelector('.translate-english');

const aboutEnglish = document.querySelector('.about-english');
const aboutDutch = document.querySelector('.about-dutch');
const translateAboutE = document.querySelector('.translate-aboutE');
const translateAboutD = document.querySelector('.translate-aboutD');

//translate toggle function

function translateDutchIndex(){
    indexDutch.classList.toggle('hidden');
    indexEnglish.classList.toggle('hidden');

    aboutEnglish.classList.toggle('hidden');
    aboutDutch.classList.toggle('hidden');
}

//event listener
dutchBtn.addEventListener('click', translateDutchIndex);
englishBtn.addEventListener('click', translateDutchIndex);