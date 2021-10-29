import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.css'

import './Header.css'
const Header = () => {
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
                    {/* <Nav.Link as={Link} to="/register"><span className='bg-info p-2 rounded'>Register</span></Nav.Link> */}
                    <Nav.Link as={Link} to="/Login"><span className='bg-info p-2 rounded'>Login</span></Nav.Link>

                    {/* <Nav.Link as={Link} to="/admin"><span className='bg-black p-2 rounded text-white'>Admin</span></Nav.Link> */}
                </Nav>
            </div>


        </div>
    );
};

export default Header;