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
    const [passwordVisibility, setPasswordVisibility] = useState(false)

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
                if (error.response.status === 400) {
                    alert("Wrong credentials")
                }
                console.log(error.response);
            })
    }


    return (
        <div>
            <div class="login-card">
                <div className="card-header">
                    <div className="log">Login</div>
                </div>
                <form className='formContainer' onSubmit={handleSubmit(submit)}>
                    <div className="form-group">
                        <label for="username">Username:</label>
                        <input className='inputFieldsLogin' type="text" id='username' name='username' required {...register("username")} />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input className='inputFieldsLogin' type={passwordVisibility? "text" : "password"} id='password' name='password' required {...register("password")} />
                    </div>
                    <button class="cta">
                        <span class="hover-underline-animation"> Submit </span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                        </svg>
                    </button>
                    <button onClick={() => setPasswordVisibility(!passwordVisibility)}><i class="fa-solid fa-eye"></i></button>
                </form>
            </div>
        </div>
    );
};

export default Loggin;