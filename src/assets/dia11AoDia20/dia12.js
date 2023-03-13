//FILAS, O CÓDIGO RESPEITA A LÓGICA APRESENTADA NO LIVRO, PORÉM É CONSTRUIDO DE FORMA DIFERENTE A APRESENTADA NO MATERIAL

function Filas() {
    const Queue = {
        items: {},
        count: 0,
        lowestCount: 0,
        enqueue: function (items, element) {
            if (this.isEmpty(items)) {
                items[this.count] = element;
                console.log(items);
                return items;
            } else {
                this.count = Object.keys(items).at(-1);
                this.count++;
                items[this.count] = element;
                console.log(items);
                return items;
            }
        },
        dequeue: function (items) {
            if (this.isEmpty(items)) return null;
            const result = items[this.lowestCount];
            delete items[this.lowestCount];
            this.lowestCount++;
            console.log(result);
            console.log(items);
            return result;
        },
        peek: function (items) {
            if (this.isEmpty(items)) return null;
            console.log(items[this.lowestCount]);
            return items[this.lowestCount];
        },
        isEmpty: function (items) {
            let result = Object.keys(items).length === 0;
            console.log(result);
            return result;
        },
        size: function (items) {
            let length = Object.keys(items).length;
            console.log(length);
            return length;
        },
        clear: function (items) {
            if (this.size(items) != 0) {
                let result = Object.keys(items).at(-1);
                for (let index = result; index > 0; index--) {
                    this.dequeue(items);
                }
                this.count = 0;
                this.lowestCount = 0;
                console.log(items);
                return items;
            }
        },
        toString: function (items) {
            if (this.isEmpty(items)) return null;
            let objString = `${items[this.lowestCount]}`;
            let finalString = Object.keys(items).at(-1);
            for (let i = this.lowestCount + 1; i <= finalString; i++) {
                objString = `${objString}, ${items[i]}`;
            }
            console.log(objString);
            return objString;
        },
    };

    //TESTES DA FILA CONSTRUIDO
    let items = { 0: 5, 1: 8 };
    Queue.enqueue(items, 3); //{ '0': 5, '1': 8, '2': 3 }
    Queue.enqueue(items, 4); //{ '0': 5, '1': 8, '2': 3, '3': 4 }
    Queue.peek(items); //5
    Queue.dequeue(items); //5, { '1': 8, '2': 3, '3': 4 }
    Queue.peek(items); //8
    Queue.dequeue(items); //8, { '2': 3, '3': 4 }
    Queue.peek(items); //3
    Queue.isEmpty(items); //false
    Queue.size(items); //2
    Queue.enqueue(items, 5); //{ '2': 3, '3': 4, '4': 5 }
    Queue.toString(items); //3, 4, 5
    Queue.enqueue(items, 100); //{ '2': 3, '3': 4, '4': 5, '5': 100 }
    Queue.toString(items); //3, 4, 5, 100
    Queue.dequeue(items); //3, { '3': 4, '4': 5, '5': 100 }
    Queue.toString(items); //4, 5, 100
    Queue.clear(items); //4, 5, 100
    Queue.isEmpty(items); //4, 5, 100
    Queue.enqueue(items, 100);
    Queue.enqueue(items, 102);
}

export default Filas;
