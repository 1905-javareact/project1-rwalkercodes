import { IUpdateUser } from '.'
import { updateUserTypes } from '../actions/update.user.action'

const initialState: IUpdateUser =  {
    theUpdatedUser: {},
    loggingMessage: undefined
}

export const updateUserReducer = (state=initialState, action) =>{
    switch (action.type) {
        case updateUserTypes.FAILED_USER_UPDATE:
            return{
                ...state,
                loggingMessage: 'Could not update user'
            }
        case updateUserTypes.SUCCESSFUL_USER_UPDATE:
            return{
                ...state,
                theUpdatedUser: action.payload.updatedUser,
                loggingMessage: 'Successful update'
            }
        default:
    } return state
}