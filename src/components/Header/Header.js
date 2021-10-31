import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Banner from '../Banner/Banner';
// import useFirebase from '../../Hooks/useFirebase';
import Logo from '../Logo/Logo';
import './Header.css'

import './Header.css'
const Header = () => {
    // const {user, logout} = useFirebase();
    const { user, logout } = useAuth();
    return (
        <div   >
            <Navbar sticky="top" className='d-flex justify-content-between align-items-center bg-black p-2'>
            <div className="logo d-flex justify-content-between align-items-center">
                <Logo></Logo>
                <span><h3 className='text-info '>Tour India</h3></span>

            </div>

            <div>
                
                <Nav   className="ms nav justify-content-center  p-3 m-3 ">
                    <Nav.Link className='bg  text-light fw-bold rounded ' as={Link} to="/home">Home</Nav.Link>

                    <Nav.Link className='bg  text-light fw-bold rounded ms-1' as={Link} to="/tours">Services</Nav.Link>
                    <Nav.Link className='bg  text-light fw-bold rounded ms-1' as={Link} to="/About">About</Nav.Link>
                    {/* <Nav.Link as={Link} to="/blog">Blog</Nav.Link> */}
                    <Nav.Link className='bg  text-light fw-bold rounded ms-1' as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link className='bg text-light fw-bold rounded ms-1' as={Link} to="/register">Register</Nav.Link>
                    {
                        user.email && <span className='text-warning'> {user.displayName}  </span>
                    }
                    {
                        user.email ? <Nav.Link className='bg  text-light fw-bold rounded ms-1' onClick={logout} to="/login">Log Out</Nav.Link> : <Nav.Link className='bg text-light fw-bold rounded ms-1' as={Link} to="/login">Login</Nav.Link>
                    }
                </Nav>
                
            </div>
            </Navbar>
            
        </div>
    );
};

export default Header;