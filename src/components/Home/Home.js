import React from 'react';
import { Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import OurTeam from '../OurTeam/OurTeam';
import Tours from '../Tours/Tours';
import './Home.css'
const Home = () => {
    return (
        <div className='bgc' >
            <Banner></Banner>
            <h1 className='text-info bg-success container p-2'>   Explore Your Travel</h1>
            <Tours></Tours>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;