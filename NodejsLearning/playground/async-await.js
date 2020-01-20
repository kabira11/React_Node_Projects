const add = (a , b) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {

            if (a < 0 || b < 0) {
                return reject("number must be positive")
            }
            resolve(a + b)
        }, 2000)
        // below code is for quick response
        // resolve(a + b)

    })
}


//this is wait for 6 second
const doAdd = async () => {
    const sum = await add(1, 99)
    const sum1 = await add(sum, 500)
    const sum2 = await add(sum1, 3)
    return sum2
}

// console.log(doWork())

doAdd().then( (result) => {
    console.log('result', result)
}).catch((e) => {
    console.log(e)
})
