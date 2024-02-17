import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About'; // Import the About component
import Profile from './Profile'; 
import './App.css'; // Import CSS for styling
import Concerts from './Concerts';
import Login from './Login';
import Register from './Register';


function App() {
  
  
  return (
    <Router>
      <div className="container">
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/concerts">Concerts</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>

        <h1>Concert Connect</h1>
       

         

        <Routes>
          <Route path="/home" element={<Concerts />} /> {/* Use the About component */}
          <Route path="/concerts" element={<Concerts />} /> {/* Use the About component */}
          <Route path="/profile" element={<Profile />} /> {/* Use the About component */}
          <Route path="/login" element={<Login />} /> {/* Use the Login component */}
          <Route path="/register" element={<Register />} /> {/* Use the Register component */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
