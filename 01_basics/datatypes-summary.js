/* Primitive Data Types are of 7 Types: 
String, Number, Boolean, null, undefined, Symbol, BigInt */ 

const score = 100          // number    
const scoreValue = 100.3  // number
const isLoggedIn = false // boolean
const outsideTemp = null
let userEmail;


const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId) // output will be false 

/*Refrence (or) Non-Primitive Data Types
Array, Objects, Functions
*/

const heros = ["shaktiman", "naagraj", "doga"] // Array

let myObject = {
    name1: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}