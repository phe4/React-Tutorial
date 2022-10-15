import CourseInfo from "./courseInfo";
import "./courses.css";
import timeSpliter from "../utilities/timeSpliter";
import checkTimeConflict from "../utilities/checkTimeConflict";

const CourseInformations = ({ courses, selectedCourses, toggleSelectedCourse, displayEdit}) => {
    const timeListSplited = timeSpliter(courses, selectedCourses);
    return (
        <div className="courses">
            {courses.map(([id, course]) => {
                var isTimeConflict = checkTimeConflict(course, timeListSplited);
                if (selectedCourses.includes(id)) {
                    isTimeConflict = false;
                }
                return (
                <CourseInfo key={id} id={id} course={course} 
                            selectedCourses={selectedCourses} 
                            toggleSelectedCourse={toggleSelectedCourse}
                            isConflict = {isTimeConflict}
                            displayEdit={displayEdit}
                            />
                )
            })}
        </div>
    );
};

export default CourseInformations;