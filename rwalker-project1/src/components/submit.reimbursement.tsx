import React from 'react'
import { IState } from '../reducers';
import { submitReimbursementAction } from '../actions/submit.reimbursement.action'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { RouteComponentProps } from 'react-router';


interface ISubmissionState {
    amount: string
    description: string
    type: string
}

const margins = { margin: 'auto'}

export class SubmitReimbursementComponent extends React.Component<any, ISubmissionState>{
    constructor(props){
        super(props);
        this.state={
            amount: '',
            description: '',
            type: ''
        }
    }

    updateAmount = (event)=>{
        this.setState({
            amount: event.target.value
        })
    }

    updateDescription = (event)=>{
        this.setState({
            description: event.target.value
        })
    }

    updateType = (event)=>{
        this.setState({
            type: event.target.value
        })
    }

    submitReimbursement = (event) =>{
        event.preventDefault()
        this.props.submitReim(this.state.amount, this.state.description, this.state.type, this.props.history)
    }

    render(){
        return(
            <form className="form-submit-reim text-center" onSubmit={this.submitReimbursement}>
                <div className="mb-3 font-weight-normal col-lg-4 col-md-4" style={margins}>Submit Reimbursement</div>
                <label htmlFor="inputAmount" className="sr-only">Amount</label>
                <input type="text" id="inputAmount" className="form-control mb-2 col-lg-4 col-md-4" style={margins}  value={this.state.amount} onChange={this.updateAmount} placeholder="Amount" required></input>
                <label htmlFor="inputDescription" className="sr-only">Description</label>
                <input type="text" id="inputDescription" className="form-control mb-2 col-lg-4 col-md-4" style={margins}  value={this.state.description} onChange={this.updateDescription} placeholder="Description" required></input>
                <label htmlFor="inputType" className="sr-only">Type</label>
                <input type="text" id="inputType" className="form-control mb-1 col-lg-4 col-md-4" style={margins} value={this.state.type} onChange={this.updateType} placeholder="Type" required></input>
                <button className="btn btn-lg btn-primary btn-block col-lg-4 col-md-4" style={margins} type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state:IState)=>{
    return{
        submittedReim: state.submittedReimbursement.subReim,
        loggingMessage: state.submittedReimbursement.loggingMessage
    }
}

const mapDispatchToProps ={
    submitReim: submitReimbursementAction
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SubmitReimbursementComponent))