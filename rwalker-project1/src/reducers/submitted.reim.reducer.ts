import {submitReimTypes} from '../actions/submit.reimbursement.action'
import {ISubmittedReimState} from '.'

const initialState: ISubmittedReimState = {
    subReim: {},
    loggingMessage: undefined
}

export const submitReimReducer = (state = initialState, action) =>{
    switch (action.type) {
        case submitReimTypes.UNSUCCESSFUL_REIM_SUBMIT:
            return{
                ...state,
                loggingMessage: 'Unsuccessful Submission'
            }
        case submitReimTypes.FAILED_REIM_SUBMIT:
            return{
                ...state,
                loggingMessage: 'Submission Failed'
            }
        case submitReimTypes.SUCCESSFUL_REIM_SUBMIT:
            return{
                ...state,
                subReim: action.payload.submission,
                loggingMessage: 'Successful Submission'
            }
        default:
    }
    return state
}