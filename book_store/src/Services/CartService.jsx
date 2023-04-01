import axios from 'axios'
import { HeaderConfig } from './DataService'

const FeedbackApi = "https://localhost:44379/api/Cart";

export const AddBookInCustomerCartApi = (data) => {
    const response = axios.post(`${FeedbackApi}/addBookInCustomerCart`, data, HeaderConfig);
    return response
}

export const GetCustomerBookInCartApi = (data) => {
    const response = axios.get(`${FeedbackApi}/getBookInCustomerCart`, HeaderConfig);
    return response
}
