import React from 'react';
import Banner from '../Banner/Banner';
import Tours from '../Tours/Tours';
import './Home.css'
const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <h1 className='text-danger bg-warning container'>   Explore Your Travel</h1>
            <Tours></Tours>
        </div>
    );
};

export default Home;