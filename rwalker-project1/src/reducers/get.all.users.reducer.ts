import { IUsersState } from '.'
import { fetchUserTypes } from '../actions/get.all.users.action'

const initialState: IUsersState = {
    theUsers: [],
    loggingMessage: undefined
}

export const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case fetchUserTypes.UNSUCCESSFUL_USER_FETCH:
            return{
                ...state,
                loggingMessage: 'Could not fetch users'
            }
        case fetchUserTypes.SUCCESSFUL_USER_FETCH:
            return{
                ...state,
                theUsers: action.payload.users,
                loggingMessage: 'Successful fetch'
            }
    
        default:
    }
    return state
}