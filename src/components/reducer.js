// export const fetchUsers = (usersCount = 10) => {
//     return fetch
// }

const FETCH_USERS_REQUESTED = "users/FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "users/FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "users/FETCH_USERS_FAILED";
const USERS_RESET = "users/USERS_RESET";
const USER_ADD = "users/USER_ADD";
const COUNTER = "users/COUNTER";

const INITIAL_STATE = {
    users: [],
    isLoading: false,
    isError: false
};

const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED});
const fetchFailed = () => ({ type: FETCH_USERS_FAILED});
const fetchSucceeded = data => ({ type: FETCH_USERS_SUCCEEDED, payload: data });
const reset = () => ({ type: USERS_RESET})
const add = user => ({type: USER_ADD, payload: user})

export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchRequested())
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                dispatch(fetchSucceeded(data.slice(0,3)))
            })
            .catch(error => {
                dispatch(fetchFailed())
            })
    }
}
let elemUser = 1;
export const getOneUser = (elemUser) => {
    return function(dispatch) {
        dispatch(fetchRequested())
        fetch(`https://jsonplaceholder.typicode.com/users/${elemUser}`)
            .then(response => response.json())
            .then(data => {
                dispatch(add(data))
            })
            .catch(error => {
                dispatch(fetchFailed())
            })
    }
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                isError: false,
                users: action.payload
            };
        case FETCH_USERS_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case USERS_RESET:
            return {
                users: [],
                isLoading: false,
                isError: false
            };
        case USER_ADD:
            return {
                ...state,
                isLoading: false,
                isError: false,
                users:[...state.users, action.payload]
            };
        default:
            return state;
    }
};
export const resetUsers = () => (dispatch) => {
    dispatch(reset());
}