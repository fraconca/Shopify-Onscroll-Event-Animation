// Import stylesheets
import './style.css';

// Check Viewport Width
if (window.innerWidth >= 1920) {
  var deviceScreenPC1920 = window.innerWidth;
} else if (window.innerWidth >= 1680) {
  var deviceScreenPC1680 = window.innerWidth;
} else if (window.innerWidth >= 1440) {
  var deviceScreenPC1440 = window.innerWidth;
} else {
  var deviceScreenMobile = window.innerWidth;
}

// Check Device Screen Mode
if (deviceScreenPC1920) {
  console.log(
    '%cNAVEIA',
    'color: limegreen; background-color: black; font-weight: bold'
  );
  console.log(
    '%c### 🖥️ Desktop Computer (1920)',
    'color: limegreen; background-color: black; font-weight: bold'
  );
  console.log('### View Port Width: ' + window.innerWidth + 'px');
  console.log('### View Port Height: ' + window.innerHeight + 'px');
  console.log('### Função: animaNaveiaPC1');
  window.onscroll = function () {
    naveiaAnimaPC1();
    contaScroll();
  };
}
if (deviceScreenPC1680) {
  console.log(
    '%cNAVEIA',
    'color: yellow; background-color: black; font-weight: bold'
  );
  console.log(
    '%c### 🖥️ Desktop Computer (1680)',
    'color: yellow; background-color: black; font-weight: bold'
  );
  console.log('### View Port Width: ' + window.innerWidth + 'px');
  console.log('### View Port Height: ' + window.innerHeight + 'px');
  console.log('### Função: animaNaveiaPC2');
  window.onscroll = function () {
    naveiaAnimaPC2();
    contaScroll();
  };
}
if (deviceScreenPC1440) {
  console.log(
    '%cNAVEIA',
    'color: black; background-color: yellowgreen; font-weight: bold'
  );
  console.log(
    '%c### 💻 Laptop Personal Computer (1440)',
    'color: yellowgreen; background-color: black; font-weight: bold'
  );
  console.log('### View Port Width: ' + window.innerWidth + 'px');
  console.log('### View Port Height: ' + window.innerHeight + 'px');
  console.log('### Função: animaNaveiaPC3');
  window.onscroll = function () {
    naveiaAnimaPC3();
    contaScroll();
  };
}
if (deviceScreenMobile) {
  console.log('%cNAVEIA', 'color: yellowgreen; font-weight: bold');
  console.log('%c### 📱 Mobile', 'color: yellowgreen; font-weight: bold');
  console.log('### View Port Width: ' + window.innerWidth + 'px');
  console.log('### View Port Height: ' + window.innerHeight + 'px');
  console.log('### Função: animaNaveiaPC2');
  window.onscroll = function () {
    naveiaAnimaPC3();
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
  } else if (document.documentElement.scrollTop < 1850) {
    scrollRotate1(-30);
  } else {
    document.getElementById('divCaixaNaveia').className = 'posCaixaParada';
    document.getElementById('gridIco').className = 'gridIcoReverse animaFlutua';
    scrollRotate1(-30);
    console.log('FIM');
  }
}

// Func Anima PC 2 💻
function naveiaAnimaPC2() {
  if (window.innerWidth >= 600 && document.documentElement.scrollTop < 100) {
    scrollRotate1(-30);
  } else if (
    window.innerWidth >= 600 &&
    document.documentElement.scrollTop < 1000
  ) {
    scrollRotate1(-30);
  } else if (document.documentElement.scrollTop < 1680) {
    scrollRotate1(-30);
  } else {
    document.getElementById('divCaixaNaveia').className = 'posCaixaParada';
    document.getElementById('gridIco').className = 'gridIcoReverse animaFlutua';
    scrollRotate1(-30);
    console.log('FIM');
  }
}

// Func Anima PC 3 💻
function naveiaAnimaPC3() {
  if (window.innerWidth >= 600 && document.documentElement.scrollTop < 100) {
    scrollRotate1(-30);
  } else if (
    window.innerWidth >= 600 &&
    document.documentElement.scrollTop < 1000
  ) {
    scrollRotate1(-30);
  } else if (document.documentElement.scrollTop < 1630) {
    scrollRotate1(-30);
  } else {
    document.getElementById('divCaixaNaveia').className = 'posCaixaParada';
    document.getElementById('gridIco').className = 'gridIcoReverse animaFlutua';
    scrollRotate1(-30);
    console.log('FIM');
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
