import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentThunk, getStudentsThunk } from '../store/slices/students.slice';
import StudentsForm from '../components/Students/StudentsForm';

const Students = () => {

    const students = useSelector(state => state.student)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudentsThunk())
    }, [])

    return (
        <div>
            <h1>Studetns</h1>
            <StudentsForm/>
            <ul>
                {
                    students.map(student => (
                        <li key={student.id}>
                            {student.firstname} {student.lastname}
                            <button onClick={() => dispatch(deleteStudentThunk(student.id))}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Students;