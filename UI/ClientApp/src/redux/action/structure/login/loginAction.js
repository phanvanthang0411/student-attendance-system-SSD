import constants from '../../../data/constants'

const changRole = (role) => (dispatch) => {
    dispatch({ type: constants.LOGIN_CHANGE_ROLE, role: role })
}

const changeEmail = (email) => (dispatch) => {
    dispatch({ type: constants.LOGIN_CHANGE_EMAIL, email: email })
}

export { changRole, changeEmail }
