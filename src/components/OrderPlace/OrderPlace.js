import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderPlace.css'

const OrderPlace = () => {
   
    const nameRef= useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const placeRef = useRef();

    const handelAddOrder =(e)=>{
            const name = nameRef.current.value;
            const email = emailRef.current.value;
            const address = addressRef.current.value;
            const place = placeRef.current.value;
            
            const newOrder = { name, email, place, address };

            fetch('http://localhost:5000/orders',{
                method:'POST',
                headers:{ 'content-type' : 'application/json'},
                body:JSON.stringify(newOrder)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    alert('successfully added your Order.')
                    e.target.reset();
                }
            })

            e.prventDefault();
    };
    //**My booking================================================ */
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);

    // DELETE USER ========================
    const handelDeleteOrder = id =>{

       const proceed = window.confirm("Want to Delete ????");
       if(proceed){
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('successfully Deleted');
                const remainingOrders = orders.filter(order => order._id !==id);
                setOrders(remainingOrders);
            }
        })
       }

        
    };


    return (
        <div>
            {/* SUBMIT FORM============== */}
            <div className="row">
                <div className="col-lg-6 className= container reg-form rounded">
                    <h1>Please Booking Now</h1>
                    <form onSubmit={handelAddOrder}>
                        <input ref={nameRef} type="text"  placeholder='Name' />
                        <input ref={emailRef} type="text"  placeholder='email' />
                        <input ref={placeRef} type="text"  placeholder='place' />
                        <input ref={addressRef} type="text"  placeholder='address' />
                        <input  type="Submit"  />
                    </form>

                   
                </div>

                {/* ORDER SUBMITED PART=========================== */}

                <div className="orderPart col-lg-6 className= container reg-form rounded">
                    
                        <h1> My Booking: {orders.length} </h1>
                        <hr />
                        {/* <h3>Orders Available:{orders.length}</h3> */}
                        {
                            orders.map(order=><li
                            key={order._id}
                            >
                                Orderd Place: {order.place} 
                                User Name: {order.name} 
                                User Email: {order.email} 

                                <Link to = {`/updateorders/${order._id}`}>
                                <button className='border-0 '><i class="fas fa-pen-nib"></i></button>
                                </Link>
                                


                                <button onClick={()=>handelDeleteOrder(order._id)} className='border-0 m-1'><i class="fas fa-trash-alt"></i></button>
                                <hr />
                            </li>)
                        }
                </div>
        </div>
    </div>
 );
};

            export default OrderPlace;