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
        <form onSubmit={handleSubmit(submit)}>
            <div className='inputContainer'>
                <label htmlFor="name">Product Name</label>
                <input type="text" id='name' {...register("name")} />
            </div>
            <div className='inputContainer'>
                <label htmlFor="description">Description</label>
                <input type="text" id='description' {...register("description")} />
            </div>
            <div className='inputContainer'>
                <label htmlFor="price">Price</label>
                <input type="number" id='price' {...register("price")} />
            </div>
            <div className='inputContainer'>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id='quantity' {...register("quantity")} />
            </div>
            {/* <div>
                <label htmlFor="img">Profile Picture</label>
                <input type="file" id='img' {...register("img")} />
            </div> */}
            <div className='inputContainer'>
                <label htmlFor="available">Availability</label>
                <select name="availability" id="availability" {...register("available")}>
                    <option value={true}>available</option>
                    <option value={false}>Not available</option>
                </select>
            </div>
            <div>
                <label htmlFor="schoolAdminId">Administrator id </label>
                <input type="number" id='schoolAdminId' {...register("schoolAdminId")} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default ProductsForm;