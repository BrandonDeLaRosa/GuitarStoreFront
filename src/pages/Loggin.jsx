import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggin } from '../store/slices/loggin.slice';
import { useNavigate } from 'react-router-dom';
import { getAdminsThunk } from '../store/slices/schoolAdmin.slice';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import img from '../assets/ilustraciones/signIn.png'

const Loggin = () => {
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [passwordVisibility, setPasswordVisibility] = useState(false)

    useEffect(() => {
        dispatch(getAdminsThunk())
    }, [])

    const submit = (data) => {
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

    const visible = (e) => {
        // alert("click")
        e.preventDefault()
        setPasswordVisibility(!passwordVisibility)
    }


    return (
        
        <main className=''>
            <section class="my-lg-14 my-8">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                            <img src={img} alt="" class="img-fluid" />
                        </div>
                        <div class="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                            <div class="mb-lg-9 mb-5">
                                <h1 class="mb-1 h2 fw-bold">¡Bienvenido administrador!</h1>
                                <p>Para iniciar, ingresa los siguientes datos.</p>
                            </div>

                            <form onSubmit={handleSubmit(submit)}>
                                <div class="row g-3">

                                    <div class="col-12">
                                        <label for="username">Usuario:</label>
                                        <input className='inputFieldsLogin' type="text" id='username' name='username' required {...register("username")} />
                                    </div>
                                    <div class="col-12">
                                        <div class="password-field position-relative">
                                            <label for="password">Password:</label>
                                            <input className='inputFieldsLogin' type={passwordVisibility ? "text" : "password"} id='password' name='password' required {...register("password")} />
                                            <span><i id="passwordToggler" class="bi bi-eye-slash"></i></span>
                                        <button className='eye' onClick={visible} style={{position:"absolute", bottom:"9px", right:"11px"}}>
                                            {passwordVisibility ? <i class="fa-regular fa-eye-slash"></i> 
                                            : 
                                            <i class="fa-solid fa-eye"></i>}</button>
                                        </div>

                                    </div>
                                    <div class="col-12 d-grid">
                                        <button class="cta">
                                            
                                            <span class="hover-underline-animation"> Enviar </span>
                                            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                            </svg>
                                        </button>

                                    </div>
                                    <div class="d-flex justify-content-between">
                                    </div>
                                    <div>¿No tienes cuenta? <a href="signup.html"> Registrarse</a></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Loggin;