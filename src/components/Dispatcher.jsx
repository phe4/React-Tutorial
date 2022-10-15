import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom';
import Main from './Main';
import CourseEditor from './courseEditor';
import { useProfile } from '../utilities/profile';

const CourseFormForUrl = () => {
  const { id } = useParams();
  const location = useLocation();
  const { title, meets } = location.state;

  return <CourseEditor courseId={id} courseTitle={title} courseMeets={meets}/>;
};

const Dispatcher = ({id}) => {
  const [profile, profileError, profileLoading] = useProfile();
  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;

  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main user={profile}/>} />
        <Route path="/courses/:id/edit" element={<CourseFormForUrl id={id} />} />
    </Routes>
  </BrowserRouter>
  );
  };

export default Dispatcher;