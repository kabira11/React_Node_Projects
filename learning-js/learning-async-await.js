//from promises to async await....
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


async function getRecipeAW () {
    const IDs = await getIDs
    console.log("IDS")
    console.log(IDs)
    const recipe = await getRecipe(IDs[2])
    console.log("recipe")
    console.log(recipe)
    const related = await getRelated('Pankaj Bhardwaj')
    console.log("related")
    console.log(related)

    return recipe
}
//async function always return promise
getRecipeAW()
.then((result) => {
    console.log(`${result} is the best ever`)
})