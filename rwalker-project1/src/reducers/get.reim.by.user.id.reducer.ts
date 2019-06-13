import { ISelectedReimState} from ".";
import { fetchReimByIdTypes } from "../actions/get.reim.by.user.id.action"

const initialState: ISelectedReimState = {
    theReim: [],
    loggingMessage: undefined
}

export const getReimByIdReducer = (state = initialState, action) =>{
    switch (action.type) {
        case fetchReimByIdTypes.UNSUCCESSFUL_REIM_BY_ID_FETCH:
            return{
                ...state,
                loggingMessage: 'Could not fetch this reimbursement'
            }
        case fetchReimByIdTypes.SUCCESSFUL_REIM_BY_ID_FETCH:
            return{
                ...state,
                theReim: action.payload.reim,
                loggingMessage: 'Successful reimbursement fetch'
            }
    
        default:
    } return state
}