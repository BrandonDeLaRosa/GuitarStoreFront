import { configureStore } from '@reduxjs/toolkit'
import  adminSlice  from './slices/schoolAdmin.slice'
import loaderSlice from './slices/loader.slice'
import teachersSlice from './slices/teachers.slice'
import  studentSlice from './slices/students.slice'
import classesSlice from './slices/classes.slice'
import productsSlice from './slices/products.slice'
import salesSlice from './slices/sales.slice'
// import logginSlice from './slices/loggin.slice'

export default configureStore({
  reducer: {
        admin: adminSlice,
        loader: loaderSlice,
        teacher: teachersSlice,
        student: studentSlice,
        class: classesSlice,
        product: productsSlice,
        sale: salesSlice 
	}
})
