import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createTeacherThunk } from '../../store/slices/teachers.slice';

const TeachersForm = () => {
    const {register, handleSubmit,reset} = useForm();
    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(createTeacherThunk(data))
        reset({
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        })
        console.log(data);
    }
    // const id = parseInt(localStorage.getItem("id"))
    
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id='firstanme' {...register("firstname")} />
            </div>
            <div>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" id='lastanme' {...register("lastname")} />
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <input type="text" id='location' {...register("location")} />
            </div>
            {/* <div>
                <label htmlFor="img">Profile Picture</label>
                <input type="file" id='img' {...register("img")} />
            </div> */}
            <div>
                <label htmlFor="schoolAdminId">Administrator id </label>
                <input type="number" id='schoolAdminId' {...register("schoolAdminId")} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default TeachersForm;