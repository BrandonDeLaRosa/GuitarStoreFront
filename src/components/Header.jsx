import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const borrarLocalStorage = () => {
        localStorage.setItem("token","")
        navigate("/")
    }

    return (
        <div className='navContainer'>
            {/* <h1>Header</h1> */}
            <Link className='link' to={"/"}>Loggin</Link>
            <Link className='link' to={"/home"}>Home</Link>
            <Link className='link' to={"/admins"}>Admins</Link>
            <Link className='link' to={"/teachers"}>Teachers</Link>
            <Link className='link' to={"/students"}>Students</Link>
            <Link className='link' to={"/classes"}>Classes</Link>
            <Link className='link' to={"/products"}>Products</Link>
            <Link className='link' to={"/sales"}>Sales</Link>
            <button onClick={borrarLocalStorage}>LogOut</button>
        </div>
    );
};

export default Header;