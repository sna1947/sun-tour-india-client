import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UpdateOrders.css'

const UpdateOrders = () => {
    const [orders, setOrders] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);

    // UPDATE USER NAME=====================
    const handleNameChange = e =>{
       const updatedName = e.target.value;
       const updatedUser ={name:updatedName, email:orders.email};
       setOrders(updatedUser);
    };
    const handlEmailChange =e=>{
        const updatedEmail = e.target.value;
        const updatedUser ={name:orders.name, email:updatedEmail};
        setOrders(updatedUser);
    };

    const handleUpdateOrder = e =>{
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url,{
            method:'PUT',
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(orders)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.modifiedCount > 0){
                alert('Successfully  Updated')
            }
        })
      e.preventDefault();
    };
    return (
        <div className='m-5 p-5 rounded bgc'>
            <h3>Update Name: {orders.name}</h3> <br />
            <h3>Update Email: {orders.email}</h3>
            <p>{id}</p>
            <form onSubmit={handleUpdateOrder}>
                <input type="name"onChange={handleNameChange} value={orders.name || ''} placeholder='name'/>
                <input type="email" onChange={handlEmailChange} value={orders.email || ''} placeholder='email' />
                <input type="submit" value='update' />

            </form>
        </div>
    );
};

export default UpdateOrders;