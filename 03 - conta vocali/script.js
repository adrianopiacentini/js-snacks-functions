/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * Counts the number of vocals in a string.
 * @param {string} word
 * @returns {number}
 */
function returnVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0
    for(let i = 0; i < word.length; i++) {
        const curItem = word[i]
        if (vowels.includes(curItem.toLowerCase())) {
            count++
        }
    }
    return count;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(returnVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)