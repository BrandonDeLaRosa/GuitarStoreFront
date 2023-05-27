import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const loaderSlice = createSlice({
	name: 'loader',
    initialState: false,
    reducers: {
        setIsLoading: (state, action) => {
            return action.payload
        }
    }
})


export const { setIsLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
