// // Função para alterar o status do jogo
// function alterarStatus(id) {
//     const gameItem = document.getElementById(`game-${id}`);
//     const button = gameItem.querySelector('.dashboard__item__button');
    
//     if (button.textContent === 'Alugar') {
//         button.textContent = 'Devolver';
//         button.classList.remove('dashboard__item__button--blue');
//         button.classList.add('dashboard__item__button--gray');
//         gameItem.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');
//     } else if (button.textContent === 'Devolver') {
//         button.textContent = 'Alugar';
//         button.classList.remove('dashboard__item__button--gray');
//         button.classList.add('dashboard__item__button--blue');
//         gameItem.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');
//     }
// }

//###### SOLUÇÃO 1 ACIMA E ABAIXO SOLUÇÃO 2 #######

//Função chamada alterarStatus, no arquivo e declação das variáveis dos botões 

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
