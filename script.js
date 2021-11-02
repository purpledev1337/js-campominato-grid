// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

// Chiedo all'utente il livello di difficoltà che vuole.

let chosenDiff = parseInt(prompt("Scegli la difficoltà: da 1 a 3"));
console.log("Diffoltà: ", chosenDiff);

// Se la difficoltà è 1(facile) genero 100 quadratini (10 per riga)
// Se la difficoltà è 2(media) genero 81 quadratini (10 per riga)
// Se la difficoltà è 3(difficile) genero 49 quadratini (10 per riga)
if (chosenDiff === 1) {
    numberOfSquares = 100;
    console.log("Numero di quadratini:", numberOfSquares);
} if (chosenDiff === 2) {
    numberOfSquares = 81;
    console.log("Numero di quadratini:", numberOfSquares);
} if (chosenDiff === 3) {
    numberOfSquares = 49;
    console.log("Numero di quadratini:", numberOfSquares);
};

// Genero una griglia di gioco in base alla difficoltà scelta
// Quando genererò i quadratini all'interno avranno un numero progressivo nascosto

let gridContainer = document.querySelector(".container");

for (i = 0; i < numberOfSquares; i++) {
    let newSquare;
    newSquare = createElement("div", "square");
    newSquare.innerHTML += `<span>${i + 1}</span>`;

    if (numberOfSquares == 49) {
        newSquare.classList.add("hard");
    } if (numberOfSquares == 81) {
        newSquare.classList.add("medium");
    } else {
        newSquare.classList.add("easy");
    }
    // Al click, il quadratino cambierà colore e mostrerà il numero nascosto
    newSquare.addEventListener("click",
        function() {
            newSquare.classList.add("active");
        }
    )
    gridContainer.appendChild(newSquare);
}



// funzioni generali
function createElement(elementTag, elementClass) {
    let createDiv = document.createElement(elementTag);
    createDiv.classList.add(elementClass);
    return createDiv;
}