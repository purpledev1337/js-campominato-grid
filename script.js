// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

// Chiedo all'utente il livello di difficoltà che vuole.

// Genero una griglia di gioco in base alla difficoltà scelta
// Quando genererò i quadratini all'interno avranno un numero progressivo nascosto
// Se la difficoltà è 1(facile) genero 100 quadratini (10 per riga)
// Se la difficoltà è 2(media) genero 81 quadratini (10 per riga)
// Se la difficoltà è 3(difficile) genero 49 quadratini (10 per riga)

// Al click, il qudratino cambierà colore e mostrerà il numero nascosto