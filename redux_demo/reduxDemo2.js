const redux = require('redux')
const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE'

// Action creator
function buyCake() {
    return {
            type: BUY_CAKE,
            info:'First redux Action'
    }
}



// 
const initialState = {
    numOfCakes: 10
}

//Reducer Function

const reducer = (state = initialState , action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}



// store

const store = createStore(reducer)


// Gives current state of store
console.log("initial state" ,store.getState())

// store.subscribe() allow the app to subscribe the change to store
// Any time state update we log the update state
const unsubscribe = store.subscribe(() => console.log("update state" , store.getState()))

//calling action the help of dispatch()
// store provide the dispatch() to update the state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

//we simply unsubscribe to any changes in this store
unsubscribe()

//below line wont call subscribe method coz we already unsubscribe
store.dispatch(buyCake())

// O/P :
// initial state { numOfCakes: 10, numOfIceCreams: 20 }
// update state { numOfCakes: 9, numOfIceCreams: 20 }
// update state { numOfCakes: 8, numOfIceCreams: 20 }
// update state { numOfCakes: 7, numOfIceCreams: 20 }
// update state { numOfCakes: 7, numOfIceCreams: 19 }
// update state { numOfCakes: 7, numOfIceCreams: 18 }