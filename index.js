// Import stylesheets
import './style.css';

// CHAMAR FUNÇÕES ONSCROLL
window.onscroll = function () {
  minhaFuncao();
  contaScroll();
  // scrollRotate();
};

// FUNCAO SELECIONAR ELEMENTOS
// Iniciar Rotate -25 graus
scrollRotate(-30);
function minhaFuncao() {
  if (document.documentElement.scrollTop < 100) {
   
    var prop = document.getElementById('caixaNaveia');
    prop.className = 'bg01';
    scrollRotate(-30);

  } else if (document.documentElement.scrollTop < 200) {
   
    var prop = document.getElementById('caixaNaveia');
    prop.className = 'bg01';
    scrollRotate(-30);

  } else if (document.documentElement.scrollTop < 1500) {
    
    var prop = document.getElementById('caixaNaveia');
    prop.className = 'bg02';
    scrollRotate(-30);

  } else if (document.documentElement.scrollTop < 2000) {
    
    var prop = document.getElementById('caixaNaveia');
    prop.className = 'bg03';
    scrollRotate(-30);

    var posicao = document.getElementById('divCaixaNaveia');
    posicao.className = 'posCaixaParada';
    
  } else {
    // var prop = document.getElementById('caixaNaveia');
    console.log("FIM");
    // prop.className = 'bg04';
  }
}

// FUNCAO ROTACIONAR
function scrollRotate(valRotaciona) {
  let valor = valRotaciona;

  // console.log('ROTACIONAR: ' + valor);

  let rotacionar = valor + window.pageYOffset / 30;
  let image = document.getElementById('caixaNaveia');
  image.style.transform = 'translateY(45px) rotate(' + rotacionar + 'deg)';

  // image.style.animation ('flutuando 5s ease-in-out infinite');
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
