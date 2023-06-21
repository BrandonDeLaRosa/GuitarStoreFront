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

        <div className='pagesCreateForm'>
            <div className='formTitle'>Create Admin</div>
        <form onSubmit={handleSubmit(submit)} className='formContainer' >
            <div className='form-group'>
                <label htmlFor="firstname">Firstname</label>
                <input className='inputFieldsLogin' type="text" id='firstname' {...register("firstname")} />
            </div>
            <div className='form-group'>
                <label htmlFor="lastname">Lastname</label>
                <input className='inputFieldsLogin' type="text" id='lastname' {...register("lastname")} />
            </div>
            <div className='form-group'>
                <label htmlFor="username">Username</label>
                <input className='inputFieldsLogin' type="text" id='username' {...register("username")} />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input className='inputFieldsLogin' type="email" id='email' {...register("email")} />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password</label>
                <input className='inputFieldsLogin' type="password" id='pássword' {...register("password")} />
            </div>
            <button class="pagesCreateBtn">
                        <span class="hover-underline-animation"> Create </span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                        </svg>
            </button>
        </form>
        </div>

        /*
             <div class="login-card">
                <div className="card-header">
                    <div className="log">Login</div>
                </div>
                <form className='formContainer' onSubmit={handleSubmit(submit)}>
                    <div className="form-group">
                        <label for="username">Username:</label>
                        <input className='inputFieldsLogin' type="text" id='username' name='username' required {...register("username")} />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input className='inputFieldsLogin' type={passwordVisibility? "text" : "password"} id='password' name='password' required {...register("password")} />
                    </div>
                    <button class="cta">
                        <span class="hover-underline-animation"> Submit </span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                        </svg>
                    </button>
                    <button className='eye' onClick={visible}>{passwordVisibility?  <i class="fa-regular fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i> }</button>
                </form>
            </div>
        */

    );
};

export default SchoolAdminForm;