import TermPage from './termPage';
import { useDbData } from '../utilities/firebase';
import { signInWithGoogle, signOut } from '../utilities/firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignInButton = () => (
    <button className="m-2 p-2 ms-auto btn btn-dark" onClick={signInWithGoogle}>Sign in</button>
  );
  
const SignOutButton = () => (
    <button className="m-2 p-2 ms-auto btn btn-dark" onClick={signOut}>Sign out</button>
);


const Main = (profile) => {
    const [ courses, error ] = useDbData('/courses');
    const [ title, tError ] = useDbData('/title');
    if (courses == undefined) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if(!courses) return <div>No data</div>;
    return (<div className="container">
        <div className="d-flex py-2">
            <h1>{ title }</h1>
            {profile.user.user ? <SignOutButton /> : <SignInButton />}
            <ToastContainer />
        </div>
        <TermPage courses={courses} user={profile.user}/>
        </div>
    );
};

export default Main;
  