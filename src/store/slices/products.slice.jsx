import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './loader.slice';
import axios from 'axios';

export const ProductsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state,action) => {
            return action.payload
        }
    }
})


export const getProductsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get("http://localhost:8000/api/v1/guitarStore/products")
        .then(res => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const createProductThunk = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.post("http://localhost:8000/api/v1/guitarStore/product", data)
        .catch(error => console.log(error.response.data))
        .then(() => dispatch(getProductsThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteProductThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`http://localhost:8000/api/v1/guitarStore/product/${id}`)
        .then(() => dispatch(getProductsThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const updateProductsThunk = (id,data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.put(`http://localhost:8000/api/v1/guitarStore/product/${id}`,data)
        .then(() => dispatch(getProductsThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
