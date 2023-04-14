//queryselectors
const indexDutch = document.querySelector('.dutch-version');
const indexEnglish = document.querySelector('.english-version');
const dutchBtn = document.querySelector('.translate-dutch');
const englishBtn = document.querySelector('.translate-english');

//translate toggle function

function translateDutch(){
    indexDutch.classList.toggle('hidden');
    indexEnglish.classList.toggle('hidden');
}

//event listener
dutchBtn.addEventListener('click', translateDutch);
englishBtn.addEventListener('click', translateDutch);