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

    const updateStudent = ({ firstname, lastname,age,location }) => {
        const data = { firstname, lastname,age,location };
        dispatch(updateStudentsThunk(selectedStudent.id, data)); // Usar el admin seleccionado del estado
        reset({
            firstname: '',
            lastname: '',
            age: null,
            location:""
        });
        console.log(selectedStudent);
        setUpdate(false);
    };

    return (
        <div>
            {update ? (
                <>
                    <h1>Update</h1>
                    <form onSubmit={handleSubmit(updateStudent)}>
                        <div className='inputContainer'>
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" id='firstname' {...register("firstname")} />
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" id='lastname' {...register("lastname")} />
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="age">Age:</label>
                            <input type="number" id='age' {...register("age")} />
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="location">Location</label>
                            <input type="text" id='location' {...register("location")} />
                        </div>
                        {/* <div className='inputContainer'>
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" id='lastname' {...register("lastname")} />
                        </div> */}
                        <button type='submit'>update</button>
                        <button onClick={() => setUpdate(false)}>Cancel</button>
                    </form>
                </>
            ) : (
                <>

                    <h1>Studetns</h1>
                    <StudentsForm />
                    <ul>
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
                </>)}
        </div>
    );
};

export default Students;