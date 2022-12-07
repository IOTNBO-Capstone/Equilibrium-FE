import React, {Component} from "react";
import "./TherapistCard.css"

const TherapistCard = ({ id, name }) => {

    return (
      <div className="therapist-card">
        <h2>Picture will go here </h2>
        <p>Name: {name} </p>
        <p>Address: </p>
        <p>Contact: </p>
        <p>Tags: </p>
      </div>
    )
}

export default TherapistCard