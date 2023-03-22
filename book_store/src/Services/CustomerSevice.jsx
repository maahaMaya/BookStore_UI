import axios from 'axios'

const CustomerApi = "https://localhost:44379/api/Customer";

export const CustomerSignInApi = (data) => {
    const response = axios.post(`${CustomerApi}/loginCustomer`, data)
    return response
}


export const CustomerSignupApi = (data) => {
    const response = axios.post(`${CustomerApi}/RegisterCustomer`, data)
    return response
}
