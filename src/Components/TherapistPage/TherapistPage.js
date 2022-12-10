import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./TherapistPage.css";

const TherapistPage = ({ id, name, address, labels, imageUrl, bio, practice }) => {

  const splitAdress = address.split(', ');
  const street = splitAdress[0];
  const cityState = splitAdress.slice(1, 3).join(', ');
 
  const formatLabels = JSON.parse(labels);
  const tags = formatLabels.map((label, index) => <p key={ index } className="single-label">{ label }</p>);

  return (
    <div className="individual-section">
      <img src={ imageUrl } alt='Therapist profile' />
      <h2>{ name }</h2>
      <p>{ bio }</p>
      <br />
      <p>{ practice.name }</p>
      <p>{ street }</p>
      <p>{ cityState }</p>
      <Link to='/outbound'>
        <p>{ practice.websiteUrl }</p>
      </Link>
      <br />
      <div className="labels-container">
        { tags }
      </div>
      <br />
      <Link to='/'>
        <button>Return to Main Page</button>
      </Link>
    </div>
  );
};

export default TherapistPage;

TherapistPage.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labels: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  practice: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    websiteUrl: PropTypes.string,
  }).isRequired
}
