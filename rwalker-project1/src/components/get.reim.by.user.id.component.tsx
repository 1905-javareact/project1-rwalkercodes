import React from 'react'
import{ IState } from '../reducers'
import { getReimByIdAction } from '../actions/get.reim.by.user.id.action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const margins = { margin: 'auto'}
export class ReimByIdComponent extends React.Component<any>{
    constructor(props){
        super(props);
        this.state = {
            reim: null
        }
    }
    // componentWillMount(){

    // }
    componentDidMount(){
        console.log(this.props)
        this.props.getReim(this.props.match.params.id, this.props.history)
    }

    render(){
        return(
            //JSON.stringify(this.props.selectedReimByUserId)
        <div className="getReimById" style={margins}>
            <table className="reimByIdTable" style={margins}>
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
                        {(this.props.currentUser.role == 3) || (this.props.currentUser.role == 2) ?
                            <th>Update Reimbursement</th> : <></>}
                    </tr>
                </thead>
                <tbody>
                    {this.props.selectedReimById.map((reim)=>{
                        return(
                            <tr key={reim.reimId}>
                                <td>{reim.reimId}</td>
                                <td>{reim.author}</td>
                                <td>{reim.amount}</td>
                                <td>{reim.dateSubmitted}</td>
                                <td>{reim.dateResolved}</td>
                                <td>{reim.description}</td>
                                <td>{reim.resolver}</td>
                                <td>{reim.status}</td>
                                <td>{reim.type}</td>
                                {(this.props.currentUser.role == 3) || (this.props.currentUser.role == 2) ?
                                    <td><Link to={"/reimbursements/update/"+reim.author}>Update</Link></td> : <></>}
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table> 
        </div>
        )
    }
}
const mapStateToProps = (state:IState)=>{
    return{
        currentUser: state.login.currentUser,
        selectedReimById: state.selectedIdForReim.theReim,
        loggingMessage: state.selectedIdForReim.loggingMessage
    }
}

const mapDispatchToProps ={
    getReim: getReimByIdAction
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReimByIdComponent))