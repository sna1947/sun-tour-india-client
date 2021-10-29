import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tour.css'
const Tour = (props) => {
    const {image, place, description} = props.tour;
    // const url = `http://localhost:5000/tourProducts/${_id}`;
    return (
        <div className='border border-dark m-1 rounded tour-card bg-light'>
            <Card.Body >
                <Card.Text>
                    <img className='card-img img-card' src={image} alt="" />
                    <h5>Place: {place}</h5>
                    <h6>Description: {description}</h6>
                </Card.Text>
               {/* <button className='bg-warning  text-danger fw-bold rounded'><Link to={url}>visit me</Link></button> */}
            </Card.Body>
        </div>
    );
};

export default Tour;

