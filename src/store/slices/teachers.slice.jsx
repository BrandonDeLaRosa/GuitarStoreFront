import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
    // dispatch(setIsLoading(true));
    axios.get('http://localhost:8000/api/v1/guitarStore/teachers')
    .then(res => dispatch(setTeachers(res.data)))
        // .finally(() => dispatch(setIsLoading(false)));
}

export const { setTeachers } = teachersSlice.actions;
export default teachersSlice.reducer;
