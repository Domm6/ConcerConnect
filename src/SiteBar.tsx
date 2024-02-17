import React, { useState } from 'react';
import { FaSearch, FaRegUser, FaRegComment, FaBell } from 'react-icons/fa';
import './siteNav.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const SiteNav: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleDateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Parse the date string into a Date object
    const date = new Date(event.target.value);
    setSelectedDate(date);
  };
return (
    <div className="navbar">
         <Link to="/home"><h2 className = "header">
            Concert Connect
        </h2></Link> 
        
      <div className="search">
        <input
          type="text"
          placeholder="Search Artist"
          value={searchQuery}
          onChange={handleSearchInputChange}
          style={{
            padding: '11px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '200px',
            marginRight: '10px',
          }}
        />
      </div>
      <div className="date-picker">
        <input
          type="date"
          value={selectedDate?.toISOString().substr(0, 10) || ''}
          onChange={handleDateInputChange}
          style={{
            padding: '11px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '200px',
            marginRight: '10px',
          }}
        />
      </div>
      <div className = "location">
          <input
            type = "location"
            placeholder = "Enter Location"
            value = {searchQuery}
            onChange = {handleSearchInputChange}
            style={{
                padding: '11px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                width: '200px',
                marginRight: '10px',
              }}
          />
      </div>
      <button>
          <FaSearch style = {{fontSize : '16px'}} />

        </button>
      <div className="icons">
        <button>
            <Link to="/concerts"><FaBell/></Link> 
        </button>
        <button>
        <Link to="/chat"><FaRegComment/></Link> 
        </button>
        <button>
        <Link to="/profile"><FaRegUser /></Link> 
        </button>
      </div>
    </div>

  );
};

export default SiteNav;