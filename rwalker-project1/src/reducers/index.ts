import { combineReducers } from "redux";
import { loginReducer } from "./login.reducer";
import { usersReducer } from "./get.all.users.reducer";
import { getUserByIdReducer } from "./get.user.by.id.reducer";
import { updateUserReducer } from "./update.user.reducer";
import { getReimByIdReducer } from "./get.reim.by.user.id.reducer";
import { updateReimReducer } from "./update.reim.reducer"
import { submitReimReducer } from "./submitted.reim.reducer";
import { reimsReducer } from "./get.all.reims.reducer";

export interface ILoginState{
    currentUser: null
    loggingMessage: string 
}

export interface IUsersState{
    theUsers: []
    loggingMessage: string
}

export interface ISelectedUserState{
    theUser: {}
    loggingMessage:string
}

export interface IUpdateUser{
    theUpdatedUser: {}
    loggingMessage:string
}

export interface ISelectedReimState{
    theReim: []
    loggingMessage:string
}

export interface ISubmittedReimState{
    subReim: {}
    loggingMessage: string
}

export interface IReimsState{
    theReims: []
    loggingMessage: string
}

// export interface IRemimbursementsState{
//     theReimbursements: []
//     loggingMessage: string
// }

export interface IState{
    login:ILoginState
    allUsers: IUsersState
    selectedUser: ISelectedUserState
    updatedUser: IUpdateUser
    selectedIdForReim: ISelectedReimState
    selectedReimForUpdate: ISelectedReimState
    submittedReimbursement: ISubmittedReimState
    allReims: IReimsState
}

export const state = combineReducers<IState>({
    login: loginReducer,
    allUsers: usersReducer,
    selectedUser: getUserByIdReducer,
    updatedUser: updateUserReducer,
    selectedIdForReim: getReimByIdReducer,
    selectedReimForUpdate: updateReimReducer,
    submittedReimbursement: submitReimReducer,
    allReims: reimsReducer
})