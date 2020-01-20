const fs = require('fs');
// const book = {
//     title: "Ego is the enemy.",
//     author: 'Ryan Holiday.'
// }

//take a object and convert it into json.
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON);
// console.log(bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer.toString())
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Ravi Singh";
data.age = 199;
const userJSON = JSON.stringify(data)
console.log(userJSON)
fs.writeFileSync("1-json.json",userJSON);

//take a json and convert it int js object.
// const parseData = JSON.parse(bookJSON)
// console.log(parseData)
