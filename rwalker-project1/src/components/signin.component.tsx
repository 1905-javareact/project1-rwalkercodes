import React from 'react'
import { RouteComponentProps } from 'react-router';
import { loginAction } from '../actions/login.action';
import { IState } from '../reducers';
import { connect } from 'react-redux';

interface ILoggingState {
    username: string
    password: string
}

interface ILoggingProps extends RouteComponentProps{
    loggingMessage: string
    login: (username: string, password: string, history) => void
}

const margins = { margin: 'auto'}

export class LoginComponent extends React.Component<ILoggingProps, ILoggingState>{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    updateUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    updatePassword = (event)=>{
        this.setState({
            password: event.target.value
        })
    }

    loginSubmit = (event) =>{
        event.preventDefault()
        this.props.login(this.state.username, this.state.password, this.props.history)
    }


    componentWillUnmount(){
        console.log(this.props)
    }


    render(){
        return(
            <form className="form-signin text-center" onSubmit={this.loginSubmit}>
                <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                <div className="mb-3 font-weight-normal col-lg-4 col-md-4" style={margins}>Please Sign In</div>
                <label htmlFor="inputUsername" className="sr-only">Username</label>
                <input type="text" id="inputUsername" className="form-control mb-2 col-lg-4 col-md-4" style={margins}  value={this.state.username} onChange={this.updateUsername} placeholder="Username" required></input>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control mb-1 col-lg-4 col-md-4" style={margins} value={this.state.password} onChange={this.updatePassword} placeholder="Password" required></input>
                <div className="checkbox mb-3 col-lg-4 col-md-4" style={margins}>
                    <label>
                        <input className="mr-2" type="checkbox" value="remember-me"></input>
                        Remember Me
                    </label>
                </div>
                <p>{this.props.loggingMessage}</p>
                <button className="btn btn-lg btn-primary btn-block col-lg-4 col-md-4" style={margins} type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
            </form>
        )
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        currentUser: state.login.currentUser,
        loggingMessage: state.login.loggingMessage
    }
}

const mapDispatchToProps ={
    login: loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)