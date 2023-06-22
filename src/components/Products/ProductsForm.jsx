import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createProductThunk } from '../../store/slices/products.slice';

const ProductsForm = () => {
    const { handleSubmit, register, reset } = useForm()
    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(createProductThunk(data))
    }

    return (
        <div className='pagesCreateForm'>
            <h1 className='formTitle'>Create</h1>
            <form onSubmit={handleSubmit(submit)} className='formContainer'>
            <div className='form-group'>
                <label htmlFor="name">Product Name</label>
                <input className='inputFieldsLogin' type="text" id='name' {...register("name")} />
            </div>
            <div className='form-group'>
                <label htmlFor="description">Description</label>
                <input className='inputFieldsLogin' type="text" id='description' {...register("description")} />
            </div>
            <div className='form-group'>
                <label htmlFor="price">Price</label>
                <input className='inputFieldsLogin' type="number" id='price' {...register("price")} />
            </div>
            <div className='form-group'>
                <label htmlFor="quantity">Quantity</label>
                <input className='inputFieldsLogin' type="number" id='quantity' {...register("quantity")} />
            </div>
            {/* <div>
                <label htmlFor="img">Profile Picture</label>
                <input className='inputFieldsLogin' type="file" id='img' {...register("img")} />
            </div> */}
            {/* <div className='form-group'>
                <label htmlFor="available">Availability</label>
                <select name="availability" id="availability" {...register("available")}>
                    <option value={true}>available</option>
                    <option value={false}>Not available</option>
                </select>
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

export default ProductsForm;