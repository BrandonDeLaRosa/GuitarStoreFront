import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSaleThunk, getSalesThunk } from '../store/slices/sales.slice';
import SalesForm from '../components/Sales/SalesForm';

const Sales = () => {

    const dispatch= useDispatch()
    const sales = useSelector(state => state.sale)
    useEffect(() => {
        dispatch(getSalesThunk())
    },[])

    return (
        <div>
            <h1>Sales</h1>
            <SalesForm/>
            <ul>
                {
                    sales.map(sale => (
                        <li key={sale.id}>
                            {sale.client} <button onClick={() => dispatch(deleteSaleThunk(sale.id))}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Sales;