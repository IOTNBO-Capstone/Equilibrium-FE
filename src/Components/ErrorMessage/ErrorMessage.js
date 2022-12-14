import React from "react";
import { Link } from 'react-router-dom';
import "./ErrorMessage.css";

const ErrorMessage = (error) => {
  return ( // cypress code coverage does not like this return for some reason
    <div className="error-message">
      <p>Uh oh! An error occurred! Please check your link and try again.</p>
      <p>{ error.message }</p>
      <Link to={ "/" }>
        <button className="home-btn">Home</button>
      </Link>
    </div>
  );
};

export default ErrorMessage;