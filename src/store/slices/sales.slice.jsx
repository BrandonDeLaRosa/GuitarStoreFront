import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './loader.slice';
import axios from 'axios';

export const saleSlice = createSlice({
    name: 'sales',
    initialState: [],
    reducers: {
        setSales: (state,action) => {
            return action.payload
        }
    }
})

export const getSalesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`http://localhost:8000/api/v1/guitarStore/sales`)
        .then(res => dispatch(setSales(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}


export const createSaleThunk = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.post('http://localhost:8000/api/v1/guitarStore/sale', data)
        .catch (error => console.log(error.response.data))
        .then(() => dispatch(getSalesThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteSaleThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`http://localhost:8000/api/v1/guitarStore/sale/${id}`)
        .then(() => dispatch(getSalesThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setSales } = saleSlice.actions;

export default saleSlice.reducer;
