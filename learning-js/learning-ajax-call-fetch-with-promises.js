//making ajax call for this type of request
// GET /endpoint?page=1 - { success: true, products: [...], end: false }
// GET /endpoint?page=2 - { success: true, products: [...], end: false }
// GET /endpoint?page=3 - { success: true, products: [...], end: true }
var page = 1
function getData (page) {
    // console.log(page)
    return new Promise((resolve , reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${page}`)
        .then((res) => {
            // console.log(res)
            resolve(res.json()) //this returns promise
        })
    })

}


async function dataHandler(){
    for(var i=1; i<4; i++){
        const data = await getData(i)
        console.log(data.id)
        if(data.id==2)
        return data
    }

}
dataHandler()
.then((data) => {
    console.log(data)
})