import React from "react";
import { Link } from "react-router-dom";
import "./TherapistPage.css";

const TherapistPage = ({ individualTherapist }) => {
  const splitAdress = individualTherapist.address.split(', ');
  const street = splitAdress[0];
  const cityState = splitAdress.slice(1, 3).join(', ');

  const formatLabels = JSON.parse(individualTherapist.labels);
  const labels = formatLabels.map((label, index) => <p key={ index } className="single-label">{ label }</p>);

  return (
    <div className="individual-section">
      <img src={ individualTherapist.imageUrl } alt='Therapist profile' />
      <h2>{ individualTherapist.name }</h2>
      <p>{ individualTherapist.bio }</p>
      <br />
      <p>{ individualTherapist.practice.name }</p>
      <p>{ street }</p>
      <p>{ cityState }</p>
      <p>{ individualTherapist.practice.websiteUrl }</p>
      <br />
      <div className="labels-container">
        { labels }
      </div>
      <br />
      <Link to='/'>
        <button>Return to Main Page</button>
      </Link>
    </div>
  );
};

export default TherapistPage;