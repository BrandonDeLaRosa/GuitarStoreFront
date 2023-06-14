import { createSlice } from '@reduxjs/toolkit';

export const logginSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        loggin:(state,action) => {
            const {username, password} = action.payload
            // const num = parseInt(id - 1)
            const credentials = [username, password]
            return credentials
        }
       
    }
    
})

export const { loggin } = logginSlice.actions;

export default logginSlice.reducer;
