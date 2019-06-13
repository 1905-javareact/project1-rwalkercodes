import { IReimsState } from "."
import { fetchReimTypes } from '../actions/get.all.reims.action'

const initialState: IReimsState ={
    theReims: [],
    loggingMessage: undefined
}

export const reimsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case fetchReimTypes.UNSUCCESSFUL_REIM_FETCH:
            return{
                ...state,
                loggingMessage: 'Could not fetch reims'
            }
        case fetchReimTypes.SUCCESSFUL_REIM_FETCH:
            return{
                ...state,
                theReims: action.payload.reims,
                loggingMessage: 'Successful fetch'
            }
    
        default:
    }
    return state
}