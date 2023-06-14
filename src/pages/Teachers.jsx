import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeachersForm from '../components/Teachers/TeachersForm';
import { deleteTeacherThunk, getAllTeachers } from '../store/slices/teachers.slice';

const Teachers = () => {

    const teachers = useSelector(state => state.teacher)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllTeachers())
    }, [])

    return (
        <div>
            <h1>Teachers</h1>
            <TeachersForm />
            <ul>
                {
                    teachers.map(teacher => (
                        <li key={teacher.id}>
                            {teacher.firstname} {teacher.lastname}
                            <button onClick={() => dispatch(deleteTeacherThunk(teacher.id))}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Teachers;