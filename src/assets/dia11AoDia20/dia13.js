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
function HotPotato() {
    function hotPotato(elementsList, num) {
        let queue = {};
        const elimitatedList = [];
        for (let index = 0; index < elementsList.length; index++) {
            Queue.enqueue(queue, elementsList[index]);
        }
        while (Queue.size(queue) > 1) {
            for (let index = 0; index < num; index++) {
                Queue.enqueue(queue, Queue.dequeue(queue));
            }
            elimitatedList.push(Queue.dequeue(queue));
        }
        return {
            elimitated: elimitatedList,
            winner: Queue.dequeue(queue),
        };
    }

    let people = ["joão", "camila", "pedro", "ana", "luiz", "vanessa"];
    let qty = parseInt(Math.random() * (30 - 6 + 1) + 6);
    let result = hotPotato(people, qty);
    result.elimitated.forEach((element) => {
        console.log(`${element} foi eliminado`);
    });
    console.log(`${result.winner} foi vencedor`);
}

export default HotPotato;
