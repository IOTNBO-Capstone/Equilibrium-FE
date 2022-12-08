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
        id={ therapist.id }
        key={ therapist.id }
        name={ therapist.name }
        labels={ therapist.labels }
        imageUrl={ therapist.imageUrl }
        address={ therapist.address }
        phoneNumber={ therapist.phoneNumber }
      />
    );
  });

  // const getFilterTags = data.therapists.reduce((list, therapist) => {
  //   therapist.labels.forEach(label => {
  //     if (!list.include(label)) {
  //       list.push(label);
  //     }
  //   });
  //   return list;
  // }, []);

  // console.log(getFilterTags);

  return (
    <div className="therapist-container">
      { cards }
    </div>
  );
};

export default LandingPage;