import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createTeacherThunk } from '../../store/slices/teachers.slice';

const TeachersForm = () => {
    const {register, handleSubmit,reset} = useForm();
    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(createTeacherThunk(data))
        reset({
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        })
        console.log(data);
    }
    // const id = parseInt(localStorage.getItem("id"))
    
    return (
        <div className='pagesCreateForm'>
            <div className='formTitle'>Create Teacher</div>
               <form onSubmit={handleSubmit(submit)} className='formContainer'>
            <div className='form-group'>
                <label htmlFor="firstname">Firstname</label>
                <input className='inputFieldsLogin' type="text" id='firstanme' {...register("firstname")} />
            </div>
            <div className='form-group'>
                <label htmlFor="lastname">Lastname</label>
                <input className='inputFieldsLogin' type="text" id='lastanme' {...register("lastname")} />
            </div>
            <div className='form-group'>
                <label htmlFor="location">Location</label>
                <input className='inputFieldsLogin' type="text" id='location' {...register("location")} />
            </div>
            {/* <div>
                <label htmlFor="img">Profile Picture</label>
                <input className='inputFieldsLogin' type="file" id='img' {...register("img")} />
            </div> */}
            <div className='form-group'>
                <label htmlFor="schoolAdminId">Administrator id </label>
                <input className='inputFieldsLogin' type="number" id='schoolAdminId' {...register("schoolAdminId")} />
            </div>
            <button class="pagesCreateBtn">
                        <span class="hover-underline-animation"> Create </span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                        </svg>
            </button>
        </form>
        </div>
    );
};

export default TeachersForm;