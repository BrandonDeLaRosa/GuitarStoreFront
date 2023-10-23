import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createAdminThunk } from '../../store/slices/schoolAdmin.slice';

const SchoolAdminForm = () => {

    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createAdminThunk(data))
        reset({
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        })
    }


    // }
    return (

        <div className='pagesCreateForm'>
            {/* <div className='formTitle'>Create Admin</div> */}
            <div class="row my-10">
                <div class="offset-lg-1 col-lg-10 col-12">
                    <div class="mb-8">
                    </div>
                    <form className="row" onSubmit={handleSubmit(submit)}  >
                        <div class="col-md-6 mb-3">
                            <label class="form-label" for="fname"> First Name<span class="text-danger">*</span></label>
                            <input type="text" id="fname" class="form-control" name="fname" placeholder="Enter Your First Name" required/>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label" for="lname"> Last Name<span class="text-danger">*</span></label>
                            <input type="text" id="lname" class="form-control" name="lname" placeholder="Enter Your Last name" required/>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label" for="company"> Company<span class="text-danger">*</span></label>
                            <input type="text" id="company" name="company" class="form-control" placeholder="Your Company" required/>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label" for="title"> Title</label>
                            <input type="text" id="title" name="title" class="form-control" placeholder="Your Title" required/>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label" for="emailContact">Email<span class="text-danger">*</span></label>
                            <input type="email" id="emailContact" name="emailContact" class="form-control" placeholder="Enter Your First Name" required />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label" for="phone"> Phone</label>
                            <input type="text" id="phone" name="phone" class="form-control" placeholder="Your Phone Number" required/>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label" for="comments"> Comments</label>
                            <textarea rows="3" id="comments" class="form-control" placeholder="Additional Comments"></textarea>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default SchoolAdminForm;

