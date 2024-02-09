import React from 'react'
import CommonTable from '../../../commonComponent/commontable'
import DefaultButton from '../../../commonComponent/defaultbutton'
import DefaultPanel from '../../../commonComponent/defaultpanel'
import { Delete, Edit } from '@mui/icons-material'
import './index.scss'
import { LayoutAction } from '../../../redux/action'
import { connect } from 'react-redux'

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    setGlobalLoading: LayoutAction.setGlobalLoading
}

class CandidateManagement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItems: [],
            isCreatePanelOpen: false,
            isEditPanelOpen: false
        }
    }

    onSelectItem = (selectedItems) => {
        this.setState({ selectedItems })
    }

    handleCreateButtonClick = () => {
        this.setState({ isCreatePanelOpen: true })
    }

    handleEditButtonClick = () => {
        this.setState({ isEditPanelOpen: true })
    }

    handleCancelButtonClick = () => {
        this.setState({ isCreatePanelOpen: false, isEditPanelOpen: false })
    }

    handleSaveCreatePanel = () => {
        this.props.setGlobalLoading(true)
        setTimeout(() => {
            this.props.setGlobalLoading(false), this.handleCancelButtonClick()
        }, 3000)
    }

    render() {
        return (
            <div className='a-candidate-management'>
                <div className='a-candidate-management-button'>
                    <DefaultButton buttonName={'Thêm'} variant='contained' onClick={this.handleCreateButtonClick} />
                    <DefaultButton
                        buttonName={'Sửa'}
                        startIcon={<Edit />}
                        variant='text'
                        disabled={this.state.selectedItems.length != 1}
                        onClick={this.handleEditButtonClick}
                    />
                    <DefaultButton
                        buttonName={'Xóa'}
                        startIcon={<Delete />}
                        variant='text'
                        disabled={this.state.selectedItems.length == 0}
                    />
                </div>
                <CommonTable onSelected={this.onSelectItem} />
                <DefaultPanel
                    isOpen={this.state.isCreatePanelOpen}
                    onCancelButtonClick={this.handleCancelButtonClick}
                    title={'Thêm thí sinh'}
                    onPrimaryButtonClick={this.handleSaveCreatePanel}
                />
                <DefaultPanel
                    isOpen={this.state.isEditPanelOpen}
                    onCancelButtonClick={this.handleCancelButtonClick}
                    title={'Sửa thí sinh' + this.state.selectedItems}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateManagement)