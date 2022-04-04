// L'utente indica un livello di difficoltà in base al quale viene generata 
// una griglia di gioco quadrata,
//in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.



// collego btn play
const btnPlayElement = document.querySelector('.selectors>button');


// creo la funzione al click del btn play
btnPlayElement.addEventListener('click', function(){
    // collego livello di difficoltà inserito dall'utente
    const difficultyElement = document.querySelector('.selectors>select').value;
    // inizializzo la variabile in cui salvo l'intervallo
    let interval; 
    // selettore intervallo
    if(difficultyElement == 1) {
        interval = 100;
    } else if (difficultyElement == 2) {
        interval = 81;
    } else {
        interval = 49;
    }
});

