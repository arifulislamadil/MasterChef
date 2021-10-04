import React from 'react';
import Footer from '../Footer/Footer';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="form-full">
            <div className="container">
                <div className="bg-color">
                    <div className="contact-form form-body">
                        <div>
                            <h1 className="p-2">Contact Us</h1>
                            <br />
                            <input className=" form-control" type="text" placeholder="Your Name" /><br />
                            <input className="mt-1 form-control" type="text" placeholder="Enter Your Email Address" /><br />
                            <textarea className="mt-1 form-control" name="" id="" cols="30" rows="10"></textarea><br />
                            <button className='btn btn-default bg-primary'>Submit</button>
                        </div>
                    </div>

                </div>


            </div>




            <Footer></Footer>

        </div>

    );
};

export default Contact;