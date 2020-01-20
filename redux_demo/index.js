const redux = require('redux')
const reduxLogger = require('redux-logger')


const createStore = redux.createStore
const combineReduces = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger()



const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action creator
function buyCake() {
    return {
            type: BUY_CAKE,
            info:'First redux Action'
    }
}
// Action creator
function buyIceCream() {
    return {
            type: BUY_ICECREAM,
            info:'First redux Action'
    }
}



// Reducer
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}

//Reducer Function

const reducer = (state = initialState , action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}


//Reducer Function

const cakeReducer = (state = initialCakeState , action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}


//Reducer Function

const iceCreamReducer = (state = initialIceCreamState , action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}





// store
const rootReducer = combineReduces({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleWare(logger))


// Gives current state of store
console.log("initial state" ,store.getState().cake)

// store.subscribe() allow the app to subscribe the change to store
// Any time state update we log the update state
const unsubscribe = store.subscribe(() =>{})

//calling action the help of dispatch()
// store provide the dispatch() to update the state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

//we simply unsubscribe to any changes in this store
unsubscribe()

//below line wont call subscribe method coz we already unsubscribe
store.dispatch(buyCake())

// O/P :
// initial state { numOfCakes: 10 }
// update state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 
// } }
// update state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 
// } }
// update state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 
// } }
// update state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 
// } }
// update state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 18 
// } }



// Middle ware provides a third party extension point between dispatching an action , and the moment it reaches the reducer
// Uses for logging, crash report, performing asynchronous tasks etc
