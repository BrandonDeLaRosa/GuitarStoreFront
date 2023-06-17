import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteClassThunk, getClassesThunk, updateClassesThunk } from '../store/slices/classes.slice';
import ClassesForm from '../components/Classes/ClassesForm';
import { useForm } from 'react-hook-form';

const Classes = () => {
    const dispatch = useDispatch()
    const classes = useSelector(state => state.class)
    const { register, handleSubmit, reset } = useForm();
    const [update, setUpdate] = useState(false);
    const [selectedClase, setSelectedClase] = useState(null);


    const handleUpdate = (clase) => {
        setSelectedClase(clase); // Almacenar el admin seleccionado en el estado
        setUpdate(true);
    };

    const updateClase = ({ name, description, available, teacher_id }) => {
        const data = { name, description, available, teacher_id };
        dispatch(updateClassesThunk(selectedClase.id, data)); // Usar el admin seleccionado del estado
        reset({
            name: '',
            description: '',
            available: null,
            teacherId: true
        });
        console.log(selectedClase);
        setUpdate(false);
    };


    useEffect(() => {
        dispatch(getClassesThunk())
    }, [])

    console.log(selectedClase);
    return (
        <div>
            {update ? (
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
                        <select name="availability" id="availability" {...register("available")}>
                            <option value={true}>available</option>
                            <option value={false}>Not available</option>
                        </select>
                        <div className='inputContainer'>
                            <label htmlFor="teacher_id">Teacher Id</label>
                            <input type="text" id='teacher_id' {...register("teacher_id")} />
                        </div>
                        <button type='submit'>update</button>
                        <button onClick={() => setUpdate(false)}>Cancel</button>
                    </form>
                </>
            ) : (
                <>

                    <h1>Classes</h1>
                    <ClassesForm />
                    <ul>
                        {
                            classes.map(clase => (
                                <li key={clase.id}>
                                    {clase.name} {clase.description}
                                    <button onClick={() => dispatch(deleteClassThunk(clase.id))}>Delete</button>
                                    <button onClick={() => handleUpdate(clase)}>Update</button>
                                </li>
                            ))
                        }
                    </ul>
                </>)}
        </div>
    );
};

export default Classes;