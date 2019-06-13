import { project1_api } from '../axios/project1-api'

export const submitReimTypes = {
    UNSUCCESSFUL_REIM_SUBMIT: 'REIM_SUBMISSION_UNSUCCESSFUL',
    FAILED_REIM_SUBMIT: 'REIM_SUBMISSION_FAILED',
    SUCCESSFUL_REIM_SUBMIT: 'REIM_SUBMISSION_SUCCESSFUL'
}

export const submitReimbursementAction = (amount:string, description:string, type:string, history) => async(dispatch) =>{
    const credentials = {
        amount, description, type
    }
    try{
        const response = await project1_api.post('/reimbursements/submit', credentials)
        if(response.status === 400){
            dispatch({
                type: submitReimTypes.UNSUCCESSFUL_REIM_SUBMIT
            })
        } else if(response.status === 404){
            dispatch({
                type: submitReimTypes.FAILED_REIM_SUBMIT
            })
        } else if(response.status === 201){
            const subData = response.data
            dispatch({
                payload:{
                    submission: subData
                },
                type: submitReimTypes.SUCCESSFUL_REIM_SUBMIT
            })
            history.push('/home')
        }
    } catch(err){
        console.log(err)
    }
}