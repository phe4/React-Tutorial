import { useJsonQuery } from '../utilities/fetch';
import TermPage from './termPage';
import { useDbData } from '../utilities/firebase';

const Main = () => {
    const [courses, isLoading, err] = useJsonQuery('https://courses.cs.northwestern.edu/394/data/cs-courses.php');
    const [ data, error ] = useDbData('/');
    if (data == undefined) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if(!data) return <div>No data</div>;
    return (<div className="container">
        <h1>{ data.title }</h1>
        <TermPage courses={data.courses}/>
        </div>
    );
};

export default Main;
  