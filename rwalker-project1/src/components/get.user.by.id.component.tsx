import React from 'react'
import { IState } from '../reducers';
import { getUserByIdAction } from '../actions/get.user.by.id.action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';

const margins = { margin: 'auto'}
export class UserByIdComponent extends React.Component<any>{
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }
    // componentWillMount(){
    //     console.log(this.props.selectedUser)
    // }
    componentDidMount(){
        //console.log(this.props.selectedUser.theUser)
        this.props.getUser(this.props.match.params.id, this.props.history)
    }

    render(){
        return(
            <div className="getUserById" style={margins}>
                <table className="userByIdTable" style={margins}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        {this.props.currentUser.role == 3 ?
                            <th>Edit User</th> : <></>}
                    </tr>
                </thead>
                <tbody>
                    <tr key={this.props.selectedUser.userId}>
                        <td><Link to={'/reimbursements/author/userId/'+this.props.selectedUser.userId}>{this.props.selectedUser.userId}</Link></td>
                        <td>{this.props.selectedUser.username}</td>
                        <td>{this.props.selectedUser.password}</td>
                        <td>{this.props.selectedUser.firstName}</td>
                        <td>{this.props.selectedUser.lastName}</td>
                        <td>{this.props.selectedUser.email}</td>
                        <td>{this.props.selectedUser.role}</td>
                        {this.props.currentUser.role == 3 ?
                            <td><Link to={'/users/edit/'+this.props.selectedUser.userId}>Edit</Link></td> : <></>}
                    </tr>
                </tbody>
                </table>
            </div>
             
            //JSON.stringify(this.props.selectedUser)
        )
        
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        currentUser: state.login.currentUser,
        selectedUser: state.selectedUser.theUser,
        loggingMessage: state.selectedUser.loggingMessage
    }
}

const mapDispatchToProps = {
    getUser: getUserByIdAction
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserByIdComponent))