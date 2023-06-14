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
              <form onSubmit={handleSubmit(submit)}>
            <div className='inputContainer'>
                <label htmlFor="client">Client</label>
                <input type="text" id='client' {...register("client")} />
            </div>
            <div className='inputContainer'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' {...register("email")} />
            </div>
            <div className='inputContainer'>
                <label htmlFor="phone">Phone</label>
                <input type="number" id='phone' {...register("phone")} />
            </div>
            <div className='inputContainer'>
                <label htmlFor="location">Location</label>
                <input type="text" id='location' {...register("location")} />
            </div>
            <div>
                <label htmlFor="schoolAdminId">Administrator id </label>
                <input type="number" id='schoolAdminId' {...register("schoolAdminId")} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default SalesForm;