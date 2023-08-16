var a = 45;
var Name = "  Animesh  ";
var xx = 'boy';
console.log(`${Name} is a good ${xx} ` + a);    // ->   Animesh   is a good boy 45

let string = 'This is one of a string';
// lentgh of a string
console.log(string.length);
// first occurance of a substring
console.log(string.indexOf('is'));
// last occuarance of a substring
console.log(string.lastIndexOf('is'));
// substring of a string
console.log(string.slice(3, 7));                // -> [first_index, last_index)
console.log(string.substring(3, 7));            // -> [first_index, last_index)
console.log(string.substr(3, 5));               // -> [first_index, number of character]
// Make a new string by replace any substring
console.log(string.replace('string', Name));    // -> This is one of a   Animesh  
// Make a new string with uppercase
console.log(string.toUpperCase());              // -> THIS IS ONE OF A STRING
// Make a new string with lowercase
console.log(string.toLowerCase());              // -> this is one of a string
// Make a new string with concating
console.log(string.concat(Name));               // -> This is one of a string  Animesh  
// trimming blank spaces from first and last position of the string
console.log(Name.trim());                       // -> Animesh
// access any charater of a string
console.log(Name.charAt(4));                    // -> i
console.log(Name[4]);                           // -> i

// Objects
let employee = {
    name: "Animesh",
    dept: "CSE",
    roll: 21101104018,
    title: undefined
};
console.log(employee);
console.log(employee.name);
console.log(employee[`dept`]);
// Array \ List
let arr = [34, 12, "Animesh", undefined];
let arr2 = new Array(125, "hello", 12.25, true, undefined);
console.log(arr);
console.log(arr2);
console.log(arr2.sort());

// Function
function sum(a, b, c = 1) { // if c is not passed through call of function it's default value is 1
    let d = a + b * c;
    return d;
}
console.log(sum(45, 6));
console.log(sum(45, 6, 4));

// Alert, confirm, Prompt
if (confirm("Are you 18+ old?"))
    console.log(prompt("Please enter your name", "Guest"));
else
    alert("Please don't click on any third party ads!!!");

// Loops
// indexive for loop
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
// for each loop
arr.forEach(element => {
    console.log(element);
});
// for each loop with function
arr2.forEach(function f(element) {
    console.log(element);
});
// for of loop
for (const elements of arr2) {
    console.log(elements);
}
// for in loop
for (const key in employee) {
    console.log(key + " of the employee is " + employee[key]);
}

// DOM element accessing
console.log(document.getElementById('navbar'));
console.log(document.getElementsByClassName('container'));      // return a array of all container class elements
console.log(document.querySelector('.container'));              // return only the first element of container class

// events and listening
// Some events: click, mouseover, mouseout, contextmenu, mousedown, mouseup, mousemove, submit, focus, transitionend DOMContentLoaded etc
function toggleHide(_id, _btn) {
    let btn = document.getElementById(_btn);
    let id = document.getElementById(_id);
    if (id.style.display != 'none') {
        id.style.display = 'none';
        btn.innerHTML = "Show";
    }
    else {
        id.style.display = 'block';
        btn.innerHTML = 'Hide';
    }
}

// Time out \ time interval
function greet(_name, _statement) {
    console.log(`Hello ${_name}, ${_statement}!!`);
}
timeOut = setTimeout(greet, 5000, "Animesh", "Good Morning");
clearInterval(timeOut);
function displaytime() {
    let time = new Date();
    document.getElementById('showtime').innerHTML = time;
}
setInterval(displaytime, 1000);
// Date/time
// time = new Date('year', 'month', 'date', 'hour', 'minute', 'second', 'milisecond');
let time = new Date();
time.setMonth(12);
console.log(time.getDate());
console.log(time.getFullYear());
console.log(time.getMonth());
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(Date.now());

// Array function & this in Object
let obj = {
    names : ["Animesh", "Akash", "Sayan", "Vivek"],
    speak(){
        this.names.forEach(student => console.log("Hello, " + student));
    }
}
obj.speak();

// Math functions
console.log(Math);

// JSON
// JSON to string 
employee = JSON.stringify(employee);
console.log(employee);
// String to JSON 
employee = JSON.parse(employee);
console.log(employee);
