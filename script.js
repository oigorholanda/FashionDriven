let nome;



function perguntaNome () {
    nome = prompt("Qual seu nome?");
    alert(`Monte sua camiseta, ${nome} =)`)
}

buscaEncomendadas ();
// setTimeout(perguntaNome, 1500);

function buscaEncomendadas () {
    const promisse = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promisse.then(renderizarEncomendas);
    promisse.catch(casoErro);
}

function renderizarEncomendas (obj) {
    console.log(obj.data);
    const pedidos = obj.data;
    const ultimos = document.querySelector('.ultimos');
    ultimos.innerHTML = "";

    for (let i = 0; i < pedidos.length; i++) {
        ultimos.innerHTML += `
        <div class="pedido">
        <img src="${pedidos[i].image}" alt="Blusa${i}">
        <p><strong>Criador</strong>: ${pedidos[i].owner}</p>
        </div>
        ` 
    }
}

function casoErro (erro) {
    console.log(erro.response);
}

function selecionarOpcao (item) {
    item.classList.add('selecionado');

    if (item.parentNode.classList.contains('selecionado')) {
        return
    } else {
        item.classList.add('selecionado'); 
    }
}

