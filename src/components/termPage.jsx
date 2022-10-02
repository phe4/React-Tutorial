import CourseInformations from './courses';
import { useState } from "react";
import TermSelector from './selector';

const terms = {
    "Fall": "Fall",
    "Winter": "Winter",
    "Spring": "Spring",
}


const TermPage = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState(() => Object.keys(terms)[0]);
    const [selectedCourses, setSelectedCourses] = useState([]);

    const toggleSelectedCourse = (course) => {
        setSelectedCourses(
            selectedCourses.includes(course) ? selectedCourses.filter(c => c !== course) : [...selectedCourses, course]
        );
        // console.log(course);
        // console.log(selectedCourses);
    }

    return (
        <div>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
            <CourseInformations 
                courses={Object.values(courses).filter(course => course.term === selectedTerm)} 
                selectedCourses={selectedCourses}
                toggleSelectedCourse={toggleSelectedCourse}    
            />
        </div>
    );
}

export default TermPage;