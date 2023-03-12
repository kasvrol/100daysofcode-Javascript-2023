//SYMBOL

function Stack() {
    function returnAboutSymbols() {
        //Symbol é imutável  e pode ser usado como propriedade de um objeto
        const _items = Symbol("stackItems");
        class Stack {
            constructor() {
                this[_items] = [];
            }
        }
        const stack = new Stack();
        console.log(stack); //Stack { [Symbol(stackItems)]: [] }
        let objectSymbols = Object.getOwnPropertySymbols(stack);
        console.log(objectSymbols); //[ Symbol(stackItems) ]
        console.log(objectSymbols.length); //1
        console.log(objectSymbols[0]); //1
        console.log(stack[objectSymbols[0]]); //[]
        stack[objectSymbols[0]].push(5);
        console.log(stack[objectSymbols[0]]); //[ 5 ]
    }
    function returnAboutWeakMap() {
        //WeakMap é capaz de armazenar um par chave/valor, onde chave=objeto e valor=dado
        const items = new WeakMap();
        class Stack {
            constructor() {
                items.set(this, []); //definindo o valor de items
            }
            push(element) {
                const s = items.get(this); //obtemos o valor de items passando this como chave
                s.push(element);
            }
            pop() {
                const s = items.get(this);
                const r = s.pop();
                return r;
            }
            view() {
                const s = items.get(this);
                console.log(s);
            }
        }

        const stack = new Stack();
        stack.push(1);
        stack.push(3);
        stack.push(5);
        stack.push(7);
        stack.push(9);
        stack.view(); //[ 1, 3, 5, 7, 9 ]
        stack.pop();
        stack.pop();
        stack.view(); //[ 1, 3, 5 ]
    }
    returnAboutWeakMap();
}

export default Stack;
