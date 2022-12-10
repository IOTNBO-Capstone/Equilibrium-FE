import React from "react";
import { Link } from "react-router-dom";
import "./TherapistCard.css";

const TherapistCard = ({ id, name, labels, imageUrl, address, phoneNumber, practice }) => {
  const splitAdress = address.split(', ');
  const street = splitAdress[0];
  const cityState = splitAdress.slice(1, 3).join(', ');

  const listLabels = JSON.parse(labels);
  console.log(listLabels);
  const formatLabels = listLabels.map((label, index) => <li key={ `${label}${index}` } className="one-label">{ label }</li>);

  // phoneNumber needs to be formated for consistency
  // currently coming back as (111)111-1111 or 111-111-1111 or 111.111.1111

  const linkStyle = {
    textDecoration: "none",
    color: 'white'
  };

  return (
    <Link to={ `/${id}` } className="therapist-card" style={ linkStyle }>
      <img src={ imageUrl } alt="therapist profile" />
      <h2>{ name } </h2>
      <p>{ practice }</p>
      <br />
      <p>{ street }</p>
      <p>{ cityState }</p>
      <br />
      <p>{ phoneNumber }</p>
      <br />
      { formatLabels }
    </Link>
  );
};

export default TherapistCard;