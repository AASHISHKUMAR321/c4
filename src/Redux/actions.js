// action types

export const LOGGED_IN = "LOGGED_IN";
export const SET_USER = "SET_USER";
export const ALL_DATA = "ALL_DATA"
export const SORT = "SORT"





// Action Creators

export const logedIn = (data) => {

    return {
        type: LOGGED_IN,
        payload: data
    }
}

export const setUser = (data) => {

    return {
        type: SET_USER,
        payload: data
    }
}

export const allData = (data) => {

    return {
        type: ALL_DATA,
        payload: data
    }

}
export const sort = (by) => {



    return {
        type: SORT,
        payload: by
    }
}