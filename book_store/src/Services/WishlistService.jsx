import axios from 'axios'
import { HeaderConfig } from './DataService'

const Wishlist = "https://localhost:44379/api/Wishlist";

// export const AddWishlistApi = (data) => {
//     const response = axios.post(`${WishlistApi}/addCustomerFeedbackForBook`, data, HeaderConfig);
//     return response
// }

export const GetWishlistApi = () => {
    const response = axios.get(`${Wishlist}/getCustomerBookToWishlist`, HeaderConfig);
    console.log(response)
    return response
}