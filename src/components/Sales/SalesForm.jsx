import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createSaleThunk } from '../../store/slices/sales.slice';

const SalesForm = () => {

    const { handleSubmit, register, reset } = useForm()
    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(createSaleThunk(data))
    }

    return (
        <div className='pagesCreateForm'>
            <h1 className='formTitle'>Create Sale</h1>
            <form onSubmit={handleSubmit(submit)} className='formContainer'>
                <div className='form-group'>
                    <label htmlFor="client">Client</label>
                    <input className='inputFieldsLogin' type="text" id='client' {...register("client")} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input className='inputFieldsLogin' type="email" id='email' {...register("email")} />
                </div>
                <div className='form-group'>
                    <label htmlFor="phone">Phone</label>
                    <input className='inputFieldsLogin' type="number" id='phone' {...register("phone")} />
                </div>
                <div className='form-group'>
                    <label htmlFor="location">Location</label>
                    <input className='inputFieldsLogin' type="text" id='location' {...register("location")} />
                </div>
                <div className='from-group'>
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

export default SalesForm;