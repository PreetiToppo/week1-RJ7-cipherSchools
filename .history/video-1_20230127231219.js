//In js we can declare variable in 3 ways
//1. var
//2. let
//3. const

var myName = "John";
console.log(myName);

let yourNmae = "John";
console.log(yourNmae);
yourNmae = 5;
console.log(yourNmae);

const hisName = "John";
console.log(hisName);

//Functions
function sayHello() {
    console.log("Hello");
}
sayHello();

//String Interpolation
function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello("John");

//Arrow Functions
const sayHello = (name) => {
    console.log(`Hello ${name}`);
}

sayHello("John");

//Arrow Functions with single parameter
const sayHello = name => {
    console.log(`Hello ${name}`);
}

sayHello("John");

//Arrow Functions with single line
const sayHello = name => console.log(`Hello ${name}`);

sayHello("John");

//Arrow Functions with single line and single parameter
const sayHello = () => console.log(`Hello John`);

sayHello();

//Arrow Functions with single line and single parameter
const sayHello = name => console.log(`Hello ${name}`);

sayHello("John");

//Rest and Spread Operators used in js arrays and objects

//Rest Operator
function sayHello(...names) {
    console.log(names);
}

sayHello("John", "Doe", "Smith");

//Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

//Destructuring
const person = {
    name: "John",
    age: 30,
    city: "New York",

}

const { name, age, city } = person;
console.log(name, age, city);

//Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const person1 = new Person("John", 30);
person1.greet();

//Sub Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Customer extends Person {

    constructor(name, age, balance) {
        super(name, age);
        this.balance = balance;
    }

    info() {
        return `${this.name} owes $${this.balance}`;
    }
}



