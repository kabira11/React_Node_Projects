
//from callback hell to promises....
const getIDs = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve([1,2,3,4,5])
    },1500)
})

const getRecipe = recID => {
    return new Promise((resolve , reject) => {
        setTimeout((id) => {
            const recipe = {title: 'Fresh tomato pasta' , publisher: 'Jonas'}
            resolve(`${id} : ${recipe.title}`)
        },1500,recID)
        //settimeout function  passing recID which is available as 'id'

    })
}

const getRelated = publisher => {
    return new Promise((resolve , reject) => {
        setTimeout((pub) => {
            const recipe = {title: 'Italian Pizza' , publisher: 'Jonas'}
            resolve(`${pub} : ${recipe.title}`)
        },1500,publisher)
    })
}

getIDs.then((ids) => {
    console.log(ids)
    return getRecipe(ids[2])
})
.then((recipe) => {
    console.log(recipe)
    return getRelated('pankaj')
})
.then((recipe) => {
    console.log(recipe)
})
.catch(err => {
    console.log(err)
})