// var => Function scope
// let and const => Block Scope 

var myname = "Animesh";
console.log(myname);
myname = "Animesh Bag";
console.log(myname);

const myname2 = "Animesh";
console.log(myname2);
myname2 = "Animesh Bag";
console.log(myname2);

// var can be used anywhere outside a block
if(true) {
    var myname = "Animesh";
    console.log(myname);
}
console.log(myname);

// let can't be used outside the defined block scope
if(true) {
    let myname = "Animesh";
    console.log(myname);
}
console.log(myname);

let myName3 = "Animesh";
console.log("Welcome, " + myName3);
console.log(`Welcome, ${myName3}`);

// Flat arrow function
const sum2 = () => `sum = ${(a = 5) + (b = 6)}`;
console.log(sum2());

let myFriends = ['Animesh', "Akash", 34, 45.78, "Sayan", "Vivek"];
// For loops : 
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}
for(let friend in myFriends) {
    console.log(friend);
}
for (const friend of myFriends) {
    console.log(friend);
}
myFriends.forEach(function (element, index, array) {
    console.log(element + '->' + index + '->' + array);
});
myFriends.forEach((element, index, array) => {
    console.log(element + ' -> ' + index + ' -> ' + array);
})

// Search and Filter
console.log(myFriends.indexOf("Sayan", 1));  // return the first index of "Sayan" from index 1 search forward
console.log(myFriends.lastIndexOf("Sayan", 1)); // return the last index of "Sayan" from index 1 search backward
console.log(myFriends.includes("Sayan", 2));    // return true/false according found or not from index 2 searched forward
console.log(myFriends.find());
console.log(myFriends.findIndex());
console.log(myFriends.filter((element) => element > "Akash"));

// Sorting 
console.log(myFriends.sort());
console.log(myFriends.sort((a, b) => b - a));

// Adding in array
console.log(myFriends.push('Arnab', 'Prem', 'Ardhendu'));    // add one or more elements in the end of the array and return the new size of array
console.log(myFriends);
console.log(myFriends.unshift('Anurup', 'Spandan'));    // add one or more elements in the begining of the array and return new size of array
console.log(myFriends);

// Deleting from array
console.log(myFriends.pop());   // remove the last element and return the element
console.log(myFriends);
console.log(myFriends.shift());   // remove the first element and return the element
console.log(myFriends);

// Add, delete, replace in array
console.log(myFriends.splice(2, 2, "Rohan", "Raj"));   // splice(start index, deleted count, tobeInsertedStrings) return the deleted portion of array
console.log(myFriends);

// Map method
console.log(myFriends.map((friend) => friend > "Animesh")); // return a new array without any change in main array
let nums = [2, 4, 3, 5, 8, 6, 7];
console.log(nums.map((element) => 2 * element).filter((element) => element > 10));  // map with chainable format
// Reduce method
console.log(nums.reduce((sum, element, index, arr) => sum += element, 50)); // return single value after any operation with array   // A initial value can be added after function


// Strings 
console.log("Hello I am \"Animesh\". I will failed.");  // Using escape character
console.log('Hello I am "Animesh". I will failed.');  // Using different quotes

// Search in string
const str2 = "Welcome to js notes from Animesh";
console.log(str2.indexOf("to", 3));    // return the first found index after given position else -1  search forward
console.log(str2.lastIndexOf("to", 10));    // return the last found index before given position else -1  search backward
console.log(str2.search("to"));    // return the first found index else -1  search forward

// Extracting string parts 
// Slice
console.log(str.slice(2, 9));  // return the [start, end) part from the string
console.log(str.slice(2, -4));  // negating index start from last
// Substring
console.log(str.substring(2, 10));  // Same function as slice but don't consider negative index
console.log(str.substring(2, -5));  // if negative index passes it ignore the negative numbers and consider the substring 0 to the positive index passes
// Substr
console.log(str.substr(-10, 4));  // return the string from given index with given length
console.log(str.substr(10));    // the first arguement can be negative or positive index but length can't be negative
console.log(str.substr(-10));    // by default the second argument is infinite

// Replace
console.log(str.replace("js", "Javascript"));   // Repalce the the first data found with string and give a new string

// Access character from string 
console.log(str.charAt(2));
console.log(str.charCodeAt(2));
console.log(str[2]);    // property access []

// Upper and lower case
console.log(str.toUpperCase()); // return a new string with all capital
console.log(str.toLowerCase()); // return a new string with all lower

// Concatination
let fname = 'Animesh';
let lname = 'Bag';
console.log(fname + lname);
console.log(`${fname} ${lname}`);
console.log(fname.concat(lname));
console.log(fname.concat(' ', lname));

// Trim 
let str3 = "           haha       kolapuri           ";
console.log(ss.trim()); // remove whitespaces from both sides of a string

// split string to array 
let str = 'a,b c|d, e';
console.log(str.split(','));    // split on basis of comma
console.log(str.split(' '));    // split on basis of space
console.log(str.split('|'));    // split on basis of vertical bar

// Date and time
let curTime = new Date();
console.log(curTime);    // 2023-03-24T09:24:13.247Z
console.log(curTime.toISOString());  // 2023-03-24T09:24:13.247Z 
console.log(curTime.toUTCString());  // Fri, 24 Mar 2023 09:24:13 GMT
console.log(curTime.toLocaleString());   // 24/3/2023, 2:54:13 pm
console.log(curTime.toString());     // Fri Mar 24 2023 14:54:13 GMT+0530 (India Standard Time)
console.log(Date.now());    // Return the milliseconds passes from 1st Jan 1970 00:00:00 UTC
console.log(new Date(2023, 1, 14, 12, 0, 0, 0).toString()); // passes year, month, date, hour, minute, second, milisecond
console.log(new Date("February 14, 2003 12:37:00").toString()); // passes string with date and time
console.log(new Date(1679651678086).toString());   // set date with milliseconds
// Get Time
console.log(curTime.getTime());     // return time miliseconds
console.log(curTime.getDate());     // return the current date
console.log(curTime.getFullYear()); // return the current year
console.log(curTime.getMonth());    // return the current month
console.log(curTime.getDay());      // rerurn the current week day count
console.log(curTime.getHours());    // return current hours
console.log(curTime.getMinutes());  // return current minutes
console.log(curTime.getSeconds());  // return current seconds
console.log(curTime.getMilliseconds()); // return current milliseconds
// Set Time
console.log(curTime.setTime(1679651678086));     // return and set time miliseconds
console.log(curTime.setDate(14));     // return and set the current date
console.log(curTime.setFullYear(2003)); // return and set the current year
console.log(curTime.setMonth(1));    // return and set the current month
console.log(curTime.setHours(11));    // return and set current hours
console.log(curTime.setMinutes(37));  // return and set current minutes
console.log(curTime.setSeconds(14));  // return and set current seconds
console.log(curTime.setMilliseconds(665)); // return and set current milliseconds
// Practical Time Shown
console.log(curTime.toLocaleTimeString())   // Show only time
console.log(curTime.toLocaleDateString())   // Show only date
console.log(curTime.toLocaleString())   // Show date and time

// Math Object
console.log(Math.PI);
console.log(Math.round(Math.PI));
console.log(Math.pow(2, 5));
console.log(Math.sqrt(69));
console.log(Math.abs(-69.4));
console.log(Math.ceil(92.1));
console.log(Math.floor(92.1));
console.log(Math.min(2, 5, 7, 9, -1, -4));
console.log(Math.max(2, 5, 7, 9, -1, -4));
console.log(Math.floor(Math.random() * 10));    // Math.random gives a decimal number between [0, 1)
console.log(Math.trunc(23.07));     // return only the integer part of a number


// DOM Vs BOM
//  Window -->
// BOM(Browser Object Model) - navigator, screen, location, frames, history
// showHistoryJS.html
// window.history.back();

// DOM(Document Object Model)
document.body.childNodes();
document.body.children();
document.body.childElementCount();
document.body.hasChildNodes();
document.body.firstElementChild;
document.body.lastElementChild;
document.body.parentElement;
document.body.nextElementSibling;
document.body.previousElementSibling;

document.getElementById('heading');
document.querySelector('#heading');
document.getElementsByClassName('para');
document.querySelectorAll('.para');
document.getElementsByName('gender');
document.getElementsByTagName('button');
document.querySelectorAll('button');

document.querySelector('button').addEventListener('click', () => alert("Event Listener use"));
document.querySelector('button').addEventListener('mousedown', () => alert("Event Listener use"));
document.querySelector('button').addEventListener('mouseup', () => alert("Event Listener use"));
document.querySelector('button').addEventListener('mouseenter', () => alert("Event Listener use"));
document.querySelector('button').addEventListener('mouseleave', () => alert("Event Listener use"));

// Array Destructure
const myBio = ["Animesh", "Bag", 18, 20];
let [myFname, myLname, myRoll, myAge] = myBio;
// Object Destructure
const myBio2 = {
    fname : "Animesh",
    lname : "Bag",
    roll : 18,
    age : 20
};
let {myFname2, myLname2, myRoll2, myAge2, dept = "CSE"} = myBio2;

// Object Properties
let myName = "Animesh", myAge3 = 20, myRoll3 = 18;
const myBio3 = {
    [myName] : myName,  // dynamic key can be written inside []
    myAge,              // if key and value both are same not require to write both
    [myRoll] : "is my Roll no"
};
console.log(myBio3);

// Spread Operator
const arr = ["Hey", "Hi", "Love", "Hello"];
const arr2 = [...arr, "Black", "Green"];    // Copy all element of arr to arr2
console.log(arr2);
const arr3 = {
    a : "Hey", 
    b : "Hi", 
    c : "Love", 
    d : "Hello"
};
const arr4 = {
    ...arr3,
    e : "Black",
    f : "Green"
};    // Copy all element of arr3 to arr4
console.log(arr4);

// Array Flating
let arr5 = ["a", "b", "c", ["d", "e"], ["f", ["g", "h", "i"]]];
console.log(arr5.flat(1));
console.log(arr5.flat(Infinity));

// Object entries
const obj = {
    name : "Animesh",
    age : 20,
    roll : 18
};
let arr6 = Object.entries(obj);
console.log(arr6);
console.log(Object.fromEntries(arr6));

// bigInt   15n

// Event Capturing
// The event is first captured by outermost elements then propagated to inner element (trickling)
// Event Bubbling
// The event is first captured and handled by innermost element and then propagated to outer element 
// event.stopPropagation();
document.querySelector('#button').addEventListener('click', () => {alert('Event bubbling happening'), false});  // By default
document.querySelector('#button').addEventListener('click', () => {alert('Event capturing happening'), true});

// Callback function and Higher Order Function
// Calculator => Higher Order Function && add, sub, mul, div => Callback Function
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const calculate = (a, b, operation) => operation(a, b);
console.log(calculate(10, 6, add));
console.log(calculate(10, 6, sub));
console.log(calculate(10, 6, mul));
console.log(calculate(10, 6, div));

// Closure
const outermost = (a) => {
    let b = 10;
    const innermost = () => {
        console.log(`a + b = ${a + b}`);
    }
    return innermost;
}
const closure = outermost(5);
console.log(closure);
console.log(closure());


// Synchronous And Asynchronous Javascript
// Synchronous
const f2 = () => console.log("function 2 running");
const f1 = () => {
    console.log("running f1..");
    f2();
    console.log("running f1 again..");
}
f1();

// Asynchronous
const f4 = () => {
    setTimeout(() => {
        console.log("function 2 running");
    }, 2000);
}
const f3 = () => {
    console.log("running f1..");
    f2();
    console.log("running f1 again..");
}
f3();


// Currying
const sum = (num1) =>  (num2) =>  (num3) => num1 + num2 + num3;
console.log(sum(6)(7)(8));

// JSON file
const myData = {
    name : "Animesh",
    roll : 18,
    age : 20,
    dept : "CSE"
};
console.log(myData);
const jsondata = JSON.stringify(myData);
console.log(jsondata);
const myData2 = JSON.parse(jsondata);
console.log(myData2);

// Module export
module.exports = {add, sub, mul, div};