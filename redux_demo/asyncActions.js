const redux = require('redux')
const createStore = redux.createStore
const applyMiddleWare = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')




const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL'


// Action creator
const  fetchUsersRequest = () => {
    return {
            type: FETCH_USERS_REQUEST
    }
}

// Action creator
const  fetchUsersSuccess = (users) => {
    return {
            type: FETCH_USERS_SUCCESS,
            payload: users
    }
}

// Action creator
const  fetchUsersFail = (error) => {
    return {
            type: FETCH_USERS_FAIL,
            payload: error
    }
}



const reducer = (state = initialState , action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return {
            ...state,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAIL: return {
            ...state,
            loading: false,
            users: [],
            error: action.payload
        }

        default: return state
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            // res.data is the array of users
            const users = res.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch((error) => {
            // error.message is the error description
            dispatch(fetchUsersFail(error.message))
        })
    }
}

const store = createStore(reducer,applyMiddleWare(thunkMiddleware))

store.subscribe(() => {console.log(store.getState())})

store.dispatch(fetchUsers())

//redux-thunk
// Define async action creators
// Middleware

// Action creators returns an action
// But thunk middle ware, ability for an action creator to return a function instead of object

