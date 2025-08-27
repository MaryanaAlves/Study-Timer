// ------------------------------------------------------
// Autor: Maryana Alves
// Data de criação: 21/08/2025
// Descrição: script para atualizar e exibir o relógio digital em tempo real
// Versão: 1.0
// Contato: maryalvespro@gmail.com
// Site: https://github.com/MaryanaAlves
// ------------------------------------------------------

const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const relogioContador = document.querySelector(".relogio");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();

    if (hr<10) hr = "0"+ hr;
    if (min<10) min = "0"+ min;

    horas.textContent = hr;
    minutos.textContent = min;

    relogioContador.setAttribute("aria-label", "Agora são " + hr + " horas e " + min + " minutos");
}, 1000);

const textoHr = document.querySelector("#textoHr");
const textoMin = document.querySelector("#textoMin");

textoHr.textContent = "Horas";
textoMin.textContent = "Minutos";

const nav = document.querySelector(".nav");
const abrirMenu = document.querySelector(".abrirMenu");
const menu = document.querySelector(".menu");

nav.style.opacity = "0.2";
abrirMenu.setAttribute("aria-expanded", false);

function clickMenu(){
    menu.classList.toggle("ativo");
    nav.style.opacity = menu.classList.contains("ativo") ? "0.8" : "0.2";
    abrirMenu.setAttribute("aria-expanded", menu.classList.contains("ativo") ? "true": "false");
    abrirMenu.setAttribute("aria-label", menu.classList.contains("ativo") ? "Fechar menu" : "Abrir menu");
}

abrirMenu.addEventListener("click", (evento) => {
    evento.stopPropagation();
    clickMenu();
})

document.addEventListener("click", (evento) => {
    if(menu.classList.contains("ativo") && !menu.contains(evento.target) && evento.target !== abrirMenu) {
        menu.classList.remove("ativo");
        abrirMenu.setAttribute("aria-expanded", false);
        nav.style.opacity = "0.2";
    }
});

menu.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("ativo");
        abrirMenu.setAttribute("aria-expanded", false);
        nav.style.opacity = "0.2";
    });
});

let telaCheia = false;
const botaoTelaCheia = document.querySelector("#telaCheia");
const iconeTela = botaoTelaCheia.querySelector("img")

botaoTelaCheia.setAttribute("aria-label", "Abrir Tela Cheia");

function alternarTelaCheia(){
    if (telaCheia){
        document.exitFullscreen?.();
        iconeTela.alt = "Abrir Tela Cheia";
        } else {
        document.documentElement.requestFullscreen?.();
        iconeTela.src = "assets/img/fullscreen_exit.svg";
        iconeTela.alt = "Fechar Tela Cheia";
        botaoTelaCheia.setAttribute("aria-label", "Fechar Tela Cheia");
    }
    (telaCheia = !telaCheia);
}

botaoTelaCheia.addEventListener("click", alternarTelaCheia);

document.addEventListener("fullscreenchange", () => {
    telaCheia = !!document.fullscreenElement;
    if (telaCheia) {
        iconeTela.src = "assets/img/fullscreen_exit.svg";
        iconeTela.alt = "Fechar Tela Cheia";
        botaoTelaCheia.setAttribute("aria-label", "Fechar Tela Cheia");
    } else {
        iconeTela.src = "assets/img/fullscreen.svg";
        iconeTela.alt = "Abrir Tela Cheia";
        botaoTelaCheia.setAttribute("aria-label", "Abrir Tela Cheia");
    }
});

const botaoCor = document.querySelector("#paletaCores");
const iconePaleta = botaoCor.querySelector("img");
const relogioDiv = document.querySelectorAll(".relogio div");
let abrirMenuDivs = document.querySelectorAll(".abrirMenu div");

let cor = ["branco","rosa","amarelo","azul","verde", "preto"];
let indice = 0;

botaoCor.setAttribute("aria-label", "Mudar Cor de Fundo");

function mudarCor(){
    document.body.style.background = cor[indice];

    if (indice === 0) {
        document.body.style.background = "radial-gradient(circle, #f2f2f2, #ededed, #e7e7e7, #e2e2e2, #dddddd)";
        relogioDiv.forEach(div => {
            div.style.background = "#141414e4";});
        abrirMenuDivs.forEach(div => {
            div.style.backgroundColor = "rgba(146, 146, 146, 0.72)"; 
        });
    } else if (indice === 1) {
        document.body.style.backgroundImage = "linear-gradient(to right, #ff9de5ff 0%, #ffc1e8ff 50%, #f877c2ff 100%)";
        document.body.style.backgroundSize = "300% 100%";
        relogioDiv.forEach(div => {
            div.style.background = "#ffa7d7e0";});
        abrirMenuDivs.forEach(div => {
            div.style.backgroundColor = "white"; 
        });
    } else if (indice === 2) {
        document.body.style.backgroundImage = "linear-gradient(to right, #ffe799 0%, #fff5cc 50%, #ffd966 100%)";
        document.body.style.backgroundSize = "300% 100%";
        relogioDiv.forEach(div => {
            div.style.background = "#ffed9eb5";});
        abrirMenuDivs.forEach(div => {
            div.style.backgroundColor = "rgba(118, 118, 118, 1)";
        });
    } else if (indice === 3) {
        document.body.style.backgroundImage = "linear-gradient(to right,  #9bd2ffff 0%, #cdeaff 50%, #89c4ffff 100%)";
        document.body.style.backgroundSize = "300% 100%";
        relogioDiv.forEach(div => {
            div.style.background = "#b1cbdee8";});
        abrirMenuDivs.forEach(div => {
            div.style.backgroundColor = "white"; 
        });
    } else if (indice === 4) {
        document.body.style.backgroundImage = "linear-gradient(to right, #b5e8b0 0%, #d9f7d6 50%, #9edc93 100%)";
        document.body.style.backgroundSize = "300% 100%";
        relogioDiv.forEach(div => {
            div.style.background = "#bce1b8eb";});
        abrirMenuDivs.forEach(div => {
            div.style.backgroundColor = "rgba(118, 118, 118, 1)";
        });
    } else if (indice === 5) {
        document.body.style.background = "rgb(0, 0, 0)";
        relogioDiv.forEach(div => {
            div.style.background = "#101010";});
        abrirMenuDivs.forEach(div => {
            div.style.backgroundColor = "white"; 
        });
    } 

    indice = (indice + 1) % cor.length;
}

botaoCor.addEventListener("click", mudarCor);
