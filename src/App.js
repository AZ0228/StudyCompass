import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Next from './pages/Next/Next';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Main />} />
        <Route path="/next" element={<Next />} />
      </Routes>
    </Router>  );
}

export default App;
