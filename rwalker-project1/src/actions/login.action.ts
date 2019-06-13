import { project1_api } from '../axios/project1-api'

export const loginTypes = {
    INVALID_CREDENTIALS : 'LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'LOGIN_SUCCESSFUL_LOGIN'
}

export const loginAction = (username:string, password:string, history:any) => async(dispatch) =>{
    const credentials = {
        username,
        password
    }

    try{

        const response = await project1_api.post('/login', credentials)

        if(response.status === 400){
            dispatch({
                type: loginTypes.INVALID_CREDENTIALS
            })
        } else if(response.status === 200){
            const user = response.data
            dispatch({
                payload:{
                    user: user
                },
                type: loginTypes.SUCCESSFUL_LOGIN
            })
            history.push('/home')
        }
    } catch(err){
        console.log(err)
    }
}