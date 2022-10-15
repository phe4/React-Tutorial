import CourseInformations from './courses';
import { useState } from "react";
import TermSelector from './selector';
import Modal from './Modal';
import Plan from './plan';

const terms = {
    "Fall": "Fall",
    "Winter": "Winter",
    "Spring": "Spring",
}


const TermPage = ({courses, user}) => {
    const [selectedTerm, setSelectedTerm] = useState(() => Object.keys(terms)[0]);

    const [selectedCourses, setSelectedCourses] = useState([]);

    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const toggleSelectedCourse = (course) => {
        setSelectedCourses(
            selectedCourses.includes(course) ? selectedCourses.filter(c => c !== course) : [...selectedCourses, course]
        );
    }
    const displayEdit = user ? true : false;

    return (
        <div>
            <div className="d-flex py-2">
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
            <button className="btn btn-outline-dark m-2 p-2 ms-auto" onClick={openModal}>Schedule</button>
            </div>
            <Modal open={open} close={closeModal}>
                <Plan selected={selectedCourses} courses={courses} />
            </Modal>
            <CourseInformations 
                courses={Object.entries(courses).filter(([id, course]) => course.term === selectedTerm)} 
                selectedCourses={selectedCourses}
                toggleSelectedCourse={toggleSelectedCourse}
                displayEdit={displayEdit}    
            />
        </div>
    );
}

export default TermPage;