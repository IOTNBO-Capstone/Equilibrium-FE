import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./TherapistPage.css";

const TherapistPage = ({ id, name, address, labels, imageUrl, bio, practice }) => {
  const splitAdress = address.split(', ');
  const street = splitAdress[0];
  const cityState = splitAdress.slice(1, 3).join(', ');

  const formatLabels = JSON.parse(labels);
  const tags = formatLabels.map((label, index) => <p key={ index } className="single-label" data-cy={ `label-${index}` }>{ label }</p>);

  return (
    <section className="individual-section" data-cy='individual-therapist'>
      <div className="therapist-info">
        <div>
          <img src={ imageUrl } alt='Therapist profile' className="profile-img" data-cy={ `${imageUrl}-${id}` } />
        </div>
        <div className="bio-section">
          <h2 data-cy={ `${name}-${id}` }>{ name }</h2>
          <p data-cy={ `${bio}-${id}` }>{ bio }</p>
          <br />
          <p data-cy={ `${practice.name}-${id}` }>{ practice.name }</p>
          <p data-cy={ `${street}-address-${id}` }>{ street }</p>
          <p data-cy={ `${cityState}-address-${id}` }>{ cityState }</p>
          <Link to='/outbound' data-cy="practice-url">
            <p >{ practice.websiteUrl }</p>
          </Link>
        </div>
      </div>
      <br />
      <div className="labels-container" data-cy='labels'>
        { tags }
      </div>
      <br />
      <Link to='/'>
        <button>Return to Main Page</button>
      </Link>
    </section>
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
};
