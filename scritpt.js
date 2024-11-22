// Selecionando elementos HTML
const inputClube = document.getElementById('nomeClube');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnListar = document.getElementById('btnListar');
const btnGerarTabela = document.getElementById('btnGerarTabela');
const listaClubes = document.getElementById('listaClubes');
const tabelaJogos = document.getElementById('tabelaJogos');

// Array para armazenar os nomes dos clubes
let clubes = [];

// Função para adicionar um clube à lista
function adicionarClube() {
    const nomeClube = inputClube.value;
    if (nomeClube.trim() !== '') {
        clubes.push(nomeClube);
        inputClube.value = '';
        listarClubes();
    } else {
        alert('Digite o nome do clube.');
    }
}

// Função para listar os clubes
function listarClubes() {
    listaClubes.innerHTML = '';
    clubes.forEach((clube, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${clube}`;
        listaClubes.appendChild(li);
    });
}

// Função para gerar a tabela de jogos
function gerarTabela() {
    tabelaJogos.innerHTML = '';
    if (clubes.length % 2 !== 0) {
        alert('O número de clubes deve ser par para gerar a tabela.');
        return;
    }

    for (let i = 0; i < clubes.length / 2; i++) {
        const primeiro = clubes[i];
        const ultimo = clubes[clubes.length - 1 - i];
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent 1  = primeiro;
        td2.textContent = ultimo;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabelaJogos.appendChild(tr);
    }
}

// Associando as funções aos eventos dos botões
btnAdicionar.addEventListener('click', adicionarClube);
btnListar.addEventListener('click', listarClubes);
btnGerarTabela.addEventListener('click', gerarTabela);