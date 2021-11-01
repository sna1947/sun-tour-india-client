import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
 
// const PrivateRoute = (props) => {
const PrivateRoute = ({children, ...rest}) => {
    // const {children, ...rest} = props;
    const {user,loding} = useAuth();

    if (loding) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }else{




    return (
        <Route
        {...rest}
        render = {({location})=>user.email ? children :
        <Redirect  to={{
            pathname: "/login",
            state: { from: location }
          }}
          ></Redirect>}
        ></Route>
    );
        }
};
export default PrivateRoute;