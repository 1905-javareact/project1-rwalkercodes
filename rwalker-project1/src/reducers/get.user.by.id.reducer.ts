import { ISelectedUserState } from ".";
import { fetchUserByIdTypes } from "../actions/get.user.by.id.action";

const initialState: ISelectedUserState = {
    theUser: {},
    loggingMessage: undefined
}

export const getUserByIdReducer = (state = initialState, action) =>{
    switch (action.type) {
        case fetchUserByIdTypes.UNSUCCESSFUL_USER_BY_ID_FETCH:
            return{
                ...state,
                loggingMessage: 'Could not fetch this user'
            }
        case fetchUserByIdTypes.SUCCESSFUL_USER_BY_ID_FETCH:
            return{
                ...state,
                theUser: action.payload.user,
                loggingMessage: 'Successful user fetch'
            }
    
        default:
    } return state
}