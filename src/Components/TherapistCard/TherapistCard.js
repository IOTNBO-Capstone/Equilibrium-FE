import React from "react";
import "./TherapistCard.css";

const TherapistCard = ({ id, name, labels, imageUrl }) => {

    return (
      <div className="therapist-card">
        <img src={imageUrl} alt="therapist profile"/>
        <p>Name: {name} </p>
        <p>Address: </p>
        <p>Contact: </p>
        <p>Tags: {labels} </p>
      </div>
    )
}

export default TherapistCard