import { Link } from 'react-router-dom';
import './About.css'; 
import SiteNav from './SiteBar';

const About = () => {
  // Sample data for multiple cards
  const profiles = [
    { name: 'Danny McLoan', university: 'UC Berkeley', instagram: '@danny', followers: 976, image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp' },
    { name: 'Johnnny Doe', university: 'Stanford', instagram: '@johnnythedoe', followers: 800, image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp' },
    { name: 'Jane Smith', university: 'UC Irvine', instagram: '@smith_jane', followers: 1200,  image: 'https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock' }
  ];

  return (
    <div className="custom-col">
         <SiteNav></SiteNav>
         <h2>People Attending!</h2>
      <div className="person-cards">
        {profiles.map((profile, index) => (
          <div key={index} className="person-card">
            <img src={profile.image} alt="Concert" className="person-image" />
            <div className="person-details">
              <h3>{profile.name}</h3>
              <p>{profile.university}</p>
              <p>Instagram: {profile.instagram}</p>
              <p>Followers: {profile.followers}</p>
              <div className="d-flex pt-1">
              <Link to="/chat" className="attendees-link">
                    <button className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                </Link>

                     <button className="btn btn-primary flex-grow-1">Follow</button>
                   </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
