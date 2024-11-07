/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Description
 * @param {string} name
 * @returns {string}
 */

function initials (name) {
    let firstChar = [];
    for(let i = 0; i < name.length - 1; i++) {
        let curName = name[i]
        curName = curName.split('')
        firstChar.push(curName[0]);
    }
    return firstChar
}

// Invoca la funzione qui e stampa il risultato in console

console.log(initials(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]