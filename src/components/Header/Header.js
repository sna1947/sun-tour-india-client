import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import Logo from '../Logo/Logo';
import './Header.css'

import './Header.css'
const Header = () => {
    // const {user, logout} = useFirebase();
    const { user, logout } = useAuth();
    return (
        <div className='d-flex justify-content-between align-items-center bg-light p-2 m-2' >
            <div className="logo d-flex justify-content-between align-items-center">
                <Logo></Logo>
                <span><h3>Tour India</h3></span>

            </div>

            <div>
                <Nav className="ms nav justify-content-center bg-light p-3 m-2 ">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                    {/* <Nav.Link as={Link} to="/blog">Blog</Nav.Link> */}
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    {
                        user.email && <span> {user.displayName}  </span>
                    }
                    {
                        user.email ? <Nav.Link onClick={logout} to="/login">Log Out</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                </Nav>
            </div>

        </div>
    );
};

export default Header;