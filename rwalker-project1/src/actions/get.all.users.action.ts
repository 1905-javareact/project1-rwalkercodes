import { project1_api } from '../axios/project1-api'


export const fetchUserTypes = {
    UNSUCCESSFUL_USER_FETCH: 'USERS_FETCH_UNSUCCESSFUL',
    SUCCESSFUL_USER_FETCH: 'USERS_FETCH_SUCCESSFUL'
}

export const getAllUsersAction = () => async(dispatch) =>{

    try{

        const response = await project1_api.get('/users')
        if((response.status === 401) || (response.status === 400)) {
            dispatch({
                type: fetchUserTypes.UNSUCCESSFUL_USER_FETCH
            })
        } else if(response.status === 200){
            const users = response.data
            dispatch({
                payload:{
                    users: users
                },
                type: fetchUserTypes.SUCCESSFUL_USER_FETCH
            })
        }        
    } catch(err){
        console.log(err)
    }
}