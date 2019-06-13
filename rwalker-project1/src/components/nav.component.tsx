import React from 'react'
import RevLogo from '../images/rev-logo.png'
import { Link } from 'react-router-dom';
import { IState } from '../reducers';
import { connect } from 'react-redux';

export class NavComponent extends React.Component<any>{
    
    render(){
        console.log(this.props.currentUser)
        return(
            <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
                <div className="navbar-header c-pointer shift-left">
                    <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature"/>
                </div>
                {this.props.currentUser === null ? <></> : 
                    <ul className="navbar-nav ml-auto margin-nav">
                        <li className="nav-item active">
                            <Link to="/home" className="unset-anchor nav-link">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/reimbursements/submit" className="unset-anchor nav-link">Submit Reimbursements</Link>
                        </li>
                        
                        {(this.props.currentUser.role == 2) || (this.props.currentUser.role == 3) ?
                        <li className="nav-item active">
                            <Link to="/users" className="unset-anchor nav-link">All Users</Link>
                        </li> 
                        : <></>}
                        {(this.props.currentUser.role == 2) || (this.props.currentUser.role == 3) ?
                        <li className="nav-item active">
                            <Link to="/reimbursements" className="unset-anchor nav-link">All Reimbursements</Link>
                        </li>
                        : <></>}
                    </ul>
                }
            </nav>
        )
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        currentUser: state.login.currentUser
    }
}

export default connect(mapStateToProps)(NavComponent)