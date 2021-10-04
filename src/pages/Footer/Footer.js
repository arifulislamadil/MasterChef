import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="bg-footer-style text-start p-2">
            <div className="container">
                <div className="row ">
                    <div className="col-md-3">
                        <div >
                            <h1>MasterChef</h1>
                            <h4>About Us</h4>
                            <hr className="w-50" />
                            <p>At Chefmaster, we believe that life needed food. Whether it’s baking cupcakes for a birthday party or adding lakes at an industrial level</p>
                            <i className="bi bi-facebook"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mt-5">
                            <h4>Get In Touch</h4>
                            <hr className="w-50" />
                            <p className="m-0">Address: 189/40,North South Dacota,USA-243</p>

                            <p className="m-0">Phone: +33432542546</p>
                            <p className="m-0">EmaiL: ChefMaster@gmail.com</p>

                            <p className="m-0">Time: Mon-Fri</p>
                        </div>
                    </div>

                    <div className="col-md-3 link-style">
                        <div className="mt-5">
                            <h4>UseFul Links</h4>
                            <hr className="w-50" />
                            <a href="#">Home</a>
                            <br />
                            <a href="#">About</a>
                            <br />
                            <a href="#">CookMaster</a>
                            <br />
                            <a href="#">Contact</a>
                        </div>
                    </div>


                    <div className="col-md-3 footer-sub">
                        <div className="mt-5">
                            <h4>Subscription</h4>
                            <hr className="w-50" />
                            <input type="text" placeholder="Your Name" />
                            <br />
                            <input className="mt-2" type="text" placeholder="Your Email" />
                            <br />
                            <button className="mt-2 footer-btn">Subscription</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Footer;