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
        <div className='d-flex container align-items-center align-items-center' >

            <div className=' reg-form rounded p-3'>
                <h1>Please Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("example")} placeholder='Name' />
                    <input {...register("exampleRequired", { required: true })} placeholder='email' />
                    <input  {...register("example")} placeholder='Address' />
                    {appendErrors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                    <Nav.Link as={Link} to="/login"> Already Register?</Nav.Link>
                </form>
            </div>
            

           

        </div>
    );
};

export default Register;