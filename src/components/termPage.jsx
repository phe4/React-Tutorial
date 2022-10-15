import CourseInformations from './courses';
import { useState } from "react";
import TermSelector from './selector';
import Modal from './Modal';
import Plan from './plan';
import { useDbUpdate, useDbData} from '../utilities/firebase';
import { useEffect } from 'react';

const terms = {
    "Fall": "Fall",
    "Winter": "Winter",
    "Spring": "Spring",
}

const TermPage = ({courses, user}) => {
    const [selectedTerm, setSelectedTerm] = useState(() => Object.keys(terms)[0]);

    const [data, error, isLoading] = useDbData(`users/${user.user?.uid}`);
    const [selectedCourses, setSelectedCourses] = useState([]);


    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);


    const [update, result] = useDbUpdate(`users/${user.user?.uid}`);
    useEffect(() => {
        if (data && data !== undefined ) {
            setSelectedCourses(data.selectedCourses);
        }
        if (user.user && selectedCourses.length > 0) {
            update({selectedCourses: selectedCourses});
            setSelectedCourses(selectedCourses);
            }
    }, [selectedCourses, user.user, data]);

    const toggleSelectedCourse = (course) => {
        setSelectedCourses(
            selectedCourses.includes(course) ? selectedCourses.filter(c => c !== course) : [...selectedCourses, course]
        );
    }
    const displayEdit = user.isAdmin && user.isAdmin != undefined ? true : false;

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