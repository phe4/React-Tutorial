import { useJsonQuery } from '../utilities/fetch';
import TermPage from './termPage';

const Main = () => {
    const [ data, isLoading, error ] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if(!data) return <div>No data</div>;
    return (<div className="container">
        <h1>{ data.title }</h1>
        <TermPage courses={data.courses}/>
        </div>
    );
};

export default Main;
  