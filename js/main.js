

//transloter

  //queryselectors
const mainElement = document.querySelector('.main');
const mainEnglish = document.querySelector('.main-english');
const btnDutch = document.querySelector('.btn-dutch');
const btnEnglish = document.querySelector('.btn-english');

//function toggle between class hidden for dutch version
function functionDutch(){
  mainElement.classList.toggle('hidden');
  mainEnglish.classList.toggle('hidden')
}

//function toggle between class hidden for english version
function functionEnglish(){
  mainEnglish.classList.toggle('hidden')
  mainElement.classList.toggle('hidden')
}

//adds function to addeventlisteners
btnDutch.addEventListener('click', functionDutch);
btnEnglish.addEventListener('click', functionEnglish);