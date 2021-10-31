import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const OrderNow = () => {

    const [ordernow, setOrdernow] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const url = `http://localhost:5000/ordernow/${id}`;
        // const url = `https://fast-beach-64529.herokuapp.com/ordernow/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setOrdernow(data) )
    },[]);

console.log(ordernow);
    return (
        <div className='border border-success m-4 p-3 bg-light'>
            {/* <h4>order now useu id: {id}</h4> */}

            <img src={ordernow.image} alt="" />
           <h4>{ordernow.place}</h4>
            <h4>{ordernow.description}</h4>
            
            <Link to ={'/home'} >
                <button className='bg-warning  text-danger fw-bold rounded'>Go to Home Page</button>
            </Link>
            <Link to ={'/orderplace'} >
                <button className=' m-2 bg-warning  text-danger fw-bold rounded'>Book Now</button>
            </Link>
        </div>
    );
};

export default OrderNow;