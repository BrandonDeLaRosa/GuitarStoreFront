import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Teachers = () => {

    const teachers = useSelector(state => state.Teacher)
    const dispatch = useDispatch();


    return (
        <div>
            <h1>Teachers</h1>

            {/* {
                teachers.map(teacher => (
                    <li key={teacher.id}>

                    </li>
                ))
            } */}
        </div>
    );
};

export default Teachers;