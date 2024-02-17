import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About'; // Import the About component
import Profile from './Profile'; 
import './App.css'; // Import CSS for styling
import Concerts from './Concerts';

function App() {
  
  
  return (
    <Router>
      <div className="container">
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/concerts">Concerts</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>

        <h1>Concert Connect</h1>
       
       
         

        <Routes>
          <Route path="/about" element={<About />} /> {/* Use the About component */}
          <Route path="/concerts" element={<Concerts />} /> {/* Use the About component */}
          <Route path="/profile" element={<Profile />} /> {/* Use the About component */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
