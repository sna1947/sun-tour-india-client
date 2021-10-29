import React from 'react';
import { Nav } from 'react-bootstrap';
// import { appendErrors, useForm } from "react-hook-form";
import { Link, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import './Login.css'
const Login = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
// const {signInUsignGoogle} = useFirebase();
const {signInUsignGoogle} = useAuth();

const location = useLocation();
const history = useHistory();
const redirect_uri = location.state?.form || '/home';
// console.log('come form', location.state?.form);

const handleGoogleLogin =()=>{
    signInUsignGoogle()
    .then(result =>{
      history.push(redirect_uri);
    })
}

    return (
       
        <div className=' reg-form rounded p-3'>
                <h1>Please Login With Google</h1>
                <i className="fab fa-google bg-warning p-3 m-1 fs-3 fa-bold rounded text-danger"></i> <br />
                <button onClick={handleGoogleLogin} className='m-2 rounded'> Google signin</button>
                <Nav.Link as={Link} to="/register">Create Account !!!</Nav.Link>

                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    {appendErrors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                    <Nav.Link as={Link} to="/register">New User ?</Nav.Link>
                </form> */}
        </div>
        
    );
};

export default Login;