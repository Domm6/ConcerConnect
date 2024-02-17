import React from 'react';
import './About.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const About = () => {
  // Sample data for multiple cards
  const profiles = [
    { name: 'Danny McLoan', university: 'UC Berkeley', instagram: '@danny', followers: 976, image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp' },
    { name: 'Johnnny Doe', university: 'Stanford', instagram: '@johnnythedoe', followers: 800, image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp' },
    { name: 'Jane Smith', university: 'UC Irvine', instagram: '@smith_jane', followers: 1200,  image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-3.webp' }
  ];

  return (
    <div className="custom-col">
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
                     <button className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
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
