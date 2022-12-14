import React from "react";
import { Link } from 'react-router-dom'
import "./ErrorMessage.css"

const ErrorMessage = (error) => {
  return (
    <div className="error-message">
      <p>Uh oh! An error occurred! Please check your link and try again.</p>
      <p>{error.message}</p>
      <Link to={"/"}>
        <button className="home-btn">Home</button>
      </Link>
    </div>
  )
}

export default ErrorMessage