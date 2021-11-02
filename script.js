// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

// Chiedo all'utente il livello di difficoltà che vuole.

let chosenDiff = parseInt(prompt("Scegli la difficoltà: da 1 a 3"));
console.log("Difficoltà: ", chosenDiff);

let numberOfSquares;
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

for (i = 0; i < numberOfSquares; i++) {
    let gridContainer = document.querySelector(".container");
    let newSquare;
    newSquare = createElement("div", "square");
    newSquare.innerHTML = `<span>${i + 1}</span>`;

    if (numberOfSquares == 49) {
        addClass (newSquare, "hard");
    } if (numberOfSquares == 81) {
        addClass (newSquare, "medium");
    } if (numberOfSquares == 100) {
        addClass (newSquare, "easy");
    }
    // Al click, il quadratino cambierà colore e mostrerà il numero nascosto
    newSquare.addEventListener("click",
        function() {
            addClass (newSquare, "active");
        }
    )
    
    gridContainer.appendChild(newSquare);
}



// funzioni generali
function createElement(elementTag, elementClass) {
    let createdElement = document.createElement(elementTag);
    createdElement.classList.add(elementClass);
    return createdElement;
}

function addClass (targetElement, plusClass) {
    let addedClass = targetElement.classList.add(plusClass)
    return addedClass;
}