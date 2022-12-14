import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import OutboundLink from '../OutboundLink/OutboundLink';
import TherapistPage from '../TherapistPage/TherapistPage';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import BadUrl from '../BadUrl/BadUrl';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useTherapists } from '../../utilities';
import { useEffect } from 'react';

const App = () => {
  const { data, loading, error } = useTherapists();

  
  const history = useHistory();
  useEffect(() => {
    if(error) {
      history.push("/error");
    }
    // eslint-disable-next-line
  }, [error]);
  
  if (loading && !data) return "Loading...";
  
  return (
    <main className="app-main">
      <header className="app-header">
        <h1 data-cy='title'>Equilibrium</h1>
      </header>
       <Switch >
        <Route exact path="/" >
         <LandingPage />
        </Route>
        <Route exact path="/error" >
          <ErrorMessage error={error} />
        </Route>
        <Route exact path="/outbound">
          <OutboundLink />
        </Route>
        <Route exact path="/:id"
          render={ ({ match }) => {
            const individualTherapist = data.therapists?.find(therapist => therapist.id === match.params.id);
            if (!individualTherapist) {
              return <Redirect to="/"/>
            }
            return <TherapistPage 
              id={ individualTherapist.id } 
              key={ individualTherapist.id } 
              name={ individualTherapist.name } 
              address={ individualTherapist.address } 
              phoneNumber={ individualTherapist.phoneNumber } 
              labels={ individualTherapist.labels } 
              imageUrl={ individualTherapist.imageUrl}
              bio={ individualTherapist.bio } 
              practice={individualTherapist.practice }/>
          } } 
        />
        <Route path="/*">
          <BadUrl />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
};

export default App;
