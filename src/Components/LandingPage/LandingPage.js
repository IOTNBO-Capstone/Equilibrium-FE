import React from "react";
import { useTherapists } from '../../utilities';
import TherapistCard from '../TherapistCard/TherapistCard';
import "./LandingPage.css";

const LandingPage = () => {

  const { data, error, loading } = useTherapists();
  
  if (loading && !data) return "Loading...";

  if (error) return `${error.message}`;

  const cards = data.therapists.map(therapist => {
    return (
      <TherapistCard
        id = {therapist.id}
        key = {therapist.id}
        name = {therapist.name}
        labels = {therapist.labels}
        imageUrl = {therapist.imageUrl}
      />
    )
  })

  // function to populate the provider information

    return (
     <div className="provider-box">
      {cards}
     </div>
    )
}

export default LandingPage