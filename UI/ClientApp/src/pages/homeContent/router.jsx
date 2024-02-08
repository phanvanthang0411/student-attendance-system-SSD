import React from 'react'
import HomeContent from '.'
import { connect } from 'react-redux'
import { LayoutAction } from '../../redux/action'

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    changeBreadcrumb: LayoutAction.changeBreadcrumb
}

class Router extends React.Component {
    constructor(props) {
        super(props)
        this.props.changeBreadcrumb('Trang chủ')
    }
    render() {
        return <HomeContent />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)
