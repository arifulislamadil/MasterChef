import React, { useEffect, useState } from 'react';
import SingleCourseMain from '../SingleCourseMain/SingleCourseMain';
import "./CourseMain.css"


const CourseMain = () => {
    const [coursemain, setCourseMain] = useState([]);

    useEffect(() => {
        fetch('./course-main.JSON')
            .then(res => res.json())
            .then(data => setCourseMain(data.course_main));
    }, [])

    return (
        <div className="container mb-5">
            <div className="text-center">
                <h1 className="mt-4 mb-4">Main Courses</h1>
            </div>


            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    coursemain.map((course) => <SingleCourseMain key={course.course_id} course={course}></SingleCourseMain>)
                }

            </div>
        </div>
    );
};

export default CourseMain;