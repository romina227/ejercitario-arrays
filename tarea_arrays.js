// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
function procesarPedido(pedido) {
    const nombreCliente = pedido.shift(); // Saca el primer elemento (nombre del cliente)
    pedido.unshift("bebida"); // Añade "bebida" al inicio del array
    pedido.push(nombreCliente); // Añade el nombre del cliente al final
}

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
function sumarPares(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            suma += numero; // Suma si el número es par
        }
    }
    return suma;
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras.
function palabrasTerminanConA(palabras) {
    for (let palabra of palabras) {
        if (!palabra.endsWith('a')) {
            return false; // Si al menos una no termina con "a"
        }
    }
    return true; // Todas terminan con "a"
}

const palabras = ['casa', 'silla', 'mesa'];
console.log(palabrasTerminanConA(palabras)); // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba un array `words` y una palabra `word`.
function buscaPalabras(words, word) {
    const index = words.indexOf(word); // Busca el índice de la palabra
    if (index === -1) return []; // Si no se encuentra, devuelve un array vacío
    return words.slice(index + 1); // Devuelve las palabras después del índice encontrado
}

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')); // -> ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas.
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const index = matrix[i].indexOf("JavaScript");
        if (index !== -1) {
            return [i, index]; // Devuelve la posición de "JavaScript"
        }
    }
    return [-1, -1]; // Si no se encuentra, devuelve [-1, -1]
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
];
const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números.
function findMinMaxPages(books) {
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i; // Actualiza el índice del libro con menos páginas
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i; // Actualiza el índice del libro con más páginas
        }
    }
    return [minIndex, maxIndex]; // Devuelve ambos índices
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
