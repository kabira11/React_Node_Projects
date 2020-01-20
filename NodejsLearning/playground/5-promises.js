// import { promises } from "fs";

// const doWorkCallback = new Promise((resolve,reject) => {

//     setTimeout(()=> {
//         // resolve([7,4,1])
//         reject('things went wrong..')
//     },2000)
// })

// doWorkCallback.then((result) => {
// console.log("success : ",result)
// }).catch((err) => {
// console.log(err)
// })


const add = (a , b) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)

    })
}

//below is the alter way of doing this
// add(1,2).then((sum) => {
//     console.log(sum)

//     add(sum, 3).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

//efficent way to do promises chaining
add(1,2).then((sum) => {
    console.log(sum)
    return add(sum,3)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})
