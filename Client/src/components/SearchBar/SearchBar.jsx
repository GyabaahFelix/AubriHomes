import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./SearchBar.css";

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <HiLocationMarker className="search-icon" />
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search by title, city, or country..."
        />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
