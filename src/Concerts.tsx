import './Concerts.css';
import { Link } from 'react-router-dom';
import SiteNav from './SiteBar';

const Concerts = () => {
  const profiles = [
    { name: 'The Weeknd', location: 'Paramount Theatre', instagram: '@theweeknd', followers: '35.5M', rating: 8.5, image: 'https://yt3.googleusercontent.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s900-c-k-c0x00ffffff-no-rj' },
    { name: 'Doja Cat', location: 'Neptune Theatre', instagram: '@dojacat', followers: '20.2M', rating: 9.5, image: 'data:image/jpeg;base64,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' },
    { name: 'Taylor Swift', location: 'Lumen Field', instagram: '@taylorswift', followers: '100.5M', rating: 10.0, image: 'https://assets.teenvogue.com/photos/63612fe62cdbf142665a84ac/1:1/w_1849,h_1848,c_limit/unnamed%20(1).png' },
];

  return (
    <div className="custom-col">
      {/* <form className="search-form">
        <input
          type="text"
          placeholder="Search for upcoming concerts!"
          className="search-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form> */}
      <SiteNav></SiteNav>
      <h2>Concerts Near You!</h2>
      <div className="concert-cards">
        
        {profiles.map((profile, index) => (
          <div key={index} className="concert-card">
            <img src={profile.image} alt="Concert" className="concert-image" />
            <div className="concert-details">
              <h3>{profile.name}</h3>
              <p>{profile.location}</p>
              <p>Instagram: {profile.instagram}</p>
              <p>Followers: {profile.followers}</p>
              <p>Rating: {profile.rating}</p>
              <Link to="/about" className="attendees-link">See Attendees</Link> {/*make attendee list unique for each person*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Concerts;
