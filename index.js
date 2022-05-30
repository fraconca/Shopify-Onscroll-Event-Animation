// Import stylesheets
import './style.css';

// Check Viewport Width
if (window.innerWidth >= 900) {
  var deviceScreenPC1920 = window.innerWidth;
} else {
  var deviceScreenMobile = window.innerWidth;
}
if (deviceScreenPC1920) {
  console.log('%cNAVEIA COMPUTER INIT', 'color: yellow; font-weight: bold');
  console.log(
    '%c### 💻 Laptop / PC (1920)',
    'color: yellow; font-weight: bold'
  );
  console.log('### View Port Width: ' + window.innerWidth + 'px');
  console.log('### View Port Height: ' + window.innerHeight + 'px');
  console.log('### Função: animaNaveia1');
  window.onscroll = function () {
    naveiaAnimaPC1();
    contaScroll();
  };
}
if (deviceScreenMobile) {
  console.log('%cNAVEIA MOBILE INIT', 'color: yellowgreen; font-weight: bold');
  console.log('%c### 📱 Mobile', 'color: yellowgreen; font-weight: bold');
  console.log('### View Port Width: ' + window.innerWidth + 'px');
  console.log('### View Port Height: ' + window.innerHeight + 'px');
  console.log('### Função: animaNaveia2');
  window.onscroll = function () {
    naveiaAnimaPC2();
    contaScroll();
  };
}

// Rotate
scrollRotate1(-30);

// Func Anima PC 1 💻
function naveiaAnimaPC1() {
  if (window.innerWidth >= 600 && document.documentElement.scrollTop < 100) {
    scrollRotate1(-30);
  } else if (
    window.innerWidth >= 600 &&
    document.documentElement.scrollTop < 1000
  ) {
    scrollRotate1(-30);
  } else if (document.documentElement.scrollTop < 2000) {
    scrollRotate1(-30);
  } else {
    document.getElementById('divCaixaNaveia').className =
      'posCaixaParada animaFlutua';
    document.getElementById('gridIco').className = 'gridIcoReverse animaFlutua';
    document.getElementById('gridIco').className = 'gridIcoReverse animaFlutua';
    console.log('FIM');
  }
}

// Func Anima PC 2 💻
function naveiaAnimaPC2() {
  if (window.innerWidth >= 600 && document.documentElement.scrollTop < 100) {
    // var prop = document.getElementById('caixaNaveia');
    // prop.className = 'bg01';
    scrollRotate1(-30);
  } else if (
    window.innerWidth >= 600 &&
    document.documentElement.scrollTop < 1000
  ) {
    // var prop = document.getElementById('caixaNaveia');
    // prop.className = 'bg01';
    scrollRotate1(-30);
  } else if (
    window.innerWidth >= 600 &&
    document.documentElement.scrollTop < 1900
  ) {
    // var prop = document.getElementById('caixaNaveia');
    // prop.className = 'bg02';
    // scrollRotate1(-30);
    // } else if (document.documentElement.scrollTop < 2000) {
    //   // var prop = document.getElementById('caixaNaveia');
    //   // prop.className = 'bg03';
    //   scrollRotate1(-30);
  } else {
    document.getElementById('divCaixaNaveia').className =
      'posCaixaParada animaFlutua';
    console.log('FIM');
  }

  if (window.innerWidth <= 599 && document.documentElement.scrollTop < 100) {
    scrollRotate1(-30);
  } else if (
    window.innerWidth <= 599 &&
    document.documentElement.scrollTop < 1000
  ) {
    scrollRotate1(-30);
  } else if (
    window.innerWidth <= 599 &&
    document.documentElement.scrollTop < 1900
  ) {
    scrollRotate1(-30);
  }
}

// FUNCAO ROTACIONAR 1 / LAPTOP + PC
function scrollRotate1(valRotaciona) {
  let valor = valRotaciona;
  let rotacionar = valor + window.pageYOffset / 60;
  let image = document.getElementById('caixaNaveia');
  image.style.transform = 'translateY(45px) rotate(' + rotacionar + 'deg)';
}

// FUNCAO ROTACIONAR 1 / LAPTOP + PC
function scrollRotate1(valRotaciona) {
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
