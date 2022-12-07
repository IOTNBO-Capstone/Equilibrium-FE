import React from "react";
import { Link } from "react-router-dom";
import "./TherapistPage.css";

const TherapistPage = ( {individualTherapist} ) => {
  // const labels = individualTherapist.labels.forEach(label => {
  //   console.log(label) 
  // })
  // console.log(labels)

    return(
      <div className="results-window">
        <img src={individualTherapist.imageUrl} alt='Therapist profile'/>
        <h2>{individualTherapist.name}</h2>
        <p>{individualTherapist.bio}</p>
        <p>{individualTherapist.labels}</p>
        <p>{individualTherapist.practice.name}</p>
        <Link to='/'>Return to Main Page</Link>
      </div>
    )
}

export default TherapistPage