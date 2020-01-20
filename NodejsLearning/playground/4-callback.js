// setTimeout(() => {
//     console.log("Two seconds are up")
// }, 0)


// const names = ['pankaj' , 'parther' , 'yathu' , 'ravi']


// const shortNames = names.filter((name)=>{
//         return name.length <= 4
// })

// console.log(shortNames)


const add = (a, b, sum) => {
    setTimeout(() => {
        sum(a + b)
    },2000)

}


add(1, 4, (res) => {
    console.log(res)
})





// const doWorkCallback = (callBack) => {

//     setTimeout(()=> {
//         // callBack("this my error",undefined)
//         callBack(undefined,[1,2,3,4])
//     },2000)
// }

// doWorkCallback((err, res) => {
//     if(err){
//         console.log(err)
//     }

//     console.log(res)
// })