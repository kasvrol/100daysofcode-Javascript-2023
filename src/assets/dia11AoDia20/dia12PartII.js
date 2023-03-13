//DEQUES, O CÓDIGO RESPEITA A LÓGICA APRESENTADA NO LIVRO, PORÉM É CONSTRUIDO DE FORMA DIFERENTE A APRESENTADA NO MATERIAL

function resultDeque() {
    const Deque = {
        items: {},
        count: 0,
        lowestCount: 0,
        AddBack: function (items, element) {
            if (this.isEmpty(items)) {
                items[this.count] = element;
                console.log(items);
                return items;
            } else {
                this.count = parseInt(Object.keys(items).at(-1)) + 1;
                items[this.count] = element;
                console.log(items);
                return (items[this.count] = element);
            }
        },
        AddFront: function (items, element) {
            if (this.isEmpty(items)) {
                console.log(items);
                return this.AddBack(items, element);
            } else {
                this.count = parseInt(Object.keys(items).at(-1)) + 1;
                this.lowestCount = parseInt(Object.keys(items).at(0));

                if (this.lowestCount > 0) {
                    this.lowestCount--;
                    console.log(items);
                    return (items[this.lowestCount] = element);
                } else {
                    for (let index = this.count; index > 0; index--) {
                        items[index] = items[index - 1];
                    }
                    items[this.lowestCount] = element;
                    console.log(items);
                    return (items[this.lowestCount] = element);
                }
            }
        },
        DeleteBack: function (items) {
            if (this.isEmpty(items)) return null;
            const result = items[parseInt(Object.keys(items).at(-1))];
            delete items[parseInt(Object.keys(items).at(-1))];
            console.log(items);
            return result;
        },
        DeleteFront: function (items) {
            if (this.isEmpty(items)) return null;
            const result = items[this.lowestCount];
            delete items[this.lowestCount];
            this.lowestCount++;
            console.log(result);
            console.log(items);
            return result;
        },
        peekFront: function (items) {
            if (this.isEmpty(items)) return null;
            console.log(items[this.lowestCount]);
            return items[this.lowestCount];
        },
        peekBack: function (items) {
            if (this.isEmpty(items)) return null;
            let result = Object.keys(items).at(-1);
            console.log(items[result]);
            return items[result];
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
                    this.DeleteBack(items);
                }
                this.count = 0;
                this.lowestCount = 0;
                console.log(items);
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
    //TESTES DO DEQUE CONSTRUIDO

    let items = { 0: 1, 1: 2 };
    Deque.toString(items);
    Deque.AddFront(items, 3);
    Deque.toString(items);
    Deque.isEmpty(items);
    Deque.AddBack(items, 4);

    Deque.DeleteBack(items);

    Deque.DeleteBack(items);

    Deque.AddBack(items, 4);
    Deque.DeleteFront(items);
    Deque.size(items);
    Deque.DeleteFront(items);
    Deque.clear(items);
    Deque.size(items);
    Deque.isEmpty(items);
    Deque.AddBack(items, 4);
    Deque.AddFront(items, 3);
    Deque.AddBack(items, 5);
    Deque.AddBack(items, 7);
    Deque.AddFront(items, 9);
    Deque.AddBack(items, 10);
    Deque.peekBack(items);
    Deque.peekFront(items);
}

export default resultDeque;
