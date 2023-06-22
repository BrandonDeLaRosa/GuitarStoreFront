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
             {update ? (
                <>
                <h4 style={{ color: "red", textAlign: "center" }}>Please fill all fields!</h4>
                    <div className='pagesCreateForm'>
                    <h1 className='formTitle'>Update a product</h1>
                    <form onSubmit={handleSubmit(updateClase)} className='formContainer'>
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input className='inputFieldsLogin' type="text" id='name' {...register("name")} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="description">Description</label>
                            <input className='inputFieldsLogin' type="text" id='description' {...register("description")} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="price">Price</label>
                            <input className='inputFieldsLogin' type="float" id='price' {...register("price")} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="quantity">Quantity</label>
                            <input className='inputFieldsLogin' type="number" id='quantity' {...register("quantity")} />
                        </div>
                        <select className='updateSelectContainer' name="availability" id="availability" {...register("available")}>
                            <option value={true}>available</option>
                            <option value={false}>Not available</option>
                        </select>
                        <div className='form-group'>
                            <label htmlFor="schoolAdminId">Administrator Id</label>
                            <input className='inputFieldsLogin' type="text" id='schoolAdminId' {...register("schoolAdminId")} />
                        </div>
                        <div className='updateBtns'>
                        <button className='updateBtn' type='submit'>update</button>
                        <button className='updateBtn' onClick={() => setUpdate(false)}>Cancel</button>
                        </div>
                    </form>
                    </div>
                </>
            ) : (
                <>
                    <h1>Products</h1>
                    <div className='pageContainer'>
                    <ProductsForm />
                    <ul className='listContainer'>
                        {
                            products.map(product => (
                                <li className='listItems' key={product.id}>
                                    <h5><b>Id: </b>{product.id}</h5>
                                    <h5><b>Name: </b>{product.name}</h5>
                                    <h5><b>Description: </b>{product.description}</h5>
                                    <h5><b>Price: </b>{product.price}</h5>
                                    <h5><b>Quantity: </b>{product.quantity}</h5>
                                    <h5><b>Img: </b>{product.img}</h5>
                                    <h5><b>Available: </b>{product.available? "Disponible" : "No disponible"}</h5>
                                    <br /><hr />
                                    <h5><b>Admin Related:</b></h5> 
                                    <h5><b>Id: </b>{product.schoolAdminId}</h5>
                                    <h5><b>Firstname: </b>{product.SchoolAdmin.firstname}</h5> 
                                    <h5><b>LastName: </b> {product.SchoolAdmin.lastname}</h5>
                                    <br /><hr />
                                    <h5><b>Sale Related:</b></h5> 
                                    {product.SalesProducts?.map(estudiante => (
                                        <li className='subListItems'>
                                            <h5><b>Id: </b>{estudiante.id}</h5>
                                            {/* <h5><b>Firstname: </b>{estudiante.Student.firstname}</h5>  */}
                                            {/* <h5><b>LastName: </b> {estudiante.Student.lastname}</h5> */}
                                        </li>
                                    ))}
                                    <br /><hr />
                                   <div className='dltUpdBtns'>
                                   <button className='dlUpBtn' onClick={() => dispatch(deleteProductThunk(product.id))}>delete</button>
                                    <button className='dlUpBtn' onClick={() => handleUpdate(product)}>Update</button>
                                   </div>
                                </li>
                            ))
                        }
                    </ul>
                    </div>
                </>)}
        </div>
    );
};

export default Products;