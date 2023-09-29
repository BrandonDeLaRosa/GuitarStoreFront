import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const borrarLocalStorage = () => {
        localStorage.setItem("token", "")
        navigate("/")
    }

    return (
        <div className='navContainer'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Escuela de musica: " La fama "</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Iniciar sesión</Nav.Link>
                            <Nav.Link as={Link} to="/signUp">Registrarse</Nav.Link>
                            <NavDropdown title="Sections" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/home" >Home</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/admins">Administrators</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/teachers">Teachers</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/students">Students</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/classes">Classes</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products">Products</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/sales">Sales</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Button} onClick={borrarLocalStorage}>
                                    Log out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;

{/* <h1>Header</h1>
            <Link className='link' to={"/"}>Loggin</Link>
            <Link className='link' to={"/home"}>Home</Link>
            <Link className='link' to={"/admins"}>Admins</Link>
            <Link className='link' to={"/teachers"}>Teachers</Link>
            <Link className='link' to={"/students"}>Students</Link>
            <Link className='link' to={"/classes"}>Classes</Link>
            <Link className='link' to={"/products"}>Products</Link>
            <Link className='link' to={"/sales"}>Sales</Link>
            <button onClick={borrarLocalStorage}>LogOut</button> 
*/}