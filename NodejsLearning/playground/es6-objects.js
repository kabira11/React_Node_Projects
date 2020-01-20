// Object property shorthand
const name = "Pankaj"
const userAge = 27

const user = {
    name,
    age: userAge,
    location: "ballia"
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label, stock, salePrice} = product

console.log(label)
console.log(stock)
console.log(salePrice)