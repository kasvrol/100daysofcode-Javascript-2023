// Iterando com laço for...of

function forOf() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (const iterator of numbers) {
        console.log(iterator % 2 === 0);
    }

    //forEach simplificado ecma 2015
}

//export default forOf;

// objeto @@iterator
function iterator() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let iterator = numbers[Symbol.iterator]();
    //opção 1
    console.log(iterator.next().value);
    //1
    console.log(iterator.next().value);
    //2
    console.log(iterator.next().value);
    //3
    console.log(iterator.next().value);
    //4
    console.log(iterator.next().value);
    //5
    console.log(iterator.next().value);
    //6
    console.log(iterator.next().value);
    //7
    console.log(iterator.next().value);
    //8
    console.log(iterator.next().value);
    //9
    console.log(iterator.next().value);
    //0
    console.log(iterator.next().value);
    //undefined

    /* para procurar os valores do array,
     *  mostrará sempre o próximo valor do elemento do array e ao chegar ao último elemento,
     * mostrará undefined,
     * afinal não existirá  próximo valor*/

    //porém pode usar o for...of para fazer essa sequência de log usando (const i of iterator),
    // o valor undefined não aparecerá, o for executará até o penúltimo elemento
}

//export default iterator;

// Entries
function Entries() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let aEntries = numbers.entries();

    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    console.log(aEntries.next().value);
    // [ 0, 1 ]
    // [ 1, 2 ]
    // [ 2, 3 ]
    // [ 3, 4 ]
    // [ 4, 5 ]
    // [ 5, 6 ]
    // [ 6, 7 ]
    // [ 7, 8 ]
    // [ 8, 9 ]
    // [ 9, 0 ]

    /* para procurar os valores do array,
     *  mostrará sempre o próximo valor do elemento do array e ao chegar ao último elemento,
     * mostrará undefined,
     * afinal não existirá  próximo valor*/

    //porém pode usar o for...of para fazer essa sequência de log usando (const i of aEntries),
    // o valor undefined não aparecerá, o for executará até o penúltimo elemento

    //esse método mostrará um array com o primeiro elemento sendo o indice do elemento do array principal
    // e o  segundo elemento sendo o próprio elemento do array principal

    for (const i of aEntries) {
        console.log(i);
    }
    // [ 0, 1 ]
    // [ 1, 2 ]
    // [ 2, 3 ]
    // [ 3, 4 ]
    // [ 4, 5 ]
    // [ 5, 6 ]
    // [ 6, 7 ]
    // [ 7, 8 ]
    // [ 8, 9 ]
    // [ 9, 0 ]
}

//export default Entries;

// keys
function keys() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let aKeys = numbers.keys();

    /*  esse método mostrará um array com os indices do elemento do array principal*/

    for (const i of aKeys) {
        console.log(i);
    }
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9
}

//export default keys;

// values
function values() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let aValues = numbers.values();

    /* esse método mostrará um array com os valores do elemento do array principal*/

    for (const i of aValues) {
        console.log(i);
    }
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9
    // 0
}

export default values;
