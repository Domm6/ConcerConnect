import React from 'react';
import './Profile.css'; // Import CSS for styling
import SiteNav from './SiteBar'; 
const About: React.FC = () => {
  return (
    <div className="about-container">
      <SiteNav></SiteNav>
      <div className='break'></div>
      <div className="profile-section">
        <h2>My Profile</h2>
        <div className="profile-info">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2xu-y-g2Bl3W6A-396zneaGYW5o3aVZCQw&usqp=CAU" alt="Profile" className="profile-picture" />
          <div className="profile-details">
            <p><strong>Name:</strong> Sara Brown</p>
            <p><strong>Instagram:</strong> @sarabwn</p>
            <p><strong>Spotify: </strong> <a  className='link'href="https://open.spotify.com/">Click to see my profile!</a></p>
            <p><strong>Location:</strong> New York, USA</p>
            <p><strong>Top Genres:</strong> Pop, Indie, RnB</p>
          </div>
        </div>
        <h2>Upcoming Concerts</h2>
      </div>
    </div>
  );
}

export default About;
