// Calculate height of triangle with the help of Quadratic equation.
var height = Math.floor((-1 + Math.sqrt(1+8*3))/2) // On the place of 100 we can put watever positive number we want. 

// Calculate max number of triangle i.e we can find this with the help of sum of n natural numbers.
var upto = height*(height + 1)/2
// This counter is useful for printing number
var counter = height

// Calculating first row ,first data from where triangle starts
var inc = upto - counter + 1
// Outer loop for iterating upto height of triangle.
for(var i = 1 ; i <= height ; i++){
var result = ""
// Inner loop for each row
  for(var j = 1 ; j <= counter ; j++){
    result = result  +  inc++  + " ";
    
}
counter--
// Calculate start point for next row. 
inc = counter*(counter + 1)/2 - counter + 1
// printing each row
console.log(result)
}