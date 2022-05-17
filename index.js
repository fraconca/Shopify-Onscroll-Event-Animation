// Import stylesheets
import './style.css';

// Write Javascript code!
window.onscroll = function () {
  minhaFuncao();
  contaScroll();
};

function minhaFuncao() {
  if (document.documentElement.scrollTop <= 50) {
    document.getElementById('caixaNaveia').className = 'caixa45';
  } else if (document.documentElement.scrollTop > 51) {
    document.getElementById('caixaNaveia').className = 'caixa0';

  } else if (document.documentElement.scrollTop > 75) {
    document.getElementById('caixaNaveia').className = 'parado';
  } else {
    document.getElementById('caixaNaveia').className = '';
  }
}

function contaScroll() {
  let altura = document.documentElement.scrollTop;
  console.log(altura);
  console.log(altura += 1);
}
