/* ========================================
 ELEMENTOS
======================================== */
const botoesMenu = document.querySelectorAll(".menu-item");
const secoes = document.querySelectorAll(".section");
const titulo = document.getElementById("tituloPagina");
const botaoSair = document.getElementById("btnSair");

/* ========================================
 NAVEGAÇÃO DO MENU
======================================== */
botoesMenu.forEach(function(botao) {
 botao.addEventListener("click", function() {
   const nomeSecao = botao.getAttribute("data-section");

   botoesMenu.forEach(item => item.classList.remove("ativo"));
   botao.classList.add("ativo");

   secoes.forEach(secao => secao.classList.remove("ativa"));

   const secaoEscolhida = document.getElementById(nomeSecao);
   if (secaoEscolhida) {
     secaoEscolhida.classList.add("ativa");
   }

   if (nomeSecao === "inicio") {
     titulo.textContent = "Calculadora IRRF";
   } else if (nomeSecao === "tabela") {
     titulo.textContent = "Tabela de Incidência IRRF";
   } else if (nomeSecao === "perfil") {
     titulo.textContent = "Meu Perfil";
   }
 });
});

/* ========================================
 BOTÃO SAIR
======================================== */
if (botaoSair) {
 botaoSair.addEventListener("click", function() {
   const confirmar = confirm("Deseja realmente sair? ♡");
   if (confirmar) {
     window.location.href = "index.html";
   }
 });
}

/* ========================================
 LÓGICA DA CALCULADORA DE IRRF 2026
======================================== */
const formIRRF = document.getElementById("formIRRF");
const boxResultado = document.getElementById("boxResultado");
const statusResultado = document.getElementById("statusResultado");
const detalhesCalculo = document.getElementById("detalhesCalculo");

if (formIRRF) {
 formIRRF.addEventListener("submit", function(event) {
   event.preventDefault();

   const salarioBruto = parseFloat(document.getElementById("salarioBruto").value);

   if (isNaN(salarioBruto) || salarioBruto < 0) {
     alert("Por favor, digite um valor de salário válido.");
     return;
   }

   // REGRA DE ACORDO COM A TABELA FORNECIDA
   if (salarioBruto <= 2428.80) {
     statusResultado.textContent = "Isento ♡";
     detalhesCalculo.innerHTML = "<p style='text-align:center;'>Você está isento do imposto de renda!</p>";
   } else {
     let aliquota = 0;
     let deducao = 0;

     if (salarioBruto <= 2826.65) {
       aliquota = 0.075;
       deducao = 182.16;
     } else if (salarioBruto <= 3751.05) {
       aliquota = 0.15;
       deducao = 394.16;
     } else if (salarioBruto <= 4664.68) {
       aliquota = 0.225;
       deducao = 675.49;
     } else {
       aliquota = 0.275;
       deducao = 908.73;
     }

     // Cálculo da dedução/imposto a pagar
     const impostoDevido = (salarioBruto * aliquota) - deducao;

     statusResultado.textContent = `Valor a ser deduzido: R$ ${impostoDevido.toFixed(2).replace('.', ',')}`;
     detalhesCalculo.innerHTML = `
       <p>• <strong>Alíquota aplicada:</strong> ${(aliquota * 100).toFixed(1).replace('.', ',')}%</p>
       <p>• <strong>Parcela a deduzir da tabela:</strong> R$ ${deducao.toFixed(2).replace('.', ',')}</p>
     `;
   }

   boxResultado.style.display = "block";
 });
}