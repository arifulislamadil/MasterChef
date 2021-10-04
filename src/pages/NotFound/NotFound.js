import React from 'react';
import Footer from '../Footer/Footer';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="bg-danger">
            <div className="container bg-dark p-5 not-found-style">
                <div>
                    <h1 className="text-danger">ERROR 404 NOT FOUND</h1>
                    <p className="text-white ps-5 pe-5">You may have mis-typed the URL.

                        Or the page has been removed.<br />

                        Actually, there is nothing to see here...

                        Click on the links below to do something,<br /> Thanks!</p>

                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default NotFound;