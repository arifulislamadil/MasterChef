import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import SingleCourseDetails from '../SigleCourseDetails/SingleCourseDetails';

const CourseDetails = () => {
    const [courseDetails, setCourseDetails] = useState([]);

    useEffect(() => {
        fetch("./course-details.JSON")
            .then(res => res.json())
            .then(data => setCourseDetails(data.course_main));
    }, [])


    return (
        <div >
            <div className="container mt-5 mb-5">
                <h1 className="mb-4 mb-4">Our Courses</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        courseDetails.map((detail) => <SingleCourseDetails key={detail.course_id} detail={detail}></SingleCourseDetails>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default CourseDetails;