"use strict";
//Type-------------------------------------------------------------------------------------------------------------
const a = "hello word";
const n = 12;
const b = true;
const d = null;
const arr = ["azer", "tyu", "iop"];
const arr2 = [23, true, "STRING"];
const user1 = { firstName: "John", lastName: "Doe", sister: "Jane" };
const user2 = { firstName: "Johnny", lastName: "Dawson" };
const date = new Date();
const callBack = (e) => {
    return 3;
};
//const compteur = document.querySelector('#compteur') as HTMLButtonElement  //force le type : insertion de type
// const compteur = <HTMLButtonElement> document.querySelector('#compteur')
//-Narrowing--------------------------------------------------------------------------------------------------------
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
function exemple(a) {
    if (Array.isArray(a)) {
        a[0];
    }
    if (a instanceof Date) {
        console.log(a);
    }
}
function isDate(a) {
    return a instanceof Date;
}
function DetectionAutoType(a) {
    if ("value" in a) {
        a;
    }
    if (isDate(a)) {
        a;
    }
}
const user3 = { firstname: "Jason", lastname: "Momoa" };
const date2 = '25 octobre 2022';
function identity(arg) {
    return arg;
}
const aa = identity(3);
const bb = identity("test");
function first(arg) {
    if (arg[0]) {
        return arg[0];
    }
    return null;
}
const cc = first(["abc", "def", 3]);
const dd = ["abc", "def", 3];
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const ee = consoleSize(["4", 3]);
//--------------------------------------------------------------------------------------------------------------
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector("span");
    if (span) {
        span.innerHTML = i.toString();
    }
};
compteur?.addEventListener("click", increment);
//-Classes---------------------------------------------------------------------------------------------
function reverse(arr) {
    return [...arr].reverse();
}
class A {
    #private = 3;
    protected = 3;
    public = 5;
    log() {
        console.log(this.#private);
    }
}
class B extends A {
    log() {
        console.log(this.protected);
    }
}
const aInstance = new A();
console.log(aInstance.public);
class D {
    a;
    constructor(a) {
        this.a = a;
    }
}
const dInstance = new D(3);
console.log(dInstance.a);
class Collection {
    items;
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    first() {
        return this.items[0] || null;
    }
}
const collection = new Collection([1, 2, 3]);
const ff = collection.add(6);
const bCollection = collection.first();
class Geometry {
    x = 0;
    y = 0;
}
class Triangle extends Geometry {
    x = 2;
    y = 2;
    surface() {
        return 3;
    }
}
class Carre {
    static #origin;
    static {
        Carre.#origin = { x: 0, y: 0 };
    }
}
window.googleAnalytics;
class TwoDimensionPoint {
    x = 2;
    y = 2;
}
function draw(p) {
}
draw(new TwoDimensionPoint());
//tuple array taille fixe
const aaa = [1, 2, 3];
const bbb = ['tomate', 4];
const ccc = [55, 'azert'];
const abc = ["tomate", 22];
const bcs = ["banane", 3];
const cba = [];
function merge(a, b) {
    return [...a, ...b];
}
const aab = merge(abc, bcs);
const aac = merge(abc, [1, 2, 4]);
if (cba[0]) {
    console.log(cba[0].toUpperCase());
}
console.log(bcs[0].toUpperCase());
const step = 1 /* STEPS.Selection */;
console.log(step);
