import React from 'react';
import banner from '../../img/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <img className='img-fluid' src={banner} alt="" />
        </div>
    );
};

export default Banner;