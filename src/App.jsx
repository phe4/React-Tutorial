import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './components/Main';


const queryClient = new QueryClient();

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
          <Main />
      </QueryClientProvider>
  );
}

export default App;