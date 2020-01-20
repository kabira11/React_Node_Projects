const get = new Promise((resolve , reject) => {

})


function getData () {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(async response => {
        console.log( await response.json())
        return 2
    })
    .then(async pageNo => {
        const req =  await fetch(`https://jsonplaceholder.typicode.com/posts/${pageNo}`)
        console.log(await req.json())
        return 3
 
    })
    .then(async (pageNo) => {
        // result.json()
        console.log(await fetch(`https://jsonplaceholder.typicode.com/posts/${pageNo}`))
        // console.log(await result.json())
    })
}

getData()

