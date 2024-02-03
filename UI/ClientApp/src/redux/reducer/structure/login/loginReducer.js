import constants from '../../../data/constants'

const initialState = {
    role: '',
    email: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOGIN_CHANGE_ROLE:
            return { ...state, role: action.role }
        case constants.LOGIN_CHANGE_EMAIL:
            return { ...state, email: action.email }
        default:
            return state
    }
}

export default loginReducer
