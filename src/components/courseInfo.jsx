const CourseInfo = ({ course }) => {
    return (
        <div className="course-info">
            <span>{course.term} CS{course.number}: {course.title}</span> <br />
            <span>{course.meets}</span>
        </div>
    );
};

export default CourseInfo;