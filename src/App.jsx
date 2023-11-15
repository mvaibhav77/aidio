import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Result from './components/Result';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModelProvider } from './context/ModelContext';

function App() {
  return (
    <ModelProvider>
      <Navbar />
      <Result />
      <Info />
      <ToastContainer />
    </ModelProvider>
  );
}

export default App;
