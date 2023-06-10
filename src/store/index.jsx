import { configureStore } from '@reduxjs/toolkit'
import  adminSlice  from './slices/schoolAdmin.slice'
import loaderSlice from './slices/loader.slice'
import teachersSlice from './slices/teachers.slice'

export default configureStore({
  reducer: {
        admin: adminSlice,
        loader: loaderSlice,
        teacher: teachersSlice
	}
})
