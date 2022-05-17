// Import stylesheets
import './style.css';

// Write Javascript code!
window.onscroll = function () {
  minhaFuncao();
  contaScroll();
};

function minhaFuncao() {
  if (document.documentElement.scrollTop < 100) {
    document.getElementById('caixaNaveia').className = 'animaFlutua bg01';
  } else if (document.documentElement.scrollTop < 200) {
    var prop = document.getElementById('caixaNaveia');
    prop.className = 'animaFlutua bg01';
  } else if (document.documentElement.scrollTop < 300) {
    document.getElementById('caixaNaveia').className = 'animaFlutua bg02';
  } else if (document.documentElement.scrollTop < 400) {
    document.getElementById('caixaNaveia').className = 'animaFlutua bg03';
  } else {
    document.getElementById('caixaNaveia').className = 'animaFlutua bg04';
  }
}

window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById('caixaNaveia');
  image.style.transform = 'rotate(' + window.pageYOffset / 4 + 'deg)';
}

function contaScroll() {
  let altura = document.documentElement.scrollTop;
  console.log(altura);
  // document.getElementById('caixaNaveia').style.transform = rotate(180);
  // console.log((altura += 100));
}

// // var caixaA = document.getElementById("roda1"), caixaB = document.getElementById("roda2");
// var caixaA = document.getElementById("roda1");

// window.addEventListener("scroll", function() {
//     caixaA.style.transform = "rotate("+window.pageYOffset+"deg)";
//     // caixaB.style.transform = "rotate(-"+window.pageYOffset+"deg)";
// });
