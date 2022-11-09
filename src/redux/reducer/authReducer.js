const initialState = {
    name: '',
    email: '',
    isAuth: false
}


export const authProses = (state = initialState, action) => {
    if (action.type === "login") {
        return {
            ...state,
            name: action.name,
            email: action.email,
            isAuth: true
        }
    }

    return state
}

