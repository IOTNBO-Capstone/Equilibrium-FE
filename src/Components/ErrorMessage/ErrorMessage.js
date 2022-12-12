import React from "react";
import { Link } from 'react-router-dom'
import "./ErrorMessage.css"

const ErrorMessage = (error) => {
  return (
    <div className="error-message">
      {/* if 4xx error */}
      <div className="4xx-error">
        <p>Uh oh! An error occurred! Please check your link and try again.</p>
        <p>{error.message}</p>
        <Link to={"/"}>
          <button className="home-btn">Home</button>
        </Link>
      </div>

      {/* if 5xx error */}
      <div className="5xx-error">
        <p>It's not you, it's me. Please try your request again later.</p>
        <p>{error.message}</p>
        <Link to={"/"}>
          <button className="home-btn">Home</button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorMessage