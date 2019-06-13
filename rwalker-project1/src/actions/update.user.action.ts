import { project1_api } from '../axios/project1-api'

export const updateUserTypes = {
    FAILED_USER_UPDATE: 'USER_UPDATE_FAILED',
    SUCCESSFUL_USER_UPDATE: 'USER_UPDATE_SUCCESSFUL'
}

export const updateAction = (userId:number, username:string, password:string, firstName:string, lastName:string, email:string, role:number, history) => async(dispatch) =>{
    const credentials = {
        username, password, firstName, lastName, email, role
    }

    try{
        const response = await project1_api.patch('/users/edit/'+userId, credentials)

        if(response.status === 400) {
            dispatch({
                type: updateUserTypes.FAILED_USER_UPDATE
            })
        } else if(response.status === 202){
            const user = await response.data
            dispatch({
                payload:{
                    updatedUser: user
                },
                type: updateUserTypes.SUCCESSFUL_USER_UPDATE
            })
            history.push('/users')
        }
    } catch(err){
        console.log(err)
    }
}