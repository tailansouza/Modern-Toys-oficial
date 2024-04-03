var cartoes = document.querySelectorAll('.produtos-cads .cards-4, .produtos-cads .cards-5, .produtos-cads .cards-6');
var btnVerMais = document.querySelector('#btn-ver-mais');

var cartoesExibidos = false;

function exibirCartoes() {
    if (!cartoesExibidos) {
        cartoes.forEach(function(cartao) {
            cartao.style.display = 'block';
        });
        btnVerMais.innerText = 'Ver Menos';
        cartoesExibidos = true;
    } else {
        cartoes.forEach(function(cartao) {
            cartao.style.display = 'none';
        });
        btnVerMais.innerText = 'Ver Mais';
        cartoesExibidos = false;
    }
}

btnVerMais.addEventListener('click', exibirCartoes);
