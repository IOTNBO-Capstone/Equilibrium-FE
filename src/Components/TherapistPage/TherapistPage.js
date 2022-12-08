import React from "react";
import { Link } from "react-router-dom";
import "./TherapistPage.css";

const TherapistPage = ({ individualTherapist }) => {
  // const labels = individualTherapist.labels.forEach(label => {
  //   console.log(label) 
  // })
  // console.log(labels)

  return (
    <div className="individual-section">
      <img src={ individualTherapist.imageUrl } alt='Therapist profile' />
      <h2>{ individualTherapist.name }</h2>
      <p>{ individualTherapist.bio }</p>
      <br />
      <p>{ individualTherapist.practice.name }</p>
      <p>{ individualTherapist.practice.websiteUrl }</p>
      <br />
      <p>{ individualTherapist.labels }</p>
      <br />
      <Link to='/'>
        <button>Return to Main Page</button>
      </Link>
    </div>
  );
};

export default TherapistPage;