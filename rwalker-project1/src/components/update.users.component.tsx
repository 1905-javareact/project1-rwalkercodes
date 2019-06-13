import React from 'react'
import { withRouter } from 'react-router';
import { IState } from '../reducers';
import { connect } from 'react-redux';
import { updateAction } from '../actions/update.user.action';

interface IUpdateState {
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    role: string
}

// interface IUpdateProps extends RouteComponentProps{
//     update: (username:string, password:string, firstName:string, lastName:string, email:string, role:string, history)=>void
// }

const margins = { margin: 'auto'}

export class UpdateUserComponent extends React.Component<any, IUpdateState>{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        }
    }

    updateUsername = (event)=>{
        this.setState({
            username: event.target.value
        })
    }
    updatePassword =(event)=>{
        this.setState({
            password: event.target.value
        })
    }
    updateFirstName =(event)=>{
        this.setState({
            firstName: event.target.value
        })
    }
    updateLastName =(event)=>{
        this.setState({
            lastName: event.target.value
        })
    }
    updateEmail =(event)=>{
        this.setState({
            email: event.target.value
        })
    }
    updateRole =(event)=>{
        this.setState({
            role: event.target.value
        })
    }
    updateSubmit =(event)=>{
        event.preventDefault()
        this.props.updateUser(this.props.match.params.id, this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email, this.state.role, this.props.history)
    }

    componentDidMount(){
        console.log(this.props)
        this.setState({
            username: this.props.selectedUser.username,
            password: this.props.selectedUser.password,
            firstName: this.props.selectedUser.firstName,
            lastName: this.props.selectedUser.lastName,
            email: this.props.selectedUser.email,
            role: this.props.selectedUser.role
        })
    }

    render(){
        return(
            <form className="form-update-user text-center" onSubmit={this.updateSubmit}>
                <div className="mb-3 font-weight-normal col-lg-4 col-md-4" style={margins}>Update User</div>
                <label htmlFor="inputUserId" className="sr-only">User Id</label>
                <input type="text" id="inputUserId" className="form-control mb-2 col-lg-4 col-md-4" style={margins}  value={this.props.match.params.id} readOnly></input>
                <label htmlFor="inputUsername" className="sr-only">Username</label>
                <input type="text" id="inputUsername" className="form-control mb-2 col-lg-4 col-md-4" style={margins}  value={this.state.username} onChange={this.updateUsername} placeholder="Username" required></input>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="text" id="inputPassword" className="form-control mb-1 col-lg-4 col-md-4" style={margins} value={this.state.password} onChange={this.updatePassword} placeholder="Password" required></input>
                <label htmlFor="inputFirstName" className="sr-only">First Name</label>
                <input type="text" id="inputFirstName" className="form-control mb-2 col-lg-4 col-md-4" style={margins}  value={this.state.firstName} onChange={this.updateFirstName} placeholder="First Name" required></input>
                <label htmlFor="inputLastName" className="sr-only">Last Name</label>
                <input type="text" id="inputLastName" className="form-control mb-1 col-lg-4 col-md-4" style={margins} value={this.state.lastName} onChange={this.updateLastName} placeholder="Last Name" required></input>
                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input type="text" id="inputEmail" className="form-control mb-2 col-lg-4 col-md-4" style={margins}  value={this.state.email} onChange={this.updateEmail} placeholder="Email" required></input>
                <label htmlFor="inputRole" className="sr-only">Role</label>
                <input type="text" id="inputRole" className="form-control mb-1 col-lg-4 col-md-4" style={margins} value={this.state.role} onChange={this.updateRole} placeholder="Role" required></input>
                <button className="btn btn-lg btn-primary btn-block col-lg-4 col-md-4" style={margins} type="submit">Update</button>
            </form>
        )
    }
}

const mapStateToProps = (state:IState)=>{
    return{
        selectedUser: state.selectedUser.theUser,
        theUpdatedUser: state.updatedUser.theUpdatedUser,
        updateMessage: state.updatedUser.loggingMessage
    }
}

const mapDispatchToProps = {
    updateUser: updateAction
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UpdateUserComponent))