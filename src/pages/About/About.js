import React from 'react';
import "./About.css"

const About = () => {
    const img_url = "https://i.ibb.co/2kHV96d/Group-Of-Confident-Multi-Ethnic-Restaurant-Staff.jpg";
    return (
        <div>
            <div className="container mb-5">
                <div className="">
                    <img className="img-fluid about-img" src={img_url} alt="" />

                </div>
                <h1 className="mt-4 mb-4 text-secondary"> <span className="mt-1 mb-0 border border-secondary border-top-0 border-start-0 border-end-0">About</span></h1>
                <p className="ps-5 pe-5 text-secondary">Our Chefs offer you perfect cooking, best served dishes with fresh ingredients and old recipes.<br /> We have only carefully sourced and seasonal ingredients in our disposal to make rustic dishes. We provide you with daily<br /> self-made bread,sourdough pizza, roasted fish-meat-vegetables and many more.</p>

            </div>

        </div>

    );
};

export default About;