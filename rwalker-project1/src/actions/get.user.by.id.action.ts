import { project1_api } from '../axios/project1-api'

export const fetchUserByIdTypes = {
    UNSUCCESSFUL_USER_BY_ID_FETCH: 'FETCH_USER_BY_ID_UNSUCCESSFUL',
    SUCCESSFUL_USER_BY_ID_FETCH: 'FETCH_USER_BY_ID_SUCCESSFUL'
}


export const getUserByIdAction = (userId:number, history:any) => async(dispatch) =>{

  try{

      const response = await project1_api.get('/users/'+userId)

      if((response.status === 401) || (response.status === 400)){
          dispatch({
              type: fetchUserByIdTypes.UNSUCCESSFUL_USER_BY_ID_FETCH
          })
      } else if(response.status === 200){
          const user = response.data
          dispatch({
              payload:{
                  user: user
              },
              type: fetchUserByIdTypes.SUCCESSFUL_USER_BY_ID_FETCH
          })
          history.push('/users/'+userId)
      }
  } catch(err){
      console.log(err)
  }
}