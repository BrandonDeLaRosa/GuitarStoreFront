import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createClassThunk } from '../../store/slices/classes.slice';

const ClassesForm = () => {

    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(createClassThunk(data))
        // reset({
        //     firstname: '',
        //     lastname: '',
        //     username: '',
        //     email: '',
        //     password: ''
        // })
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
        <h1>Create</h1>
        <div className='inputContainer'>
            <label htmlFor="name">Class name</label>
            <input type="text" id='name' {...register("name")} />
        </div>
        <div className='inputContainer'>
            <label htmlFor="description">Description</label>
            <input type="text" id='description' {...register("description")} />
        </div>
        <div className='inputContainer'>
            <label htmlFor="available">Availability</label>
            <select name="availability" id="availability" {...register("available")}>
                <option value={true}>available</option>
                <option value={false}>Not available</option>
            </select>
        </div>
        
        <div>
            <label htmlFor="teacherId">Teacher id </label>
            <input type="number" id='teacherId' {...register("teacherId")} />
        </div>
        <div>
            <label htmlFor="schoolAdminId">Administrator id </label>
            <input type="number" id='schoolAdminId' {...register("schoolAdminId")} />
        </div>
        <button type='submit'>Submit</button>
    </form>
    );
};

export default ClassesForm;