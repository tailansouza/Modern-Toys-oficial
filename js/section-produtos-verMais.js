// Selecionar os cartões e o botão "Ver Mais"
var cartoes = document.querySelectorAll('.produtos-cads .cards-4, .produtos-cads .cards-5, .produtos-cads .cards-6');
var btnVerMais = document.querySelector('#btn-ver-mais');


cartoes.forEach(function(cartao) {
    cartao.style.display = 'none';
});


var cartoesExibidos = false;

// Função para exibir e ocultar os cartões
function exibirCartoes() {
    if (!cartoesExibidos) {
        // Exibir os cartões
        cartoes.forEach(function(cartao) {
            cartao.style.display = 'block';
            cartao.style.margin = 'auto'; 
            cartao.style.display = 'flex'; // esta em teste
        });
        btnVerMais.innerText = 'Ver Menos';
        cartoesExibidos = true;
    } else {
        // Ocultar os cartões
        cartoes.forEach(function(cartao) {
            cartao.style.display = 'none';
        });
        btnVerMais.innerText = 'Ver Mais';
        cartoesExibidos = false;
    }
}


btnVerMais.addEventListener('click', exibirCartoes);
