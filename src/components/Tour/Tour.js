import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tour.css'
const Tour = (props) => {
    const {image, place, description} = props.tour;

    return (
        <div className='border border-dark m-1 rounded tour-card bg-light'>
            <Card.Body >
                <Card.Text>
                    <img className='card-img img-card' src={image} alt="" />
                    <h5>Place: {place}</h5>
                    <h6>Description: {description}</h6>
                </Card.Text>
              
               <button className='bg-warning  text-danger fw-bold rounded'>
               <Nav.Link as={Link} to="/ordernow">Buy Nw</Nav.Link>
                </button>
                
            </Card.Body>
        </div>
    );
};

export default Tour;

