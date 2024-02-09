import Calendar from './home'
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
        this.props.changeBreadcrumb('Lịch thi')
    }
    render() {
        return <Calendar />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)
