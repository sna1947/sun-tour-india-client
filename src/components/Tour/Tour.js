import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tour.css'
const Tour = (props) => {
    const {image, place, price, description, _id} = props.tour;
    console.log(props);

    return (
        <div className='border border-dark m-1 rounded tour-card bg-light'>
            <Card.Body >
                <Card.Text>
                    <img className='card-img img-card' src={image} alt="" />
                    <h5>Place: {place}</h5>
                    <h5>Price: {price}</h5>
                    <h6>Description: {description.slice(0,100)}</h6>
                </Card.Text>

                <Link to ={`/ordernow/${_id}`} ><button className='bg-warning  text-danger fw-bold rounded'>See Details</button></Link>
                
            </Card.Body>
        </div>
    );
};

export default Tour;

