import React from 'react';
import "./About.css"
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="mt-5">
                    <img className="img-fluid about-img" src="https://i.ibb.co/YkQ3WnG/c7e9c702791d6f5c36a67e59fd193b6f-1050319.jpg" alt="" />

                </div>
                <h1 className="mt-4 mb-4 text-secondary">About</h1>
                <p className="ps-5 pe-5 text-secondary">Our Chefs offer you perfect cooking, best served dishes with fresh ingredients and old recipes.<br /> We have only carefully sourced and seasonal ingredients in our disposal to make rustic dishes. We provide you with daily<br /> self-made bread,sourdough pizza, roasted fish-meat-vegetables and many more.</p>

            </div>
            <Footer></Footer>

        </div>

    );
};

export default About;