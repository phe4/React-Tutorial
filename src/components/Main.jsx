import TermPage from './termPage';
import { useDbData } from '../utilities/firebase';
import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';


const SignInButton = () => (
    <button className="m-2 p-2 ms-auto btn btn-dark" onClick={signInWithGoogle}>Sign in</button>
  );
  
const SignOutButton = () => (
    <button className="m-2 p-2 ms-auto btn btn-dark" onClick={signOut}>Sign out</button>
);


const Main = () => {
    const [ data, error ] = useDbData('/');
    const [userState] = useAuthState();
    if (data == undefined) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if(!data) return <div>No data</div>;
    return (<div className="container">
        <div className="d-flex py-2">
            <h1>{ data.title }</h1>
            {userState ? <SignOutButton /> : <SignInButton />}
        </div>
        <TermPage courses={data.courses} user={userState}/>
        </div>
    );
};

export default Main;
  