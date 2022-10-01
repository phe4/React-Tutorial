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
    return (
        <div>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
            <CourseInformations courses={Object.values(courses).filter(course => course.term === selectedTerm)} />
        </div>
    );
}

export default TermPage;