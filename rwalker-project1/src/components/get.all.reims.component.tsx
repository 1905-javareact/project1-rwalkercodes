import React from 'react'
import { IState } from '../reducers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllReimsAction } from '../actions/get.all.reims.action';

const margins = { margin: 'auto'}
export class ReimsComponent extends React.Component<any>{

    componentDidMount(){
        console.log(this.props)
        this.props.getReims()
    }

    render(){
        return(
            <div className="getAllReim" style={margins}>
            <table className="reimTable" style={margins}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Author</th>
                        <th>Amount</th>
                        <th>Date Submitted</th>
                        <th>Date Resolved</th>
                        <th>Description</th>
                        <th>Resolver</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.allReims.map((reim)=>{
                        return(
                            <tr key={reim.reimId}>
                                <td>{reim.reimId}</td>
                                <td><Link to={'/reimbursements/author/userId/' + reim.author}>{reim.author}</Link></td>
                                <td>{reim.amount}</td>
                                <td>{reim.dateSubmitted}</td>
                                <td>{reim.dateResolved}</td>
                                <td>{reim.description}</td>
                                <td>{reim.resolver}</td>
                                <td>{reim.status}</td>
                                <td>{reim.type}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> 
        </div>
        )
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        // currentUser: state.login.currentUser,
        allReims: state.allReims.theReims,
        loggingMessage: state.allReims.loggingMessage
    }
}

const mapDispatchToProps ={
    getReims: getAllReimsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ReimsComponent)