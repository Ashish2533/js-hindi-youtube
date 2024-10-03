const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(3))



const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));

const otherNumber2 = 123.8966
// console.log(otherNumber2.toPrecision(3));

const otherNumber3 = 1123.8966
// console.log(otherNumber3.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString());


// en-IN is used for indian number system


// ++++++++++++++ Maths +++++++++++++++++++++ // 

console.log(Math)
// Run the above code in Console to get the all Maths Value //

// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
// Math.random value gives the output between 0 to 1 but not gives 1 value //


console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// We have written +1 so we can get the minimu value 1 or more than that otherwise we can get 0.1 or like decimal no. //


const min = 10
const max = 20

console.log(Math.floor (Math.random() * (max - min + 1)) + min)
