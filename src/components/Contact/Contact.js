import React from 'react';
import { appendErrors, useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h3 className='bg-info p-2'>Contact Us </h3>
              {/* contact us with your details ===============*/}
            <div className="row m-4">
                <div className=" container contact-form col-lg-6 border border-primary ms-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='mt-4'> Please Submit Details</h1>
                        <input  {...register("example")} placeholder='Name' />
                        <input {...register("exampleRequired", { required: true })} placeholder='email' />
                        <input  {...register("example")} placeholder='Address' />
                        {appendErrors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" />

                    </form>
                </div>

                 {/* contact us =================================*/}
                <div className="container col-lg-6 border border-primary rounded p-3 bg-light address">
                    <h2> <u>SUN TOUR INDIA</u> </h2>

                    <h4>
                        City Office <br />
                        Dum Dum Road,Bagjola <br />
                        Near Dum Dum Police Phadi <br />
                        Kolkata 700074
                    </h4>

                    <h4>
                        Regd. Office
                        22 RabindraSarani <br />
                        P.O. + P.S. - Ranaghat <br />
                        Dist - Nadia, West Bengal <br />
                        Pin - 741201


                    </h4>
                    <h5>
                        +91 9678945612 <br />
                        +91 9812548925 <br />
                        sun.tout.india@gmail.com <br />
                        www.sontour1254@gmail.com
                    </h5>

                </div>
            </div>
        </div>
    );
};

export default Contact;