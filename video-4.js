//Promise in js

class ListNode {
    val;
    next;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    head;
    constructor() {
        this.head = null;
    }

    add(val) {
        const node = new ListNode(val);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.print();
list.reverse();
list.print();

// Promise class in js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 1000);
}
);

promise.then((data) => {
    console.log(data);
}
);

function addTwoNumber(num1, num2) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            reject("Invalid input");
        }
        resolve(num1 + num2);
    });
}



