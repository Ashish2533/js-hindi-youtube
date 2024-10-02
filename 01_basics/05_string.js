const name  ="hitesh"
const repoCount = 50

console.log(name + repoCount + " Value")

// above code is not used in modern time for concatenation, we will be using Backtick (``) //
// In between ${} dollar and curly braces you can write the Variable name and it is the modern way to write//

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String ('hiteshhc')

console.log(gameName);

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt("2"));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4)
console.log(newString);

// substring give Output hite which is 0,1,2,3 index = 4 element , it doesn't give the 4th element in the output //


const anotherString = gameName.slice(-8, 4) 
// in slice we can write -ve value also //
console.log(anotherString);

const newStringOne = "               hitesh         "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))


const gameName2 = ('hitesh-hc-com')
console.log(gameName2.split('-'));

/* String is below website check and learn all about string  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/


