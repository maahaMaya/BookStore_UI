import axios from 'axios'
import { HeaderConfig } from './DataService'

const BookApi = "https://localhost:44379/api/Book";

export const GetAllBookApi = (data) => {
    const response = axios.get(`${BookApi}/getAllBook`, data)
    return response
}