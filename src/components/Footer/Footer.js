import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-black  p-3'>
            <div className="row">
                <div className="col-lg-4">
                    <p className='text-light'>
                        <h4>State Tourism Websites</h4> 
                        Odisha<br />
                        Punjab<br />
                        Rajasthan<br />
                        Sikkim<br />
                        Tamil Nadu<br />
                        dWest Bengal
                    </p>
                </div>
                <div className="col-lg-4">
                    <p className='text-light'>
                        <h4>UT Tourism Websites</h4> 
                        Andaman and Nicobar <br />
                        Chandigarh<br />
                        Dadra and Nagar Haveli<br />
                        Daman and Diu<br />
                        Delhi<br />
                        Jammu and Kashmir
                        </p>
                </div>
                <div className="col-lg-4">
                    <p className='text-light'>
                        <h4>City Office</h4>
                         <br />
                        Dum Dum Road,Bagjola <br />
                        Near Dum Dum Police Phadi <br />
                        Kolkata 700074
                        +91 9678945612 <br />
                        +91 9812548925 <br />
                        sun.tout.india@gmail.com <br />
                        www.sontour1254@gmail.com
                    </p>

                    <i className="fab fa-facebook-f ms-2 text-info fs-4"></i><i className="fab fa-youtube ms-2 text-info fs-4"></i><i className="fab fa-instagram ms-2 text-info fs-4"></i><i className="fab fa-twitter ms-2 text-info fs-4"></i>

                </div>

            </div>

            <hr className='text-info fw-bold' />

            <h4 className='text-light'>Incredible India</h4>
            <p className='text-light'>India has a myriad of landscapes, great heritage and culture, varied flora and fauna. The country is the most preferred tourist destinations for tourists from all across the world for its picturesque landscapes, spectacular waterfalls, habitat of the country's largest tiger reserve and home to the warmest people on earth.</p>

            <hr className='text-info fw-bold' />
            <p className='text-light'>Privacy Policy | Terms Of Platform Use | Important Links | Emergency
                © Ministry of Tourism, Government of India</p>
        </div>
    );
};

export default Footer;