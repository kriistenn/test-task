import axios from "axios";
import {setProducts} from "../reducers/productReducer";


export const getProducts = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:4000/products')
        dispatch(setProducts(response.data))
    }
}