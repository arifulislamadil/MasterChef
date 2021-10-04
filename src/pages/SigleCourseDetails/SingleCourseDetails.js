import React from 'react';
import "./SingleCourseDetails.css"

const SingleCourseDetails = (props) => {
    const { course_name, img, fee, course_details, duration, instructor_name, course_start } = props.detail
    return (
        <div className="col-md-4">
            <div className="card-desi text-center">
                <div className="h-100">
                    <div className="img-style">
                        <img className="img-modify img-fluid" src={img} alt="" />

                    </div>

                    <div className="card-body">
                        <h5 className="card-title">{course_name.slice(0, 15)}</h5>
                        <p>{course_details.slice(0, 100)}</p>
                        <p>Instructor : {instructor_name}</p>
                        <p>Course Start : {course_start}</p>
                        <p className="card-text">Duration: {duration}</p>
                        <p className="">Fee : $ {fee}</p>
                        <button className="btn-course mt-2">Buy Now</button>
                    </div>
                </div>
            </div>














        </div>

    );
};

export default SingleCourseDetails;