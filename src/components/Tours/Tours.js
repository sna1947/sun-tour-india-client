import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(()=>{
        fetch('https://fast-beach-64529.herokuapp.com/tourProducts')
        .then(res => res.json())
        .then(data => setTours(data))
    },[])
    return (
        <div className='container bgc'>

            {/* <h3>tours: {tours.length}</h3> */}
            <Row xs={1} md={3} >
            {
                tours.map(tour=><Tour
                
                key={tour._id}
                tour={tour}
                >
               <Link to ={`/ordernow/${tour._id}`} ><button>Buy Now</button></Link>
                </Tour>)
            }
           
            </Row>
        </div>
    );
};

export default Tours;