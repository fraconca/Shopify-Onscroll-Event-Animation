// Import stylesheets
import './style.css';

// Write Javascript code!
window.onscroll = function () {
  minhaFuncao();
  contaScroll();
};

function minhaFuncao() {
  if (document.documentElement.scrollTop < 100) {
    document.getElementById('caixaNaveia').className = 'caixa45';
  } else if (document.documentElement.scrollTop > 101) {
    document.getElementById('caixaNaveia').className = 'caixa0';
  } 
  else {
    document.getElementById('caixaNaveia').className = '';
  }
}


let x = 0;
function contaScroll() {
  // document.getElementById("demo").innerHTML = x += 1;
  // console.log(screenY);
}
