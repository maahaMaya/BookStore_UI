import axios from 'axios'
import { HeaderConfig } from './DataService'

const FeedbackApi = "https://localhost:44379/api/CustomerFeedback";

export const AddFeedbackByCustomerApi = (data) => {
    const response = axios.post(`${FeedbackApi}/addCustomerFeedbackForBook`, data, HeaderConfig);
    return response
}