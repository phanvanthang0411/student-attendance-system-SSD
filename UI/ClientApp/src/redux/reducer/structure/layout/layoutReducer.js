import constants from '../../../data/constants'

const initialState = {
    breadcrumb: ''
}

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LAYOUT_BREADCRUMB_CHANGE:
            return { ...state, breadcrumb: action.breadcrumb }
        default:
            return state
    }
}

export default layoutReducer
