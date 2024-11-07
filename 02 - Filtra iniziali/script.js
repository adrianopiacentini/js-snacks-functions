/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Accepts an array of strings and only returns strings starting with a vowel.
 * @param {array} array
 * @param {string} char
 * @returns {array}
 */
function filterFirstChar(array, char) {
   const result = [];
   for(let i = 0; i < array.length - 1; i++) {
    let curItem = array[i];
    if (char === curItem[0]) {
        result.push(curItem)
    }
   }
   return result;
}

// Invoca la funzione qui e stampa il risultato in console
const filtered = filterFirstChar(names, 'A');
console.log(filtered);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]