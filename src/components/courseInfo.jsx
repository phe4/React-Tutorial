import "./Course.css";

const CourseInfo = ({id, course, selectedCourses, toggleSelectedCourse, isConflict}) => {
    return (
        <div className={`course card m-1 p-2 ${selectedCourses.includes(id)? 'selected':''}${isConflict? 'to-disable':''}`} onClick={() =>isConflict?undefined:toggleSelectedCourse(id)}>
            <div className={`card-body `}>
                <h5 className="card-title">{course.term} CS{course.number}</h5>
                <p className="card-text">{course.title}</p>
            </div>
            <div className="card-footer">
                <p className="footer-text">{course.meets}</p>
            </div>
        </div>
    );
};

export default CourseInfo;

// () => toggleSelectedCourse(id)