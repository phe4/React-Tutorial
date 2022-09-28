import CourseInfo from "./courseInfo";

const CourseInformations = ({ courses }) => {
    return (
        <div className="courses">
            {Object.values(courses).map((course) => (<CourseInfo course={course} />))}
        </div>
    );
};

export default CourseInformations;