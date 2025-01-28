const { btnAvancar, cartaoAtual, cartoes, escondercartaoselecionado } = require(".");

//passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    //passo 4 - buscar o cartão que esta selecionado e esconder
    escondercartaoselecionado();

    //passo 3 - fazer aparecer o próximo cartão da lista
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});
