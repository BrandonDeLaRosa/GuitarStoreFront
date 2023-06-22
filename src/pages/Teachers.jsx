import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeachersForm from '../components/Teachers/TeachersForm';
import { deleteTeacherThunk, getAllTeachers, updateTeacherThunk } from '../store/slices/teachers.slice';
import { useForm } from 'react-hook-form';
// import TeacherInfo from '../components/Teachers/TeacherInfo';

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
                <h4 style={{ color: "red", textAlign: "center" }}>Please fill all fields!</h4>
                    <div className='pagesCreateForm'>
                    <h1 className='formTitle'>Update a teacher</h1>
                    <form onSubmit={handleSubmit(updateTeacher)} className='formContainer'>
                        <div className='form-group'>
                            <label htmlFor="firstname">Firstname</label>
                            <input className='inputFieldsLogin' type="text" id='firstname' {...register("firstname")} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="lastname">Lastname</label>
                            <input className='inputFieldsLogin' type="text" id='lastname' {...register("lastname")} />
                        </div>
                        {/* <div className='form-group'>
                            <label htmlFor="username">Username</label>
                            <input className='inputFieldsLogin' type="text" id='username' {...register("username")} />
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
                <h1 >Teachers</h1>
                <div className='pageContainer'>
                    <TeachersForm />
                    <ul className='listContainer'>
                        <h2>Teacher Card</h2>
                        {
                            teachers.map(teacher => (
                                <li className='listItems' key={teacher.id}>
                                    <h5><b>Id: </b>{teacher.id}</h5>
                                    <h5><b>Firstname: </b>{teacher.firstname}</h5> 
                                    <h5><b>LastName: </b> {teacher.lastname}</h5>
                                    {/* <TeacherInfo url={teacher}/> */}
                                    <h5><b>Image: </b>{teacher.img}</h5>
                                    <br /><hr />
                                    <h5><b>Admin Related:</b></h5> 
                                    <h5><b>Id: </b>{teacher.schoolAdminId}</h5>
                                    <h5><b>Firstname: </b>{teacher.SchoolAdmin.firstname}</h5> 
                                    <h5><b>LastName: </b> {teacher.SchoolAdmin.lastname}</h5>
                                    <br /><hr />
                                    <h5><b>Students Related:</b></h5> 
                                    {teacher.StudentsTeachers.map(estudiante => (
                                        <li className='subListItems'>
                                            <h5><b>Id: </b>{estudiante.Student.id}</h5>
                                            <h5><b>Firstname: </b>{estudiante.Student.firstname}</h5> 
                                            <h5><b>LastName: </b> {estudiante.Student.lastname}</h5>
                                        </li>
                                    ))}
                                    <br /><hr />
                                    <h5><b>Classes Related:</b></h5> 
                                    {teacher.Classes.map(clase => (
                                        <li className='subListItems'><br />
                                            <h5><b>Id: </b>{clase.id}</h5>
                                            <h5><b>Class: </b>{clase.name}</h5> 
                                            <h5><b>Description: </b> {clase.description}</h5> <br />
                                        </li>
                                    ))}
                                    <br /><hr />
                                    <div className='dltUpdBtns'>
                                    <button className='dlUpBtn' onClick={() => dispatch(deleteTeacherThunk(teacher.id))}>delete</button>
                                    <button className='dlUpBtn' onClick={() => handleUpdate(teacher)}>Update</button>
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