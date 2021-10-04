import React, { useEffect, useState } from 'react';
import SingleCourseMain from '../SingleCourseMain/SingleCourseMain';


const CourseMain = () => {
    const [coursemain, setCourseMain] = useState([]);

    useEffect(() => {
        fetch('./course-main.JSON')
            .then(res => res.json())
            .then(data => setCourseMain(data.course_main));
    }, [])

    return (
        <div className="container">
            <h1>Hello I'm From Course Main</h1>

            <div className="row">

                {
                    coursemain.map((course) => <SingleCourseMain key={course.course_id} course={course}></SingleCourseMain>)
                }

            </div>










        </div>
    );
};

export default CourseMain;