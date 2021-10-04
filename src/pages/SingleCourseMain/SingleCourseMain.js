import React from 'react';
import "./SingleCourseMain.css"

const SingleCourseMain = (props) => {
    const { course_name, img, duration, fee } = props.course;

    return (
        <div className="col-md-6 card-sigle-style">
            <div className="col card-style">
                <div className="card h-100">
                    <img className="img-fluid" src={img} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Course Name : {course_name}</h5>
                        <p className="card-text">Duration: {duration}</p>
                        <p>Fee : $ {fee}</p>
                        <button className="btn-style">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourseMain;