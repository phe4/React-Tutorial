import CourseInfo from "./courseInfo";
import "./courses.css";

const CourseInformations = ({ courses, selectedCourses, toggleSelectedCourse}) => {
    return (
        <div className="courses">
            {courses.map(([id, course]) => (
            <CourseInfo key={id} id={id} course={course} selectedCourses={selectedCourses} toggleSelectedCourse={toggleSelectedCourse}/>
            ))}
        </div>
    );
};

export default CourseInformations;