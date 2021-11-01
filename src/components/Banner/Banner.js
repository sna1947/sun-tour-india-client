import React from 'react';
import banner from '../../img/banner2.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <img className='banner-img' src={banner} alt="" />
        </div>
    );
};

export default Banner;