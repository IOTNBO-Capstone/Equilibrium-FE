import React from "react";
import { Link } from "react-router-dom";
import "./TherapistCard.css";

const TherapistCard = ({ id, name, labels, imageUrl }) => {

    return (
      <Link to={`/${id}`} className="therapist-card">
        <img src={imageUrl} alt="therapist profile"/>
        <p>Name: {name} </p>
        <p>Address: </p>
        <p>Contact: </p>
        <p>Tags: {labels} </p>
      </Link>
    )
}

export default TherapistCard