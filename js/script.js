/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: FutArt - Loja fictícia de artigos esportivos
Aluno: Pedro Henrique dos Santos Jorge - RA: 250972
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

const btnTopo = document.querySelector('#btnTopo');

if (btnTopo) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    });

    btnTopo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const cards = document.querySelectorAll('.card-futart');

cards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
        card.classList.add('card-destaque-js');
    });

    card.addEventListener('mouseleave', function () {
        card.classList.remove('card-destaque-js');
    });
});

const botõesFiltro = document.querySelectorAll('.filtro-btn');
const itensGaleria = document.querySelectorAll('.item-galeria');

botõesFiltro.forEach(function (botao) {
    botao.addEventListener('click', function () {
        const filtroSelecionado = botao.dataset.filtro;

        botõesFiltro.forEach(function (item) {
            item.classList.remove('ativo');
        });
        botao.classList.add('ativo');

        itensGaleria.forEach(function (item) {
            const categoria = item.dataset.categoria;

            if (filtroSelecionado === 'todos' || categoria === filtroSelecionado) {
                item.classList.remove('card-oculto');
            } else {
                item.classList.add('card-oculto');
            }
        });
    });
});

const formulario = document.querySelector('#formContato');
const alertaFormulario = document.querySelector('#alertaFormulario');

if (formulario && alertaFormulario) {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            alertaFormulario.textContent = 'Por favor, revise os campos obrigatórios antes de enviar.';
            alertaFormulario.className = 'alerta-formulario erro';
            formulario.reportValidity();
            return;
        }

        alertaFormulario.textContent = 'Mensagem enviada com sucesso! Em breve a FutArt retornará o contato.';
        alertaFormulario.className = 'alerta-formulario sucesso';
        formulario.reset();
    });

    formulario.addEventListener('reset', function () {
        alertaFormulario.textContent = '';
        alertaFormulario.className = 'alerta-formulario';
    });
}
