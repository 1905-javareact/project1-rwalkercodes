import axios from 'axios'

export const project1_api = axios.create({
    baseURL: 'http://localhost:3020',
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials: true
})