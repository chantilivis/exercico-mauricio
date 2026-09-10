/* ========================================
   ELEMENTOS
======================================== */

const formulario = document.getElementById("login");

const email = document.getElementById("email");

const senha = document.getElementById("senha");

const botaoSenha =
    document.getElementById("togglepass");

const esqueci =
    document.getElementById("esqueci");

const mensagem =
    document.getElementById("mensagem");


/* ========================================
   MOSTRAR / ESCONDER SENHA
======================================== */

botaoSenha.addEventListener("click", function() {

    if (senha.type === "password") {

        senha.type = "text";

        botaoSenha.textContent = "🙈";

        botaoSenha.setAttribute(
            "aria-label",
            "Ocultar senha"
        );

    } else {

        senha.type = "password";

        botaoSenha.textContent = "👁️";

        botaoSenha.setAttribute(
            "aria-label",
            "Mostrar senha"
        );

    }

});


/* ========================================
   LOGIN
======================================== */

formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const valorEmail =
        email.value.trim();

    const valorSenha =
        senha.value.trim();


    /* E-MAIL VAZIO */

    if (valorEmail === "") {

        mostrarMensagem(
            "♡ Digite seu e-mail.",
            "erro"
        );

        email.focus();

        return;
    }


    /* VALIDAR E-MAIL */

    const formatoEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!formatoEmail.test(valorEmail)) {

        mostrarMensagem(
            "♡ Digite um e-mail válido.",
            "erro"
        );

        email.focus();

        return;
    }


    /* SENHA VAZIA */

    if (valorSenha === "") {

        mostrarMensagem(
            "♡ Digite sua senha.",
            "erro"
        );

        senha.focus();

        return;
    }


    /* SENHA CURTA */

    if (valorSenha.length < 6) {

        mostrarMensagem(
            "♡ A senha precisa ter pelo menos 6 caracteres.",
            "erro"
        );

        senha.focus();

        return;
    }


    /* ========================================
       LOGIN APROVADO
    ======================================== */

    mostrarMensagem(
        "♡ Login realizado! Entrando...",
        "sucesso"
    );


    /* IR PARA O DASHBOARD */

    setTimeout(function() {

        window.location.href = "home.html";

    }, 700);

});


/* ========================================
   ESQUECI A SENHA
======================================== */

esqueci.addEventListener("click", function(event) {

    event.preventDefault();

    alert(
        "♡ A recuperação de senha será adicionada aqui!"
    );

});


/* ========================================
   FUNÇÃO DE MENSAGEM
======================================== */

function mostrarMensagem(texto, tipo) {

    mensagem.textContent = texto;

    mensagem.className = tipo;

    mensagem.style.display = "block";

}


/* ========================================
   LIMPAR MENSAGEM
======================================== */

email.addEventListener("input", function() {

    mensagem.style.display = "none";

});


senha.addEventListener("input", function() {

    mensagem.style.display = "none";

});