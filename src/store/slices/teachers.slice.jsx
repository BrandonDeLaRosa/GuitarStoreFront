import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './loader.slice';
import getConfig from '../../utils/getConfig';

export const teachersSlice = createSlice({
    name: 'teachers',
    initialState: [],
    reducers: {
        setTeachers: (state,action) => {
            const teachers = action.payload 
            return teachers
        }
    }
})

export const getAllTeachers = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('http://localhost:8000/api/v1/guitarStore/teachers',getConfig())
    .then(res => dispatch(setTeachers(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const createTeacherThunk = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
     axios.post('http://localhost:8000/api/v1/guitarStore/teacher',data)
     .catch(error => console.log(error.response.data))
     .then( () => dispatch(getAllTeachers()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteTeacherThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.delete(`http://localhost:8000/api/v1/guitarStore/teacher/${id}`)
        .then(() => dispatch(getAllTeachers()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const updateTeacherThunk = (id,data) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.put(`http://localhost:8000/api/v1/guitarStore/teacher/${id}`,data)
        .then(() => dispatch(getAllTeachers()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setTeachers } = teachersSlice.actions;
export default teachersSlice.reducer;
