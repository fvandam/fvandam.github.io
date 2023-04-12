(function() {
    // Variables
    let $curve = document.querySelector(".curve");
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