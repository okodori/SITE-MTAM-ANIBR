//Modo escuro
function darkMode() {
    var element = document.body;

    // Verifica se o modo escuro está ativado atualmente
    var isDarkMode = element.classList.contains("dark-mode");

    // Inverte o estado do modo escuro
    element.classList.toggle("dark-mode");

    // Atualiza o estado no localStorage
    localStorage.setItem("darkMode", !isDarkMode);
}

// Verifica se o modo escuro estava ativado ao carregar a página anteriormente
window.onload = function() {
    var isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
};


//Botões de aumentar ou diminuir
var fonts = [];

function obterTamanhoFonte() {
    var elements = document.querySelectorAll('.tamanhoItem');
    elements.forEach(element => {
        var size = window.getComputedStyle(element, null).getPropertyValue('font-size');
        size = parseFloat(size);
        fonts.push(size);
    });
}

function changeFontSize(type) {
    var elements = document.querySelectorAll('.tamanhoItem');

    if (type === 'normal') {
        obterTamanhoFonte(); // Chama para obter os tamanhos originais antes do reset
    }

    elements.forEach((element, index) => {
        var size = window.getComputedStyle(element, null).getPropertyValue('font-size');
        size = parseFloat(size);

        if (type === 'increase') {
            element.style.fontSize = (size + 5) + "px";
        } else if (type === 'decrease') {
            element.style.fontSize = (size - 5) + "px";
        } else if (type === 'normal') {
            element.style.fontSize = fonts[index] + 'px';
        }
    });
}

// Chame a função para obter tamanhos de fonte originais quando a página carregar
document.addEventListener('DOMContentLoaded', obterTamanhoFonte);

 