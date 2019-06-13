import { ILoginState } from '.'
import { loginTypes } from '../actions/login.action'

const initialState: ILoginState = {
    currentUser: null,
    loggingMessage: undefined
}

export const loginReducer = (state = initialState, action) =>{
    switch (action.type) {
        case loginTypes.INVALID_CREDENTIALS:
            return{
                ...state,
                loggingMessage: 'Invalid Credentials'
            }
        case loginTypes.SUCCESSFUL_LOGIN:
            return{
                ...state,
                currentUser: action.payload.user,
                loggingMessage: 'Successful Login'
            }
        default:
    }
    return state
}