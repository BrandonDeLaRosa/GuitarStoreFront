import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductThunk, getProductsThunk } from '../store/slices/products.slice';
import ProductsForm from '../components/Products/ProductsForm';

const Products = () => {
    const products = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    },[])

    return (
        <div>
            <h1>Products</h1>
            <ProductsForm/>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>
                            {product.name}
                            <button onClick={() => dispatch(deleteProductThunk(product.id))}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Products;