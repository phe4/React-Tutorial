import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom';
import Main from './Main';
import CourseEditor from '../courseEditor';

const CourseFormForUrl = () => {
  const { id } = useParams();
  const location = useLocation();
  const { title, meets } = location.state;
  return <CourseEditor courseId={id} courseTitle={title} courseMeets={meets}/>;
};

const Dispatcher = ({id}) => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/courses/:id/edit" element={<CourseFormForUrl id={id} />} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;