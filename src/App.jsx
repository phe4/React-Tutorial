import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './components/Main';
import Dispatcher from './components/Dispatcher';

const queryClient = new QueryClient();

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <Dispatcher />
      </QueryClientProvider>
  );
}

export default App;