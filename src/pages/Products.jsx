import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductThunk, getProductsThunk, updateProductsThunk } from '../store/slices/products.slice';
import ProductsForm from '../components/Products/ProductsForm';
import { useForm } from 'react-hook-form';

const Products = () => {
    const products = useSelector(state => state.product)
    const dispatch = useDispatch()

    const { register, handleSubmit, reset } = useForm();
    const [update, setUpdate] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const handleUpdate = (product) => {
        setSelectedProduct(product); // Almacenar el admin seleccionado en el estado
        setUpdate(true);
    };

    const updateClase = ({ name, description, available,price, quantity, schoolAdminId }) => {
        const data = { name, description, available,price,quantity, schoolAdminId };
        dispatch(updateProductsThunk(selectedProduct.id, data)); // Usar el admin seleccionado del estado
        reset({
            name: '',
            description: '',
            price: null,
            quantity:null,
            available: null,
            schoolAdminId: null
        });
        console.log(selectedProduct);
        setUpdate(false);
    };

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])
    console.log(products);

    return (
        <div>
            // {update ? (
                <>
                    <h1>Update</h1>
                    <form onSubmit={handleSubmit(updateClase)}>
                        <div className='inputContainer'>
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' {...register("name")} />
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="description">Description</label>
                            <input type="text" id='description' {...register("description")} />
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="price">Price</label>
                            <input type="float" id='price' {...register("price")} />
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" id='quantity' {...register("quantity")} />
                        </div>
                        <select name="availability" id="availability" {...register("available")}>
                            <option value={true}>available</option>
                            <option value={false}>Not available</option>
                        </select>
                        <div className='inputContainer'>
                            <label htmlFor="schoolAdminId">Administrator Id</label>
                            <input type="text" id='schoolAdminId' {...register("schoolAdminId")} />
                        </div>
                        <button type='submit'>update</button>
                        <button onClick={() => setUpdate(false)}>Cancel</button>
                    </form>
                </>
            ) : (
                <>

                    <h1>Products</h1>
                    <ProductsForm />
                    <ul>
                        {
                            products.map(product => (
                                <li key={product.id}>
                                    {product.name}
                                    <button onClick={() => dispatch(deleteProductThunk(product.id))}>delete</button>
                                    <button onClick={() => handleUpdate(product)}>Update</button>
                                </li>
                            ))
                        }
                    </ul>
                </>)}
        </div>
    );
};

export default Products;