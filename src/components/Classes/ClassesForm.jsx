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
        <div className='pagesCreateForm'> 
                <h1 className='formTitle'>Create</h1>
            <form onSubmit={handleSubmit(submit)} className='formContainer'>
                <div className='form-group'>
                    <label htmlFor="name">Class name</label>
                    <input className='inputFieldsLogin' type="text" id='name' {...register("name")} />
                </div>
                <div className='form-group'>
                    <label htmlFor="description">Description</label>
                    <input className='inputFieldsLogin' type="text" id='description' {...register("description")} />
                </div>
                {/* <div className='form-group'>
                    <label htmlFor="available">Availability</label>
                    <select name="availability" id="availability" {...register("available")}>
                        <option value={true}>available</option>
                        <option value={false}>Not available</option>
                    </select>
                </div> */}

                <div className='form-group'>
                    <label htmlFor="teacherId">Teacher id </label>
                    <input className='inputFieldsLogin' type="number" id='teacherId' {...register("teacherId")} />
                </div>
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

export default ClassesForm;