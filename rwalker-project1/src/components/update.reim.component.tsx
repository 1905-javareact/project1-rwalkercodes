import React from 'react'
import{ IState } from '../reducers'
import { connect } from 'react-redux';
import { updateReimAction } from '../actions/update.reim.action';
import { withRouter } from 'react-router';

interface IUpdateState {
    amount: string
    description: string
    status: string
    type: string
}

const margins = { margin: 'auto'}
export class updateReimComponent extends React.Component<any, IUpdateState>{
    constructor(props){
        super(props);
        this.state ={
            amount: '',
            description: '',
            status: '',
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
    updateStatus = (event)=>{
        this.setState({
            status: event.target.value
        })
    }
    updateType = (event)=>{
        this.setState({
            type: event.target.value
        })
    }
    updateSubmit =(event)=>{
        event.preventDefault()
        this.props.updateReim(this.props.match.params.id, this.state.amount, this.state.description, this.state.status, this.state.type, this.props.history)
    }

    render(){
        return(
            <form className="form-update-reim text-center" onSubmit={this.updateSubmit}>
                <div className="mb-3 font-weight-normal col-lg-4 col-md-4" style={margins}>Update Reimbursement</div>
                <label htmlFor="inputReimId" className="sr-only">Reimbursement Id</label>
                <input type="text" id="inputReimId" className="form-control mb-2 col-lg-4 col-md-4" style={margins}  value={this.props.match.params.id} readOnly></input>
                <label htmlFor="inputAmount" className="sr-only">Amount</label>
                <input type="text" id="inputAmount" className="form-control mb-1 col-lg-4 col-md-4" style={margins} value={this.state.amount} onChange={this.updateAmount} placeholder="Amount" required></input>
                <label htmlFor="inputDescription" className="sr-only">Description</label>
                <input type="text" id="inputDescription" className="form-control mb-2 col-lg-4 col-md-4" style={margins}  value={this.state.description} onChange={this.updateDescription} placeholder="Description" required></input>
                <label htmlFor="inputStatus" className="sr-only">Statusd</label>
                <input type="text" id="inputStatus" className="form-control mb-1 col-lg-4 col-md-4" style={margins} value={this.state.status} onChange={this.updateStatus} placeholder="Status" required></input>
                <label htmlFor="inputType" className="sr-only">Type</label>
                <input type="text" id="inputType" className="form-control mb-2 col-lg-4 col-md-4" style={margins}  value={this.state.type} onChange={this.updateType} placeholder="Type" required></input>
                <button className="btn btn-lg btn-primary btn-block col-lg-4 col-md-4" style={margins} type="submit">Update</button>
            </form>
        )
    }
}

const mapStateToProps = (state:IState)=>{
    return{
        selectedReimForUpdate: state.selectedReimForUpdate.theReim,
        loggingMessage: state.selectedReimForUpdate.loggingMessage
    }
}

const mapDispatchToProps ={
    updateReim: updateReimAction
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(updateReimComponent))