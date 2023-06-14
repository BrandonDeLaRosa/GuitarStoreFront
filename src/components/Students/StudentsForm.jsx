import React from 'react';
import { useForm } from 'react-hook-form';
import { createStudentThunk } from '../../store/slices/students.slice';
import { useDispatch } from 'react-redux';

const StudentsForm = () => {

    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(createStudentThunk(data))
        reset({
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        })
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1>Create</h1>
            <div className='inputContainer'>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id='firstname' {...register("firstname")} />
            </div>
            <div className='inputContainer'>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" id='lastname' {...register("lastname")} />
            </div>
            <div className='inputContainer'>
                <label htmlFor="age">Age</label>
                <input type="number" id='age' {...register("age")} />
            </div>
            <div className='inputContainer'>
                <label htmlFor="location">Location</label>
                <input type="text" id='location' {...register("location")} />
            </div>
            <div>
                <label htmlFor="img">Profile Picture</label>
                <input type="file" id='img' {...register("img")} />
            </div>
            <div>
                <label htmlFor="schoolAdminId">Administrator id </label>
                <input type="number" id='schoolAdminId' {...register("schoolAdminId")} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default StudentsForm;