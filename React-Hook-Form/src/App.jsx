import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from './components/Form/Login';
import Register from './components/Form/Register';
import './index.css';

function App() {
  return (
    <Router> {/* Wrapped Routes in Router */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default page is Login */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
