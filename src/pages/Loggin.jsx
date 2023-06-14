import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggin } from '../store/slices/loggin.slice';
import { useNavigate } from 'react-router-dom';
import { getAdminsThunk } from '../store/slices/schoolAdmin.slice';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Loggin = () => {
    // const [id, setId] = useState("")
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAdminsThunk())
    }, [])

    const submit = (data) => {
        // console.log(data);
        axios.post("http://localhost:8000/api/v1/guitarStore/auth/login", data)
        .then(res => {
            alert("Credenciales correctas")
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("id", res.data.id)
            console.log(res.data.id);
            navigate("/admins")
        })
        .catch(error => {
            if(error.response.status === 400){
                alert("Wrong credentials")
            }
            console.log(error.response);
        })
    }

    return (
        <div>
            <h1>Welcome to guitar Store</h1>
            <h3>Please log in!</h3>
            <form onSubmit={handleSubmit(submit)}>
                {/* <label htmlFor="id">Id</label>
                <input type="number" id='id' name='id' required value={id}
                onChange={e => setId(e.target.value)}/> */}
                <label htmlFor="username">Username</label>
                <input type="text" id='username' name='username' required {...register("username")} />
                <label htmlFor="password">Password</label>
                <input type="text" id='password' name='password' required {...register("password")} />
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default Loggin;