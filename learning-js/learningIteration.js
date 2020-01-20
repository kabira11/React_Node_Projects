// Map check
// var array1 = [2,1,4,7,9]
// var array2 = array1.map(element => {
//     console.log(element)
//     return element*element
// })

// console.log(array2)


// Filter check
var array1 = [2,1,4,7,9]
var array2 = array1.filter(element => {
    console.log(element)
    return element > 5
})
console.log(typeof array1)

//array1.prototype.nationality = "English"
console.log(array1)
console.log(array2)

function obj(n,p) {
    this.name = n,
    this.prop = p
}
var pe = new obj ("siri","Ai")
console.log(pe)
obj.prototype.nationality = "lklklklk"
console.log(pe.nationality)

// Hoisting is JavaScript's default behavior of moving declarations to the top.

// Closure implemetation
// Closure implemetation
/*
In other words, closure is created when a child function keep the environment 
of the parent scope even after the parent function has already executed
*/

// A closure is a function having access to the parent scope, even after the parent function has closed.
/*
// Closure
An inner function has always access
to the variables and parameters of its outer function,
even after the outer function has returned.
*/
function foo(outer_arg) { 
  
    function inner(inner_arg) { 
        return outer_arg + inner_arg; 
    } 
    return inner; 
} 
var get_func_inner = foo(5); 

console.log(typeof get_func_inner)
  
console.log(get_func_inner(4)); 
console.log(get_func_inner(3)); 



