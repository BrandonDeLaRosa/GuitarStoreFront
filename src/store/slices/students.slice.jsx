import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './loader.slice';
import axios from 'axios';

export const studentSlice = createSlice({
    name: 'student',
    initialState: [],
    reducers: {
        setStudents: (state,action) => {
            return action.payload 
        }
    }
})

export const getStudentsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('http://localhost:8000/api/v1/guitarStore/students')
        .then(res => dispatch(setStudents(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}


export const createStudentThunk = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
     axios.post('http://localhost:8000/api/v1/guitarStore/student', data)
     .catch(error => console.log(error.response.data))
     .then(() => dispatch(getStudentsThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteStudentThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`http://localhost:8000/api/v1/guitarStore/student/${id}`)
        .then(() => dispatch(getStudentsThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setStudents } = studentSlice.actions;

export default studentSlice.reducer;

