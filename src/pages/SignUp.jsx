import React from 'react';
import img from '../assets/ilustraciones/signUp.png'
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { handleSubmit, register, reset} = useForm();

    return (
        <div>
            <section class="my-lg-14 my-8">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                            <img src={img} alt="" class="img-fluid" />
                        </div>
                        <div class="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                            <div class="mb-lg-9 mb-5">
                                <h1 class="mb-1 h2 fw-bold">¡Bienvenido administrador!</h1>
                                <p>Ingrese los siguientes datos para crear una sesión.</p>
                            </div>
                            <form>
                                <div class="row g-3">
                                    <div class="col"><input type="text" class="form-control" placeholder="First name" aria-label="First name" required="" />
                                    </div>
                                    <div class="col"><input type="text" class="form-control" placeholder="Last name" aria-label="Last name" required="" />
                                    </div>
                                    <div class="col-12"><input type="email" class="form-control" id="inputEmail4" placeholder="Email" required="" />
                                    </div>
                                    <div class="col-12">

                                        <div class="password-field position-relative">
                                            <input type="password" id="fakePassword" placeholder="Enter Password" class="form-control" required="" />
                                            <span><i id="passwordToggler" class="bi bi-eye-slash"></i></span>
                                        </div>
                                    </div>
                                    <div class="col-12 d-grid"> <button type="submit" class="btn btn-primary">Register</button>
                                    </div>
                                    {/* <p><small>By continuing, you agree to our <a href="#!"> Terms of Service</a> & <a href="#!">Privacy
                                        Policy</a></small></p> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default SignUp;