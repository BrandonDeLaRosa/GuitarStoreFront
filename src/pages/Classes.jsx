import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteClassThunk, getClassesThunk } from '../store/slices/classes.slice';
import ClassesForm from '../components/Classes/ClassesForm';

const Classes = () => {
    const dispatch = useDispatch()
    const classes = useSelector(state => state.class)

    useEffect(() => {
        dispatch(getClassesThunk())
    },[])

    return (
        <div>
            <h1>Classes</h1>
            <ClassesForm/>
            <ul>
                {
                    classes.map(clase => (
                        <li key={clase.id}>
                            {clase.name} {clase.description}
                            <button onClick={() => dispatch(deleteClassThunk(clase.id))}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div> 
    );
};

export default Classes;