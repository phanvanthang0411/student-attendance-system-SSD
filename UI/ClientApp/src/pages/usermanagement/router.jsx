import UserManagement from './home'
import React from 'react'
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
        this.props.changeBreadcrumb('Quản lý tài khoản')
    }
    render() {
        return <UserManagement />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)
