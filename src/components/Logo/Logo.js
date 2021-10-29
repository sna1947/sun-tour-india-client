import React from 'react';
import logoo from '../../img/logoo.png'
import './Logo.css'

const Logo = () => {
    return (
        <div>
            <img className='logo-img ' src={logoo} alt="" />
        </div>
    );
};

export default Logo;