import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeachersForm from '../components/Teachers/TeachersForm';
import { deleteTeacherThunk, getAllTeachers, updateTeacherThunk } from '../store/slices/teachers.slice';
import { useForm } from 'react-hook-form';

const Teachers = () => {
    const { register, handleSubmit, reset } = useForm();
    const teachers = useSelector(state => state.teacher)
    const dispatch = useDispatch();
    const [update, setUpdate] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
   
    useEffect(() => {
        dispatch(getAllTeachers())
    }, [])

    const handleUpdate = (teacher) => {
        setSelectedTeacher(teacher); // Almacenar el admin seleccionado en el estado
        setUpdate(true);
    };

    const updateTeacher = ({ firstname, lastname }) => {
        const data = { firstname, lastname };
        dispatch(updateTeacherThunk(selectedTeacher.id, data)); // Usar el admin seleccionado del estado
        reset({
            firstname: '',
            lastname: '',
            // username: '',
        });
        console.log(selectedTeacher);
        setUpdate(false);
    };

    return (
        <div>
            {update ? (
                <>
                    <h1>Update</h1>
                    <form onSubmit={handleSubmit(updateTeacher)}>
                        <div className='inputContainer'>
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" id='firstname' {...register("firstname")} />
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" id='lastname' {...register("lastname")} />
                        </div>
                        {/* <div className='inputContainer'>
                            <label htmlFor="username">Username</label>
                            <input type="text" id='username' {...register("username")} />
                        </div> */}
                        <button type='submit'>update</button>
                        <button onClick={() => setUpdate(false)}>Cancel</button>
                    </form>
                </>
            ) : (
                <>
                    <h1>Teachers</h1>
                    <TeachersForm />
                    <ul>
                        {
                            teachers.map(teacher => (
                                <li key={teacher.id}>
                                    {teacher.firstname} {teacher.lastname}
                                    <button onClick={() => dispatch(deleteTeacherThunk(teacher.id))}>delete</button>
                                    <button onClick={() => handleUpdate(teacher)}>Update</button>
                                </li>
                            ))
                        }
                    </ul>
                </>)}
        </div>
    );
};

export default Teachers;

// {update ? (
//     <>
//         <h1>Update</h1>
//         <form onSubmit={handleSubmit(updateTeacher)}>
//             <div className='inputContainer'>
//                 <label htmlFor="firstname">Firstname</label>
//                 <input type="text" id='firstname' {...register("firstname")} />
//             </div>
//             <div className='inputContainer'>
//                 <label htmlFor="lastname">Lastname</label>
//                 <input type="text" id='lastname' {...register("lastname")} />
//             </div>
//             {/* <div className='inputContainer'>
//                 <label htmlFor="username">Username</label>
//                 <input type="text" id='username' {...register("username")} />
//             </div> */}
//             <button type='submit'>update</button>
//             <button onClick={() => setUpdate(false)}>Cancel</button>
//         </form>
//     </>
// ) : (
//     <>
        
//     </>)}