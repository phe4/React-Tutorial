import './App.css';
import CourseInformations from './components/courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';

const Main = () => {
  const [ data, isLoading, error ] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if(!data) return <div>No data</div>;
  return (<div className="container">
      <h1>{ data.title }</h1>
      <CourseInformations courses={ data.courses } />
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <div className="container">
          <Main />
        </div>
      </QueryClientProvider>
  );
}

export default App;