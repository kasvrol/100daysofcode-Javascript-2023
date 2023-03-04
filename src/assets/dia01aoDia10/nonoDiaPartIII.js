//PESQUISA DENTRO DO CÓDIGO
// indexOf
let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
];

function INDEXof() {
    let people = [
        "carlos",
        "gilberto",
        "ana",
        "robson",
        "Carlos",
        "Gilberto",
        "Ana",
        "Robson",
    ];
    console.log(people.indexOf(5));
    //-1 (porque não existe elemento 5 dentro do array people)
    console.log(people.indexOf("Carlos"));
    //4 é o indice dentro do array people, lembrando que o indice começa em 0
}

//export default INDEXof;

// findIndex
function findIndex() {
    //buscará o primeiro elemento que satisfazer a função posta como argumento
    const multiploDeCinco = (element, index, array) => {
        return element % 5 == 0;
    };

    console.log(numbers.find(multiploDeCinco));
    //5
    console.log(numbers.findIndex(multiploDeCinco));
    //4
}

//export default findIndex;

// includes
function includes() {
    //verificará se o argumento existe dentro do array
    numbers.includes(30);
    console.log(
        "🚀 ~ file: nonoDiaPartIII.js:46 ~ includes ~ numbers.includes(30):",
        numbers.includes(30)
    );
    //false

    numbers.includes(15);
    console.log(
        "🚀 ~ file: nonoDiaPartIII.js:53 ~ includes ~ numbers.includes(15):",
        numbers.includes(15)
    );
    //true

    numbers.includes(4, 19);
    console.log(
        "🚀 ~ file: nonoDiaPartIII.js:60 ~ includes ~ numbers.includes(4, 19):",
        numbers.includes(4, 19)
    );
    //false, pois o elemento 4 não existe após o indice 19

    numbers.includes(4, 1);
    console.log(
        "🚀 ~ file: nonoDiaPartIII.js:67 ~ includes ~ numbers.includes(4, 1):",
        numbers.includes(4, 1)
    );
    //true, pois o elemento 4 existe após o indice 1
}

//export default includes;

// toString
function toString() {
    //transformará um array em string

    let numbersString = numbers.toString();
    console.log(
        "🚀 ~ file: nonoDiaPartIII.js:81 ~ toString ~ numbersString:",
        numbersString
    );
    /**🚀 ~ file: nonoDiaPartIII.js:81 ~ toString ~ numbersString: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25 */

    //porém se quiser outro separador entre os números, modificar com join
    let numbersString02 = numbers.join("EPA");
    console.log(
        "🚀 ~ file: nonoDiaPartIII.js:89 ~ toString ~ numbersString02:",
        numbersString02
    );
    /** 1EPA2EPA3EPA4EPA5EPA6EPA7EPA8EPA9EPA10EPA11EPA12EPA13EPA14EPA15EPA16EPA17EPA18EPA19EPA20EPA21EPA22EPA23EPA24EPA25*/
}

//export default toString;

// Classe TypedArray.
function ClasseTypedArray() {
    //tipar arrays em js
    /**cria um array com a quantia de elementos passados e com o tipo dado */
    let newNumbers = new Int16Array(4);
    console.log(
        "🚀 ~ file: nonoDiaPartIII.js:103 ~ ClasseTypedArray ~ newNumbers:",
        newNumbers
    );

    //🚀 ~ file: nonoDiaPartIII.js:103 ~ ClasseTypedArray ~ newNumbers: Int16Array(4) [ 0, 0, 0, 0 ]

    let newFloatNumbers = new Int16Array(9);
    console.log(
        "🚀 ~ file: nonoDiaPartIII.js:111 ~ ClasseTypedArray ~ newFloatNumbers:",
        newFloatNumbers
    );
    /**🚀 ~ file: nonoDiaPartIII.js:111 ~ ClasseTypedArray ~ newFloatNumbers: Int16Array(9) [0, 0, 0, 0, 0,0, 0, 0, 0] */
}

export default ClasseTypedArray;
