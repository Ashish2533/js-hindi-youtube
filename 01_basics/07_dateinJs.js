// Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// typeof Date is an Object

let myCreatedDate = new Date (2023, 0, 23) // In JS month started from 0 and it gives January
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date (2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date ("01-14-2023")
console.log(myCreatedDate3.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Date.now());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString("default", {
    weekday: "long"
})

