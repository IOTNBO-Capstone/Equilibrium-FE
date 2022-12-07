import React, { Component } from "react";
import { useTherapists } from '../../utilities';
import TherapistCard from '../TherapistCard/TherapistCard';
import "./TherapistPage.css"

const TherapistPage = () => {

  const { data, error, loading } = useTherapists();
  
  if (loading && !data) return "Loading...";

  if (error) return `${error.message}`;

  console.log(data.therapists)

  const cards = data.therapists.map(therapist => {
    return (
      <TherapistCard
        id = {therapist.id}
        key = {therapist.id}
        name = {therapist.name}
      />
    )
  })

  console.log(cards)

  // function to populate the provider information

    return (
     <div>
      {cards}
     </div>
    )
}

export default TherapistPage