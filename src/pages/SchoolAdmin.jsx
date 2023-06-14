import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminThunk, getAdminsThunk, updateAdminThunk } from '../store/slices/schoolAdmin.slice';
import SchoolAdminForm from '../components/schoolAdmin/SchoolAdminForm';
import { useForm } from 'react-hook-form';

const SchoolAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [update, setUpdate] = useState(false)
    const admins = useSelector(state => state.admin)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdminsThunk())
    }, [])


    const updateAdmin = ({admin}) => {
        // dispatch(updateAdminThunk({data}))
        // reset({
        //     firstname: '',
        //     lastname: '',
        //     username: '',
        // })
        // console.log(admin);
    }

    return (
        <div>
            <h1>School Admins</h1>
            {update ?
                (
                    <>
                        <h1>Update</h1>
                        <form onSubmit={handleSubmit(updateAdmin)}>
                            <div className='inputContainer'>
                                <label htmlFor="firstname">Firstname</label>
                                <input type="text" id='firstname' {...register("firstname")} />
                            </div>
                            <div className='inputContainer'>
                                <label htmlFor="lastname">Lastname</label>
                                <input type="text" id='lastname' {...register("lastname")} />
                            </div>
                            <div className='inputContainer'>
                                <label htmlFor="username">Username</label>
                                <input type="text" id='username' {...register("username")} />
                            </div>
                            <button type='submit'>update</button>
                            <button onClick={() => setUpdate(false)}>Cancel</button>
                        </form>
                    </>
                ) :
                (
                    <>
                        <SchoolAdminForm />
                        <ul>
                            {
                                admins.map(admin => (
                                    <li key={admin.id}>
                                        <h4>{admin.id} {admin.firstname} {admin.lastname}</h4>
                                        <h4>{admin.email} </h4>
                                        <button onClick={() => dispatch(deleteAdminThunk(admin.id))}>Delete</button>
                                        <button onClick={() => {setUpdate(true), updateAdmin(admin),console.log(admin);}}>Update</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                )
            }
        </div>
    );
};

export default SchoolAdmin;


/**
     //! Api consume without redux. 

    // const [admins, setAdmins] = useState([])
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/v1/guitarStore/admins')
    //     .then(res => setAdmins(res.data))
    // },[])
    // console.log(admins);

    // ! Api consume with redux but no thunks

    // const dispatch = useDispatch();
    // const admins = useSelector(state => state.admin)
    
    // useEffect(() => {
        //     axios.get('http://localhost:8000/api/v1/guitarStore/admins')
        //     .then( res => dispatch(setAdmins(res.data)))
        // },[])
        
        // !Api consume with redux and thunk
        // const admins = useSelector(state => state.admin)
        // const dispatch = useDispatch();
        
        // useEffect(() => {
        //     dispatch(getAdminsThunk())
        // },[])


    return (
 */