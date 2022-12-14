import React from "react";
import { Link } from 'react-router-dom';
import "./BadUrl.css";

const BadUrl = () => {
  return (
    <div className="error-url">
      <p>You've reached an invalid URL. Please try again.</p>
      <Link to="/">
        <button className="home-btn">Home</button>
      </Link>
    </div>
  );
};

export default BadUrl;
