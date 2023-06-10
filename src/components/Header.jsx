import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navContainer'>
            {/* <h1>Header</h1> */}
            <Link className='link' to={"/admins"}>Admins</Link>
            <Link className='link' to={"/teachers"}>Teachers</Link>
        </div>
    );
};

export default Header;