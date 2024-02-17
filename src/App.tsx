import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About'; // Import the About component
import Profile from './Profile'; 
import './App.css'; // Import CSS for styling
import Concerts from './Concerts';
import Chat from './Chat';
import Login from './Login';
import Home from './Home';
import SiteNav from './SiteBar';

function App() {
  
  
  return (
    
    <Router>
      <div className="container">


        <Routes>
          <Route path="/about" element={<About />} /> {/* Use the About component */}
          <Route path="/" element={<Login />} /> {/* Use the About component */}
          <Route path="/home" element={<Home />} /> {/* Use the About component */}
          <Route path="/concerts" element={<Concerts />} /> {/* Use the About component */}
          <Route path="/profile" element={<Profile />} /> {/* Use the About component */}
          <Route path="/chat" element={<Chat />} /> {/* Use the About component */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
