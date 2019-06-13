import React from 'react'
import { IState } from '../reducers';
import { getAllUsersAction } from '../actions/get.all.users.action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const margins = { margin: 'auto'}
export class UsersComponent extends React.Component<any>{

    componentDidMount(){
        console.log(this.props)
        this.props.getUsers()
    }

    render(){
        return(
            <div className="getAllUsers" style={margins}>
                <table className="usersTable" style={margins}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allUsers.map((user) =>{
                            return(
                                <tr key={user.userId}>
                                    <td><Link to={'/users/' + user.userId}>{user.userId}</Link></td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
            
    }
}
// {JSON.stringify(this.props.allUsers)}
const mapStateToProps = (state:IState) =>{
    return{
        // currentUser: state.login.currentUser,
        allUsers: state.allUsers.theUsers,
        loggingMessage: state.allUsers.loggingMessage
    }
}

const mapDispatchToProps = {
    getUsers: getAllUsersAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)