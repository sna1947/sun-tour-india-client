import React from 'react';
import { Nav } from 'react-bootstrap';
import { appendErrors } from 'react-hook-form';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bgc d-flex  align-items-center align-items-center' >

            <div className='bgc reg-form rounded p-3 ms-5 border border-light shadow-lg    rounded'>
                <h1>Please Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("example")} placeholder='Name' />
                    <input {...register("exampleRequired", { required: true })} placeholder='email' />
                    <input  {...register("example")} placeholder='Address' />
                    {appendErrors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                    <Nav.Link className='bg-success rounded text-warning' as={Link} to="/login"> Already Register?</Nav.Link>
                </form>
            </div>
            

           

        </div>
    );
};

export default Register;