const fs = require('fs');

// Reading file and storing data.
const dataBuffer = fs.readFileSync('test.txt')
// Converting buffer data to string and then covert into array of string on basis of comma.
const arr = dataBuffer.toString().split(',')
// Array for checking triangle number.
//const arrNum = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
// Count result.
var count = 0;

// Loop for iterating the whole array of String "arr".
for (let i = 0 ; i < arr.length  ; i++) {
// Replace double quotes from String.
var strarr = arr[i].replace(/\"/g, "")
// Sum counter.
var sum = 0
// Iterator for Individual string from Array of String "arr" for calculating sum of all character.
for (let j = 0 ; j < strarr.length  ; j++) {
    // Adding each character value to the sum varaible
    sum += strarr.charCodeAt(j) - 64
}
// Condition check wheter sum is exist in "arrNum" or not.
if (checkTriangle(sum)){
    count++;
}

}
// Print count.
console.log(count)

// function for checking triangle number
function checkTriangle (sum) {
    var height = Math.floor((-1 + Math.sqrt(1+8*sum))/2)
    var triangleNumber = height*(height + 1)/2

    if(triangleNumber == sum)
    {
        return true
    }else {
        return false
    }


}


// Points I am considering that
// 1. word.txt file should be there.
// 2. data in word.txt is in this format -----> "LKLKLAKLSKA","KNCNVXCNVM"

