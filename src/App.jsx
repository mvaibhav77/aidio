import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Result from './components/Result';
import { ModelProvider } from './context/ModelContext';

function App() {
  return (
    <ModelProvider>
      <Navbar />
      <Result />
      <About />
    </ModelProvider>
  );
}

export default App;
