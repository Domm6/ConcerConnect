import React from 'react';
import './Profile.css'; // Import CSS for styling

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="profile-section">
        <h3>Profile</h3>
        <div className="profile-info">
          <img src="https://via.placeholder.com/150" alt="Profile" className="profile-picture" />
          <div className="profile-details">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Instagram:</strong> @johnthedoe</p>
            <p><strong>Spotify: </strong> <a href="https://open.spotify.com/">Click to see my profile!</a></p>
            <p><strong>Location:</strong> New York, USA</p>
            <p><strong>Top Genres:</strong> Pop, Indie, RnB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
