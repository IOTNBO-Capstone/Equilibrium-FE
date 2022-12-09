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
        practice={ therapist.practice.name }
      />
    );
  });

  const getFilterTags = data.therapists.reduce((list, therapist) => {
    const formatLabels = JSON.parse(therapist.labels);

    formatLabels.forEach(label => {
      if (!list.includes(label)) {
        list.push(label);
      }
    });

    return list;
  }, []);

  const searchTags = getFilterTags.map((tag, index) => {
    return (
      <form key={ index } className="single-tag">
        <input type="checkbox" id={ `tag${index}` } name={ `tag${index}` } value={ tag } />
        <label>{ tag }</label>
      </form>
    );
  });

  return (
    <section className="landing-page-container">
      <div className="container search-tags-container">
        { searchTags }
      </div>
      <div className="container therapist-cards-container">
        { cards }
      </div>
    </section>
  );
};

export default LandingPage;