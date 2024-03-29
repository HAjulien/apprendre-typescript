//Type-------------------------------------------------------------------------------------------------------------

const a: string = "hello word";
const n: number = 12;
const b: boolean = true;
const d: null = null;

const arr: string[] = ["azer", "tyu", "iop"];
const arr2: any[] = [23, true, "STRING"];

const user1: { firstName: string; [key: string]: string } = {
    firstName: "John",
    lastName: "Doe",
    sister: "Jane",
};
const user2: { firstName: string; lastName?: string } = {
    firstName: "Johnny",
    lastName: "Dawson",
};

const date: Date = new Date();

const callBack: (e: MouseEvent) => void = (e: MouseEvent): number => {
    return 3;
};

//const compteur = document.querySelector('#compteur') as HTMLButtonElement  //force le type : insertion de type
// const compteur = <HTMLButtonElement> document.querySelector('#compteur')

//-Narrowing--------------------------------------------------------------------------------------------------------

function printId(id: number | string): void {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    } else {
        console.log(id.toUpperCase());
    }
}

function exemple(a: string | string[] | Date) {
    if (Array.isArray(a)) {
        a[0];
    }

    if (a instanceof Date) {
        console.log(a);
    }
}

function isDate(a: any): a is Date {
    return a instanceof Date;
}

function DetectionAutoType(a: Date | HTMLInputElement) {
    if ("value" in a) {
        a;
    }
    if (isDate(a)) {
        a;
    }
}

//Alias--------------------------------------------------------------------------------------------------------------

type User = { firstname: string; lastname: string };
type DateString = string;
type Id = string | number;
type P = keyof User;
type Username = User["firstname"];

const user3: User = { firstname: "Jason", lastname: "Momoa" };
const date2: DateString = "25 octobre 2022";

function identity<ArgTypes>(arg: ArgTypes): ArgTypes {
    return arg;
}

const aa = identity<number>(3);
const bb = identity("test");

function first<Type>(arg: Type[]): Type | null {
    if (arg[0]) {
        return arg[0];
    }

    return null;
}

const cc = first(["abc", "def", 3]);

const dd: Array<string | number> = ["abc", "def", 3];

type identity<ArgTypes> = (arr: ArgTypes) => ArgTypes;

function consoleSize<Type extends { length: number }>(arg: Type) {
    console.log(arg.length);

    return arg;
}
const ee = consoleSize(["4", 3]);

//--------------------------------------------------------------------------------------------------------------
const compteur = document.querySelector<HTMLButtonElement>("#compteur");
let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector("span");
    if (span) {
        span.innerHTML = i.toString();
    }
};

compteur?.addEventListener("click", increment);

//-Classes---------------------------------------------------------------------------------------------
function reverse<T>(arr: readonly T[]): T[] {
    return [...arr].reverse();
}

class A {
    #private = 3;
    protected protected = 3;
    public = 5;

    log(): void {
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
    constructor(public a: number) {}
}

const dInstance = new D(3);
console.log(dInstance.a);

class Collection<T> {
    constructor(private items: T[]) {}

    add(item: T): this {
        this.items.push(item);
        return this;
    }

    first(): T | null {
        return this.items[0] || null;
    }
}

const collection = new Collection<number>([1, 2, 3]);
const ff = collection.add(6);
const bCollection = collection.first();

abstract class Geometry {
    x = 0;
    y = 0;

    abstract surface(): number;
}

class Triangle extends Geometry {
    x = 2;
    y = 2;

    surface() {
        return 3;
    }
}

class Carre {
    static #origin: { x: number; y: number };

    static {
        Carre.#origin = { x: 0, y: 0 };
    }
}

//-Interface only Object---------------------------------------------------------------------------------------------

interface Point {
    x: number;
}

//fusion
interface Point {
    y: number;
}

//modifier object global Window
interface Window {
    googleAnalytics: string;
}

window.googleAnalytics;

class TwoDimensionPoint implements Point {
    x = 2;
    y = 2;
}

function draw(p: Point) {}

draw(new TwoDimensionPoint());

//tuple array taille fixe
const aaa = [1, 2, 3] as const;

const bbb: [string, number] = ["tomate", 4];
const ccc: (string | number)[] = [55, "azert"];

type ListItem = [string, number];

const abc: ListItem = ["tomate", 22];
const bcs: ListItem = ["banane", 3];
const cba: string[] = [];

function merge<T extends unknown[], U extends unknown[]>(
    a: T,
    b: U
): [...T, ...U] {
    return [...a, ...b];
}

const aab = merge(abc, bcs);
const aac = merge(abc, [1, 2, 4]);

if (cba[0]) {
    console.log(cba[0].toUpperCase());
}
console.log(bcs[0].toUpperCase());

//emun--------------------------------------------------------------------------------------

const enum STEPS {
    Intro,
    Selection,
    Panier,
    Paiement,
}

const step: STEPS = STEPS.Selection;
console.log(step);

const TVA = 0.21;

type bookType = { name: string; description: string; price: number };

interface Book {
    name: string;
    description: string;
}

class Kindle implements Book {
    price: number;

    constructor(
        public name: string,
        public description: string,
        price: number
    ) {
        this.price = price;
    }

    getName = (): string => {
        return this.name;
    };
    getPrice = (): number => {
        return this.price + this.price * TVA;
    };
}

function createKindle(object: bookType): Kindle {
    const { name, description, price } = object;

    const kindle = new Kindle(name, description, price);
    return kindle;
}   

const harryPotter: bookType = {
    name: "Harry Potter à l'école des sorciers",
    description: "Les premières aventures du jeune sorcier Harry Potter",
    price: 8.75,
};

const harryPotter1 = createKindle(harryPotter);
console.log(harryPotter1.getPrice);
