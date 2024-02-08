import constants from '../../../data/constants'

const changeBreadcrumb = (breadcrumb) => (dispatch) => {
    dispatch({ type: constants.LAYOUT_BREADCRUMB_CHANGE, breadcrumb: breadcrumb })
}

export { changeBreadcrumb }
