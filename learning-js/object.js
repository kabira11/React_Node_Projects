function obj(n,p) {
    this.name = n,
    this.prop = p
}
var pe = new obj ("siri","Ai")
console.log(pe)
obj.prototype.nationality = "lklklklk"
console.log(pe.nationality)

/////////////////////////////
// Lecture: Object.create
///*
// calculateAge() below is a prototype 
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';
console.log(john)
var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
//*/


var a = {
    name: "pakaj",
}

var b = Object.create(a)

b.name = "pppppp"
b.age = 34

console.log(a)
console.log(b)


// Primitives vs objects


// primitives
var a  = 23
var b = a
var a = 46

console.log(a) // 46
console.log(b) // 23

// Objects
var obj1 = {
    name: 'pankaj',
    age: 28
}

var obj2 = obj1

obj1.age = 30

console.log(obj1.age)// 30
console.log(obj2.age)// 30

// Functions
var age = 27
var obj = {
    name: 'AAAAAA',
    city: 'Ballia'
}

function change (a , b) {
    a = 30
    b.city = 'bangalore'
}

change(age , obj);

console.log(age)
console.log(obj.city)


// call bind apply method
/////////////////////////////
// Lecture: Bind, call and apply
///*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + 
            ', Ladies and gentlemen! I\'m ' 
            +  this.name + ', I\'m a ' + this.job + 
            ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' 
            +  this.name + ', I\'m a ' + this.job + 
            ' and I\'m ' + this.age + 
            ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};
john.presentation('formal', 'morning');
// Now we want to use presentation () of john 0bject
// we have to use call() for method borrowning
// john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, ['friendly', 'afternoon']);

/* So the bind is very similar to the call method as well,

// so it also allows us to set the this variable explicitly.

// However, the difference here is

// that bind doesn't immediately call the function,

// but instead it generates a copy of the function

// so that we can store it somewhere.

// And that can actually be extremely useful

// to create functions with preset arguments.

*/
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
// Another cool example
/*
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el;
}
function isFullAge(limit, el) {
    return el >= limit;
}
var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/


