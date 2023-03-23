import axios from 'axios'
import { HeaderConfig } from './DataService'

const CustomerApi = "https://localhost:44379/api/Customer";

export const CustomerSignInApi = (data) => {
    const response = axios.post(`${CustomerApi}/loginCustomer`, data)
    return response
}

export const CustomerSignupApi = (data) => {
    const response = axios.post(`${CustomerApi}/RegisterCustomer`, data)
    return response
}

export const CustomerForgetPasswordApi = (data) => {
    const response = axios.post(`${CustomerApi}/forgetLoginPassword`, data)
    return response
}

export const CustomerResetPasswordApi = (data) => {
    const response = axios.put(`${CustomerApi}/resetLoginPassword`, data, HeaderConfig)
    return response
}
