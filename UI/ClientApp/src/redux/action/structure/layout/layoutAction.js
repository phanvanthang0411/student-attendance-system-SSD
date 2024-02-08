import constants from '../../../data/constants'

const changeBreadcrumb = (breadcrumb) => (dispatch) => {
    dispatch({ type: constants.LAYOUT_BREADCRUMB_CHANGE, breadcrumb: breadcrumb })
}

const setGlobalLoading = (isLoading) => (dispatch) => {
    dispatch({ type: constants.LAYOUT_GLOBAL_LOADING_SET, globalLoading: isLoading })
}

export { changeBreadcrumb, setGlobalLoading }
