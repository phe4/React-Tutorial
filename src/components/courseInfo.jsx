import "./Course.css";
import { Link } from "react-router-dom";

const CourseInfo = ({id, course, selectedCourses, toggleSelectedCourse, isConflict, displayEdit}) => {
    return (
        <div className={`course card m-1 p-2 ${selectedCourses.includes(id)? 'selected':''}${isConflict? 'to-disable':''}`} 
            data-cy="course"
            onClick={() =>isConflict?undefined:toggleSelectedCourse(id)}>
            <div className={`card-body `}>
                <div className="d-flex">
                    <h5 className="card-title">{course.term} CS{course.number}</h5>
                    {displayEdit ? <Link className="ms-auto" to={`/courses/${id}/edit`} state={{title: course.title, meets: course.meets}}>Edit</Link>: undefined}
                </div>
                <p className="card-text">{course.title}</p>
            </div>
            <div className="card-footer">
                <p className="footer-text">{course.meets}</p>
            </div>
        </div>
    );
};

export default CourseInfo;