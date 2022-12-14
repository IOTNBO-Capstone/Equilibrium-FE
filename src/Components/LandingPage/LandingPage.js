import React, { useEffect, useState } from "react";
import { useTherapists } from '../../utilities';
import TherapistCard from '../TherapistCard/TherapistCard';
import "./LandingPage.css";

const LandingPage = () => {
  const [filteredTags, setFilteredTags] = useState([]);
  const [filteredTherapists, setFilteredTherapists] = useState([]);

  const { data, error, loading } = useTherapists();

  useEffect(() => {
    if (data) {
      getTherapistByTag();
    }
    // eslint-disable-next-line
  }, [filteredTags, data]);
 

  if (loading && !data) return "Loading...";

  const getFilterTags = data?.therapists?.reduce((list, therapist) => {
    const formatLabels = JSON.parse(therapist.labels);

    formatLabels.forEach(label => {
      if (!list.includes(label)) {
        list.push(label);
      }
    });

    return list;
  }, []);

  const getCheckedTags = (checked) => {
    if (!filteredTags.includes(checked)) {
      setFilteredTags([...filteredTags, checked]);
    } else {
      setFilteredTags(filteredTags.filter(tag => tag !== checked));
    }
  };

  const searchTags = getFilterTags?.map((tag, index) => {
    return (
      <form key={ index } className="single-tag" data-cy={ `label-${index}` }>
        <input
          type="checkbox"
          id={ `tag${index}` }
          name={ `tag${index}` }
          value={ tag }
          checked={ filteredTags.includes(tag) ? true : false }
          disabled={ filteredTags.length === 5 && !filteredTags.includes(tag) ? true : false }
          onChange={ (event) => getCheckedTags(event.target.value) }
        />
        <label>{ tag }</label>
      </form>
    );
  });

  const getTherapistByTag = () => {
    const filtered = data.therapists.reduce((list, therapist) => {
      const formatLabels = JSON.parse(therapist.labels);

      filteredTags.forEach(tag => {
        if (formatLabels.includes(tag)) {
          list.push(therapist);
        }
      });

      return list;
    }, []);

    setFilteredTherapists(filtered);
  };

  const displayCards = () => {
    const therapists = filteredTherapists.length ? filteredTherapists : data.therapists;
    return therapists.map(therapist => {
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
  };

  return (
    <section className="landing-page-container">
      <div className="container search-tags-container">
        { searchTags }
      </div>
      <div className="container therapist-cards-container">
        { (loading && !data) && <h1>Loading...</h1> }
        { error && <h1>There was an error loading the data. { `${error.message}` }</h1> }
        { displayCards() }
      </div>
    </section>
  );
};

export default LandingPage;