import { ISelectedReimState} from ".";
import { fetchReimByStatusTypes } from "../actions/update.reim.action"

const initialState: ISelectedReimState = {
    theReim: [],
    loggingMessage: undefined
}

export const updateReimReducer = (state = initialState, action) =>{
    switch (action.type){
        case fetchReimByStatusTypes.UNSUCCESSFUL_REIM_UPDATE:
            return{
                ...state,
                loggingMessage: 'Update was unsuccessful'
            }
        case fetchReimByStatusTypes.REIM_UPDATE_FAILED:
            return{
                ...state,
                loggingMessage: 'Update failed'
            }
        case fetchReimByStatusTypes.SUCCESSFUL_REIM_UPDATE:
            return{
                ...state,
                theReim: action.payload.updatedReim,
                loggingMessage: 'Successful reimbursement update'
            }
        default:
    } return state
}