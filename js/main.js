(function() {
    // Variables
    let $curve = document.getElementById("curve");
    let last_known_scroll_position = 0;
    let defaultCurveValue = 350;
    let curveRate = 3;
    let ticking = false;
    let curveValue;
  
    // Handle the functionality
    function scrollEvent(scrollPos) {
      if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
        curveValue = defaultCurveValue - parseFloat(scrollPos / curveRate);
        $curve.setAttribute(
          "d",
          "M 800 300 Q 400 " + curveValue + " 0 300 L 0 0 L 800 0 L 800 300 Z"
        );
      }
    }
  
    // Scroll Listener
    window.addEventListener("scroll", function(e) {
      last_known_scroll_position = window.scrollY;
  
      if (!ticking) {
        window.requestAnimationFrame(function() {
          scrollEvent(last_known_scroll_position);
          ticking = false;
        });
      }
  
      ticking = true;
    });
  })();

  //transloter

  //queryselectors
const mainElement = document.querySelector('.main');
const englishBlock = document.querySelector('.english-version');
const englishContact = document.querySelector('.english-contact');
const btnDutch = document.querySelector('.btn-dutch');
const btnEnglish = document.querySelector('.btn-english');

function functionDutch(){
  mainElement.classList.remove('hidden');
  englishBlock.classList.add('hidden');
  englishContact.classList.add('hidden');
}

function functionEnglish(){
  console.log('engels');
  englishBlock.classList.remove('hidden');
  englishContact.classList.remove('hidden');
}

btnDutch.addEventListener('click', functionDutch);
btnEnglish.addEventListener('click', functionEnglish);