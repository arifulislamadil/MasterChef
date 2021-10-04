import React from 'react';

const SingleCourseMain = (props) => {
    const { course_name, img, duration, fee } = props.course;
    return (
        <div className="col-md-6">
            <img className="img-fluid" src={img} alt="" />
            <h1> Course-Name: {course_name}</h1>
            <h3>Duration: {duration}</h3>

        </div>
    );
};

export default SingleCourseMain;