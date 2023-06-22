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
                    <div className='pagesCreateForm'>
                        <h1 className='formTitle'>Update a class</h1>
                        <form onSubmit={handleSubmit(updateClase)} className='formContainer'>
                            <div className='form-group'>
                                <label htmlFor="name">Name</label>
                                <input className='inputFieldsLogin' type="text" id='name' {...register("name")} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="description">Description</label>
                                <input className='inputFieldsLogin' type="text" id='description' {...register("description")} />
                            </div>
                            <select className='updateSelectContainer' name="availability" id="availability" {...register("available")}>
                                <option className='selectOption' value={true}>available</option>
                                <option className='selectOption' value={false}>Not available</option>
                            </select>
                            <div className='form-group'>
                                <label htmlFor="teacher_id">Teacher Id</label>
                                <input className='inputFieldsLogin' type="text" id='teacher_id' {...register("teacher_id")} />
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
                    <h1>Classes</h1>
                    <div className='pageContainer'>
                        <ClassesForm />
                        <ul className='listContainer'>
                            {
                                classes.map(clase => (
                                    <li key={clase.id} className='listItems'>
                                        <h5><b>Class: </b> {clase.name} </h5>
                                        <h5><b>Description: </b> {clase.description} </h5>
                                        <h5><b>Availability: </b> {clase.available ? "disponible" : "No disponible"} </h5>
                                        <br /><hr />
                                        <h5><b>Admin Related:</b></h5>
                                        <h5><b>Id: </b>{clase.schoolAdminId}</h5>
                                        <h5><b>Firstname: </b>{clase.SchoolAdmin.firstname}</h5>
                                        <h5><b>LastName: </b> {clase.SchoolAdmin.lastname}</h5>
                                        <br /><hr />
                                        <h5><b>Students Related:</b></h5>
                                        {clase.StudentsClasses?.map(estudiante => (
                                            <li className='subListItems'>
                                                <h5><b>Id: </b>{estudiante.Student.id}</h5>
                                                <h5><b>Firstname: </b>{estudiante.Student.firstname}</h5>
                                                <h5><b>LastName: </b> {estudiante.Student.lastname}</h5>
                                            </li>
                                        ))}
                                        <br /><hr />
                                        <h5><b>Teacher Related:</b></h5>
                                        <h5><b>Id: </b>{clase.teacherId}</h5>
                                        <h5><b>Firstname: </b>{clase.Teacher.firstname}</h5>
                                        <h5><b>LastName: </b> {clase.Teacher.lastname}</h5>
                                        <br /><hr />
                                        <div className='dltUpdBtns'>
                                            <button className='dlUpBtn' onClick={() => dispatch(deleteClassThunk(clase.id))}>Delete</button>
                                            <button className='dlUpBtn' onClick={() => handleUpdate(clase)}>Update</button>
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

export default Classes;