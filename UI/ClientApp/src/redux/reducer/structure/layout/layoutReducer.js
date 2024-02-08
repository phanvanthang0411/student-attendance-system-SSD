import constants from '../../../data/constants'

const initialState = {
    breadcrumb: '',
    globalLoading: false
}

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LAYOUT_BREADCRUMB_CHANGE:
            return { ...state, breadcrumb: action.breadcrumb }
        case constants.LAYOUT_GLOBAL_LOADING_SET:
            return { ...state, globalLoading: action.globalLoading }
        default:
            return state
    }
}

export default layoutReducer
