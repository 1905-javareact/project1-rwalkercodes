import { project1_api } from '../axios/project1-api'


export const fetchReimTypes = {
    UNSUCCESSFUL_REIM_FETCH: 'REIMS_FETCH_UNSUCCESSFUL',
    SUCCESSFUL_REIM_FETCH: 'REIMS_FETCH_SUCCESSFUL'
}

export const getAllReimsAction = () => async(dispatch)=>{

    try{
        const response = await project1_api.get('/reimbursements')
        if(response.status === 400){
            dispatch({
                type: fetchReimTypes.UNSUCCESSFUL_REIM_FETCH
            })
        } else if(response.status === 200){
            const reims = response.data
            dispatch({
                payload:{
                    reims: reims
                },
                type: fetchReimTypes.SUCCESSFUL_REIM_FETCH
            })
        }
    } catch(err){
        console.log(err)
    }
}