import { ALL_DATA, LOGGED_IN, SET_USER, SORT } from "./actions";


const init = { isLoggedIn: false, data: null, };


export const reducer = (store = init, { type, payload }) => {
    switch (type) {

        case LOGGED_IN:
            return {...store, isLoggedIn: payload }

            // case SET_USER:
            //     return {...store }

        case ALL_DATA:
            return {...store, data: payload }

        case SORT:
            return {...store, data: [...store.data].sort((a, b) => { return a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0 }) }
        default:
            return store;
    }
};