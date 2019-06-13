import { project1_api } from '../axios/project1-api'

export const fetchReimByStatusTypes = {
    UNSUCCESSFUL_REIM_UPDATE: 'UPDATE_REIM_UNSUCCESSFUL',
    REIM_UPDATE_FAILED: 'UPDATE_FAILED',
    SUCCESSFUL_REIM_UPDATE: 'UPDATE_REIM_SUCCESSFUL'
}

export const updateReimAction = (id: number, amount:string, description:string, status:string, type:string, history) => async(dispatch) =>{
    const credentials = {
        amount, description, status, type
    }
    try{
        const response = await project1_api.patch('/reimbursements/update/'+id, credentials)

        if(response.status === 404){
            dispatch({
                type: fetchReimByStatusTypes.REIM_UPDATE_FAILED
            })
        } else if(response.status === 400){
            dispatch({
                type: fetchReimByStatusTypes.UNSUCCESSFUL_REIM_UPDATE
            })
        } else if(response.status === 202){
            const reim = response.data
            dispatch({
                payload:{
                    updatedReim: reim
                },
                type: fetchReimByStatusTypes.SUCCESSFUL_REIM_UPDATE
            })
            history.push('/reimbursements')
        }
    } catch(err){
        console.log(err)
    }
}
