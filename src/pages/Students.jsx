import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentThunk, getStudentsThunk, updateStudentsThunk } from '../store/slices/students.slice';
import StudentsForm from '../components/Students/StudentsForm';
import { useForm } from 'react-hook-form';

const Students = () => {
    const students = useSelector(state => state.student)
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const [update, setUpdate] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        dispatch(getStudentsThunk())
    }, [])


    const handleUpdate = (student) => {
        setSelectedStudent(student); // Almacenar el admin seleccionado en el estado
        setUpdate(true);
    };

    const updateStudent = ({ firstname, lastname, age, location }) => {
        const data = { firstname, lastname, age, location };
        dispatch(updateStudentsThunk(selectedStudent.id, data)); // Usar el admin seleccionado del estado
        reset({
            firstname: '',
            lastname: '',
            age: null,
            location: ""
        });
        console.log(selectedStudent);
        setUpdate(false);
    };

    return (

        <div>
            {update ? (
                <>
                <h4 style={{ color: "red", textAlign: "center" }}>Please fill all fields!</h4>
                    <div className='pagesCreateForm'>
                        <h1 className='formTitle'>Update a student</h1>
                        <form onSubmit={handleSubmit(updateStudent)} className='formContainer'>
                            <div className='form-group'>
                                <label htmlFor="firstname">Firstname</label>
                                <input className='inputFieldsLogin' type="text" id='firstname' {...register("firstname")} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="lastname">Lastname</label>
                                <input className='inputFieldsLogin' type="text" id='lastname' {...register("lastname")} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="age">Age:</label>
                                <input className='inputFieldsLogin' type="number" id='age' {...register("age")} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="location">Location</label>
                                <input className='inputFieldsLogin' type="text" id='location' {...register("location")} />
                            </div>
                            {/* <div className='form-group'>
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" id='lastname' {...register("lastname")} />
                        </div> */}
                           <div className='updateBtns'>
                        <button className='updateBtn' type='submit'>update</button>
                        <button className='updateBtn' onClick={() => setUpdate(false)}>Cancel</button>
                        </div>
                        </form>
                    </div>
                </>
            ) : (
                <>
                    <h1>Create Student</h1>
                    <div className='pageContainer'>
                        <StudentsForm />
                        <ul className='listContainer'>
                            {
                                students.map(student => (
                                    <li key={student.id}>
                                        {student.firstname} {student.lastname}
                                        <button onClick={() => dispatch(deleteStudentThunk(student.id))}>Delete</button>
                                        <button onClick={() => handleUpdate(student)}>Update</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </>)}
        </div>
    );
};

export default Students;