import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './loader.slice';

export const classesSlice = createSlice({
    name: 'classes',
    initialState: [],
    reducers: {
        setClasses: (state, action) => {
            return action.payload
        }
    }
})

export const getClassesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('http://localhost:8000/api/v1/guitarStore/classes')
        .then(res => dispatch(setClasses(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const createClassThunk = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.post(`http://localhost:8000/api/v1/guitarStore/class`, data)
        .catch(error => console.log(error.response.data))
        .then(() => dispatch(getClassesThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteClassThunk = (id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.delete(`http://localhost:8000/api/v1/guitarStore/class/${id}`)
        .catch(error => console.log(error.response.data))
        .then(() => dispatch(getClassesThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setClasses } = classesSlice.actions;

export default classesSlice.reducer;
