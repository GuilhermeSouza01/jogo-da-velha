// Seleciona os simbolos de X e O

let symbolX = document.querySelector(".symbol-x");
let symbolO = document.querySelector(".symbol-o");

// Seleciona todas caixas, onde serão inseridos os simbolos
let boxes = document.querySelectorAll(".box");
// Seleciona os botões
let buttons = document.querySelectorAll("#buttons-container button");
// Seleciona caixa de texto
let winMessage = document.querySelector("#message");

let messageTxt = document.querySelector("#message p");

let secondPlayer;

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Adicionar evento de click nos boxes
for(let i = 0; i < boxes.length; i++) {
    // Assim que a caixa é clicada
    boxes[i].addEventListener("click", function() {
        
        let element = checkElement(player1, player2);

        // verifica se já existe x ou o
        if(this.childNodes.length == 0) {
            let cloneElement = element.cloneNode(true);
            this.appendChild(cloneElement);
            
            // Computar jogada
            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }
    
    });
}

// Analisa a vez de qum jogar
function checkElement(player1, player2) {

    if(player1 == player2) {
        element = symbolX;
    } else {
        element = symbolO;
    }

    return element;
}


