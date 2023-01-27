//.map in js
const sayHello = (...names) => {
    names.map(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.foreach in js
const sayHello = (...names) => {
    names.forEach(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.filter in js
const sayHello = (...names) => {
    names.filter(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.reduce in js
const sayHello = (...names) => {
    names.reduce(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.find in js
const sayHello = (...names) => {
    names.find(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.every in js
const sayHello = (...names) => {
    names.every(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.some in js   
const sayHello = (...names) => {
    names.some(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.sort in js
const sayHello = (...names) => {
    names.sort(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.reverse in js
const sayHello = (...names) => {
    names.reverse(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.includes in js
const sayHello = (...names) => {
    names.includes(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.indexOf in js
const sayHello = (...names) => {
    names.indexOf(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.lastIndexOf in js
const sayHello = (...names) => {
    names.lastIndexOf(name => console.log(`Hello ${name}`));
}

sayHello("John", "Jane", "Jack");

//.join in js

const sayHello = (...names) => {

    console.log(names.join(" "));

}

sayHello("John", "Jane", "Jack");

//.concat in js
const sayHello = (...names) => {
    console.log(names.concat("Jack"));
}

sayHello("John", "Jane");

//.slice in js
const sayHello = (...names) => {
    console.log(names.slice(0, 1));
}

sayHello("John", "Jane", "Jack");


