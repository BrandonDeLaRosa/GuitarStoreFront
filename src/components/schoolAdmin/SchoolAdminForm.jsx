import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createAdminThunk } from '../../store/slices/schoolAdmin.slice';

const SchoolAdminForm = () => {

    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createAdminThunk(data))
        reset({
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        })
    }


    // }
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
                <label htmlFor="username">Username</label>
                <input type="text" id='username' {...register("username")} />
            </div>
            <div className='inputContainer'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' {...register("email")} />
            </div>
            <div className='inputContainer'>
                <label htmlFor="password">Password</label>
                <input type="password" id='pássword' {...register("password")} />
            </div>
            <button type='submit'>Submit</button>
        </form>


    );
};

export default SchoolAdminForm;