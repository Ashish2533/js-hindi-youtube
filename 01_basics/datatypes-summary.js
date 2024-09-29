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


/* Memory are of 2 types: Stack Memory & Heap Memory 
 Stack (Primitive data types are used )
 Heap (Non-Primitive data types are used)


 In Stack you get the Copy
 & In Heap you get the Refrence
*/ 

// Stack Memory // 
let myYotubeName = "hiteshchoudharydotcom"

let anotherName = myYotubeName
anotherName = "chaiaurcode"

console.log(myYotubeName)
console.log(anotherName)

// ***************** Heap Memory************************** //

let userOne = {
    email: "user@google.com",
    upiId: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)



