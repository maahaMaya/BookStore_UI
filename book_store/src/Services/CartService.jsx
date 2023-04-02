import axios from 'axios'
import { HeaderConfig } from './DataService'

const CartApi = "https://localhost:44379/api/Cart";

export const AddBookInCustomerCartApi = (data) => {
    const response = axios.post(`${CartApi}/addBookInCustomerCart`, data, HeaderConfig);
    return response
}

export const GetCustomerBookInCartApi = (data) => {
    const response = axios.get(`${CartApi}/getBookInCustomerCart`, HeaderConfig);
    return response
}

export const DeleteCustomerBookInCartApi = (data) => {
    const response = axios.put("https://localhost:44379/api/Cart/delteCustomerCart", data);
    return response
}
