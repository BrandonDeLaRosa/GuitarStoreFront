import { configureStore } from '@reduxjs/toolkit'
import  adminSlice  from './slices/schoolAdmin.slice'
import loaderSlice from './slices/loader.slice'

export default configureStore({
  reducer: {
        admin: adminSlice,
        loader: loaderSlice
	}
})
