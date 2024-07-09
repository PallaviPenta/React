import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Invalid from './components/Invalid';
import Calci from './components/Calci';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calci" element={<Calci />} />
          <Route path="*" element={<Invalid />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
