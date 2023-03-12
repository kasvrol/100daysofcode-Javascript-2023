function PilhaBinaria() {
    const Stack = {
        push: function (array, elemento) {
            return array.push(elemento);
        },
        pop: function (array) {
            return array.pop();
        },
        peek: function (array) {
            return array.at(-1);
        },
        isEmpty: function (array) {
            return array.length === 0;
        },
        verTamanhoDaPilha: function (array) {
            return array.length;
        },
        limpar: function (array) {
            return (array.length = []);
        },
    };

    function binario(number) {
        //conversão de um numero natural em binário
        let rem;
        let remBinary = [];
        let binaryString = "";
        while (number > 0) {
            rem = Math.floor(number % 2);
            Stack.push(remBinary, rem);
            number = Math.floor(number / 2);
        }

        while (!Stack.isEmpty(remBinary)) {
            binaryString += Stack.pop(remBinary).toString();
        }

        console.log("binaryString", binaryString);
    }
    function conversorDeBase(number, base) {
        //conversão de um numero natural em alguma base
        let rem;
        let remStack = [];
        let baseString = "";
        const digitos = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (!(base >= 2 && base <= 26)) {
            console.log("");
            return null;
        }
        while (number > 0) {
            rem = Math.floor(number % base);
            Stack.push(remStack, rem);
            number = Math.floor(number / base);
        }

        while (!Stack.isEmpty(remStack)) {
            baseString += digitos[Stack.pop(remStack)];
        }

        console.log("baseString: ", baseString);
    }
    // returnAboutWeakMap();
    binario(14); //binaryString:  1110
    conversorDeBase(15, 16); //baseString:  F
}

export default PilhaBinaria;
