// Import stylesheets
import './style.css';

// Write Javascript code!
window.onscroll = function () {
  minhaFuncao();
  contaScroll();
};

function minhaFuncao() {
  if (document.documentElement.scrollTop < 1) {
    document.getElementById('caixaNaveia').className = 'animaFlutua';
  } else if (document.documentElement.scrollTop < 50) {
    document.getElementById('caixaNaveia').className = 'animaFlutua';
  } else if (document.documentElement.scrollTop > 70) {
    document.getElementById('caixaNaveia').className = 'animaFlutua';
  } else if (document.documentElement.scrollTop > 100) {
    document.getElementById('caixaNaveia').className = 'animaFlutua';
  } else {
    document.getElementById('caixaNaveia').className = 'animaFlutua';
  }
}

function contaScroll() {
  let altura = document.documentElement.scrollTop;
  console.log(altura);
  console.log(altura += 1);
}
