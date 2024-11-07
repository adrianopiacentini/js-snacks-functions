/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

/**
 * Accepts a name as an input and returns a greeting containing that name.
 * @param {string} names
 * @returns {string}
 */
function greeting(names) {
    let message = `Ciao ${names}!`
    return message;
}

console.log(greeting(name))

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario': // ciao Mario