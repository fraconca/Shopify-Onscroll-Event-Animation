// Import stylesheets
import './style.css';

// Check Viewport Width
if (window.innerWidth >= 900) {
  var deviceScreenPC = window.innerWidth;
} else {
  var deviceScreenMobile = window.innerWidth;
}

if (deviceScreenPC) {
  console.log('%c ### 💻 Laptop / PC', 'color: yellow; font-weight: bold');
  console.warn('### Start View Port Width: ' + window.innerWidth + 'px');
  console.warn('### Start View Port Height: ' + window.innerHeight + 'px');
  console.log('### ACTIVATE FUNC: animaNaveia1');
  window.onscroll = function () {
    naveiaAnima1();
    contaScroll();
  };
}
if (deviceScreenMobile) {
  console.log('%c ### 📱 Mobile', 'color: yellowgreen; font-weight: bold');
  console.warn('### Start View Port Width: ' + window.innerWidth + 'px');
  console.warn('### Start View Port Height: ' + window.innerHeight + 'px');
  console.log('### ACTIVATE FUNC: animaNaveia2');
  window.onscroll = function () {
    naveiaAnima2();
    contaScroll();
  };
}

// FUNCAO SELECIONAR ELEMENTOS
// Iniciar Rotate -25 graus
scrollRotate(-30);

function animaNaveia1() {
  if (window.innerWidth >= 600 && document.documentElement.scrollTop < 100) {
    // var prop = document.getElementById('caixaNaveia');
    // prop.className = 'bg01';
    scrollRotate(-30);
  } else if (
    window.innerWidth >= 600 &&
    document.documentElement.scrollTop < 1000
  ) {
    // var prop = document.getElementById('caixaNaveia');
    // prop.className = 'bg01';
    scrollRotate(-30);
  } else if (
    window.innerWidth >= 600 &&
    document.documentElement.scrollTop < 1900
  ) {
    // var prop = document.getElementById('caixaNaveia');
    // prop.className = 'bg02';
    // scrollRotate(-30);
    // } else if (document.documentElement.scrollTop < 2000) {
    //   // var prop = document.getElementById('caixaNaveia');
    //   // prop.className = 'bg03';
    //   scrollRotate(-30);
  } else {
    document.getElementById('divCaixaNaveia').className =
      'posCaixaParada animaFlutua';
    console.log('FIM');
  }

  if (window.innerWidth <= 599 && document.documentElement.scrollTop < 100) {
    scrollRotate(-30);
  } else if (
    window.innerWidth <= 599 &&
    document.documentElement.scrollTop < 1000
  ) {
    scrollRotate(-30);
  } else if (
    window.innerWidth <= 599 &&
    document.documentElement.scrollTop < 1900
  ) {
    scrollRotate(-30);
  }

  // if (window.innerHeight <= 991) {
  //   // load mobile script
  //   // loadScriptFile('https://files.finsweet.com/webflowhacks/hack27-mobile.js');
  //   console.log('ACIONADO');
  // } else {
  //   // viewportWidth width > 991
  //   // load desktop script
  //   // loadScriptFile('https://files.finsweet.com/webflowhacks/hack27-desktop.js');
  //   console.log('TROCA ACIONAMENTO');
  // }
}

// FUNCAO ROTACIONAR
function scrollRotate(valRotaciona) {
  let valor = valRotaciona;
  let rotacionar = valor + window.pageYOffset / 60;
  let image = document.getElementById('caixaNaveia');
  image.style.transform = 'translateY(45px) rotate(' + rotacionar + 'deg)';
}

// FUNCAO CALCULA SCROLL
function contaScroll() {
  var altura = document.documentElement.scrollTop;
  console.log(altura);
}

// // var caixaA = document.getElementById("roda1"), caixaB = document.getElementById("roda2");
// var caixaA = document.getElementById("roda1");

// window.addEventListener("scroll", function() {
//     caixaA.style.transform = "rotate("+window.pageYOffset+"deg)";
//     // caixaB.style.transform = "rotate(-"+window.pageYOffset+"deg)";
// });
