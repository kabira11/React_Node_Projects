/////////////////////////////////
// Lecture: Blocks and IIFEs

/*
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(a + b);
console.log(c);
// ES5
(function() {
    var c = 3;
})();
//console.log(c);
*/





/////////////////////////////////
// Lecture: Strings

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}
// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;

// New methods
console.log(n.startsWith('j'));// false
console.log(n.endsWith('Sm')); // false
console.log(n.includes('oh'));// contains or not
console.log(`${firstName} `.repeat(5));
*/



// Callback function example
function add (a, b , callback) {
    var sum = a + b
    callback(sum)
}

function disp(sum) {
    console.log(sum)
}


add(2,3,disp)




// Map in js

var roles = new Map(); 
roles.set('r1', 'User') 
.set('r2', 'Guest') 
.set('r3', 'Admin'); 
console.log(roles.get("r2"))


var str = 'hello world!!!'; 
console.log(str.startsWith('world',6));


var arr = [1,2,3,4,5,6,7,8,12]

const res = arr.filter((value) => {
    return value >= 3
})

console.log(res)

var arr1 = [1,2,3,4]

const res1 = arr1.reduce((total,value) => {
    return total + value
},20)

console.log(res1)