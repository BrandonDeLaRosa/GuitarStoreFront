import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './loader.slice';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const adminSlice = createSlice({
	name: 'admin',
    initialState: [],
    reducers: {
        setAdmins: (state,action) =>{
            const admins = action.payload
            return admins
        }
    }
})


export const getAdminsThunk = () => dispatch => {
    dispatch( setIsLoading(true))
    axios.get('http://localhost:8000/api/v1/guitarStore/admins')
    .then( res => dispatch(setAdmins(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
}

export const createAdminThunk = (data) => dispatch => {
    dispatch( setIsLoading(true))
    axios.post('http://localhost:8000/api/v1/guitarStore/admin', data)
    .catch(error => console.log(error.response.data))
    .then( () => dispatch(getAdminsThunk()))
    .finally(() => dispatch(setIsLoading(false)));
}

export const deleteAdminThunk = (id) => dispatch => {
    dispatch( setIsLoading(true))
    axios.delete(`http://localhost:8000/api/v1/guitarStore/admin/${id}`)
    .catch(error => console.log(error.response.data))
    .then( () => dispatch(getAdminsThunk()))
    .finally(() => dispatch(setIsLoading(false))); 
}

export const updateAdminThunk = (id, data) => dispatch => {
    dispatch (setIsLoading(true))
    axios.put(`http://localhost:8000/api/v1/guitarStore/admin/${id}`, data)
    .catch (error => console.log(error.response.data))
    .then (() => dispatch(getAdminsThunk()))
    .finally(() => dispatch(setIsLoading(false)))
}

export const { setAdmins } = adminSlice.actions;

export default adminSlice.reducer;
