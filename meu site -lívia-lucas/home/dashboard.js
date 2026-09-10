/* ========================================
   ELEMENTOS
======================================== */

const botoesMenu =
    document.querySelectorAll(".menu-item");

const secoes =
    document.querySelectorAll(".section");

const titulo =
    document.getElementById("tituloPagina");

const botaoSair =
    document.getElementById("btnSair");


/* ========================================
   NAVEGAÇÃO DO MENU
======================================== */

botoesMenu.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const nomeSecao =
            botao.getAttribute("data-section");


        /* Remove ativo dos botões */

        botoesMenu.forEach(function(item) {

            item.classList.remove("ativo");

        });


        /* Ativa botão clicado */

        botao.classList.add("ativo");


        /* Esconde todas as seções */

        secoes.forEach(function(secao) {

            secao.classList.remove("ativa");

        });


        /* Mostra seção escolhida */

        const secaoEscolhida =
            document.getElementById(nomeSecao);

        if (secaoEscolhida) {

            secaoEscolhida.classList.add("ativa");

        }


        /* Altera título */

        if (nomeSecao === "inicio") {

            titulo.textContent =
                "Dashboard";

        }

        else if (nomeSecao === "perfil") {

            titulo.textContent =
                "Meu Perfil";

        }

        else if (nomeSecao === "mensagens") {

            titulo.textContent =
                "Mensagens";

        }

        else if (nomeSecao === "configuracoes") {

            titulo.textContent =
                "Configurações";

        }

    });

});


/* ========================================
   BOTÃO SAIR
======================================== */

botaoSair.addEventListener("click", function() {

    const confirmar =
        confirm("Deseja realmente sair? ♡");


    if (confirmar) {

        window.location.href =
            "index.html";

    }

});