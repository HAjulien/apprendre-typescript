"use strict";
/**
const a : string = "hello word"
const n : number = 12
const b : boolean = true
const d : null = null

const arr : string[] = ["azer", "tyu", "iop"]
const arr2 : any[] = [23, true, "STRING"]

const user : { firstName : string, [key : string]: string } = { firstName : "John" , lastName : "Doe" , sister : "Jane"}
const user2 : { firstName : string, lastName?: string} = { firstName : "Johnny" , lastName : "Dawson" }

const date : Date = new Date()

const callBack : (e : MouseEvent) => void = (e : MouseEvent) : number => {
    return 3
}

function printId(id : number | string): void {
    console.log( id.toString() );
    
}

const compteur = document.querySelector('#compteur') as HTMLButtonElement  //force le type : insertion de type
// const compteur = <HTMLButtonElement> document.querySelector('#compteur')
*/
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
