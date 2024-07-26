import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Learn from './Learn';
import Practice from './Practice';
import ExerciseDetail from './ExerciseDetail';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/learn" element={<Learn/>} exact/>
          <Route path="/practice" element={<Practice/>} exact/>
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

