import React from 'react'
import CommonTable from '../../../commonComponent/commontable'
import DefaultButton from '../../../commonComponent/defaultbutton'
import DefaultPanel from '../../../commonComponent/defaultpanel'
import { Delete, Edit } from '@mui/icons-material'
import './index.scss'
import { LayoutAction } from '../../../redux/action'
import { connect } from 'react-redux'
import DefaultTextField from '../../../commonComponent/defaulttextfield'
import DefaultSelect from '../../../commonComponent/defaultselect'
import CommonImageUpload from '../../../commonComponent/commonimageupload'

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
            isEditPanelOpen: false,
            createdItem: {
                name: '',
                email: '',
                password: '',
                role: '',
                image: []
            }
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

    roleItems = [
        { key: 'ak-admin', text: 'Admin' },
        { key: 'ak-candidate', text: 'Thí sinh' },
        { key: 'ak-supervior', text: 'Giám thị' }
    ]

    handleImageChange = () => {}

    onRoleChange = (value) => {
        this.setState({ createdItem: { ...this.setState.createdItem, role: value } })
    }

    onRenderPanelContent = () => {
        return (
            <div className='a-candidatemanagement-panel'>
                <DefaultTextField label={'Họ và tên'} required />
                <DefaultTextField label={'Email'} required />
                <DefaultTextField label={'Password'} required />
                <DefaultSelect label={'Vai trò'} required items={this.roleItems} onChange={this.onRoleChange} />
                {this.state.createdItem.role == 'Thí sinh' && (
                    <CommonImageUpload onChange={this.handleImageChange} label={'Dữ liệu khuôn mặt'} required />
                )}
            </div>
        )
    }

    columns = [
        { field: 'id', headerName: 'Id', width: 70 },
        { field: 'userName', headerName: 'Họ và tên', width: 180 },
        {
            field: 'email',
            headerName: 'Email',
            width: 200
        },
        {
            field: 'password',
            headerName: 'Mật Khẩu',
            width: 160
        }
    ]

    rows = [
        { id: 1, userName: 'Trần Xuân Khải', email: 'khaitran982001@gmail.com', password: '1qaz2wsxE' },
        { id: 2, userName: 'Phan Văn Thắng', email: 'thangphan@gmail.com', password: '1qaz2wsxE' },
        { id: 3, userName: 'Trịnh Việt Hoàng', email: 'hoangtv2@gmail.com', password: '1qaz2wsxE' },
        { id: 4, userName: 'Nguyễn Tùng Lâm', email: 'tunglamnguyen@gmail.com', password: '1qaz2wsxE' }
    ]

    render() {
        return (
            <div className='a-candidatemanagement'>
                <div className='a-candidatemanagement-button'>
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
                <CommonTable columns={this.columns} rows={this.rows} onSelected={this.onSelectItem} isCheckbox />
                <DefaultPanel
                    isOpen={this.state.isCreatePanelOpen}
                    onCancelButtonClick={this.handleCancelButtonClick}
                    title={'Thêm thí sinh'}
                    onPrimaryButtonClick={this.handleSaveCreatePanel}
                    onRenderPanelContent={this.onRenderPanelContent()}
                />
                <DefaultPanel
                    isOpen={this.state.isEditPanelOpen}
                    onCancelButtonClick={this.handleCancelButtonClick}
                    title={'Sửa thí sinh'}
					onRenderPanelContent={this.onRenderPanelContent()}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateManagement)
