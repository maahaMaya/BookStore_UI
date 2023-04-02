import axios from 'axios'
import { HeaderConfig } from './DataService'

const Wishlist = "https://localhost:44379/api/Wishlist";

export const AddWishlistApi = (data) => {
    const response = axios.post(`${Wishlist}/addCustomerBookToWishlist`, data, HeaderConfig);
    return response
}

// export const DeleteWishlistApi = (data) => {
//     const response = axios.delete(`${Wishlist}/deleteCustomerBookToWishlist`, data, HeaderConfig);
//     return response
// }

export const DeleteWishlistApi = (data) => {
    const response = axios.put(`${Wishlist}/deleteCustomerBookToWishlist`, data, HeaderConfig);
    return response
}

export const GetWishlistApi = () => {
    const response = axios.get(`${Wishlist}/getCustomerBookToWishlist`, HeaderConfig);
    return response
}