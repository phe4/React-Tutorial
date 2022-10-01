import CourseInfo from "./courseInfo";
import "./courses.css";

const CourseInformations = ({ courses }) => {
    return (
        <div className="courses">
            {Object.entries(courses).map(([id, course]) => (<CourseInfo course={course} key={id}/>))}
        </div>
    );
};

export default CourseInformations;