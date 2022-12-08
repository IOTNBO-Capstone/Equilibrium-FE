import React from "react";
import { Link } from "react-router-dom";
import "./TherapistCard.css";

const TherapistCard = ({ id, name, labels, imageUrl, address, phoneNumber }) => {

  const splitAdress = address.split(', ');

  const street = splitAdress[0];

  const cityState = splitAdress.slice(1, 3).join(', ');

  const linkStyle = {
    textDecoration: "none",
    color: 'white'
  };

  return (
    <Link to={ `/${id}` } className="therapist-card" style={ linkStyle }>
      <img src={ imageUrl } alt="therapist profile" />
      <h2>{ name } </h2>
      <p>{ street }</p>
      <p>{ cityState }</p>
      <br />
      <p>{ phoneNumber }</p>
      <br />
      <p>Tags: { labels } </p>
    </Link>
  );
};

export default TherapistCard;