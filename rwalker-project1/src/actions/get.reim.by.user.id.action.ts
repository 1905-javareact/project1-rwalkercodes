import { project1_api } from '../axios/project1-api'

export const fetchReimByIdTypes = {
    UNSUCCESSFUL_REIM_BY_ID_FETCH: 'FETCH_REIM_BY_ID_UNSUCCESSFUL',
    SUCCESSFUL_REIM_BY_ID_FETCH: 'FETCH_REIM_BY_ID_SUCCESSFUL'
}

export const getReimByIdAction = (userId: number, history) => async(dispatch) =>{
    try{
        const response = await project1_api.get('/reimbursements/author/userId/'+userId)

        if(response.status === 400){
            dispatch({
                type: fetchReimByIdTypes.UNSUCCESSFUL_REIM_BY_ID_FETCH
            })
        } else if(response.status === 200){
            const reim = response.data
            dispatch({
                payload:{
                    reim: reim
                },
                type: fetchReimByIdTypes.SUCCESSFUL_REIM_BY_ID_FETCH
            })
            history.push('/reimbursements/author/userId/'+userId)
        }
    } catch(err){
        console.log(err)
    }
}