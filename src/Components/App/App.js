import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import OutboundLink from '../OutboundLink/OutboundLink';
import TherapistPage from '../TherapistPage/TherapistPage';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Switch, Route } from 'react-router-dom';
import { useTherapists } from '../../utilities';

const App = () => {
  const { data, loading, error } = useTherapists();

  if (loading && !data) return "Loading...";
  
  return (
    <main className="app-main">
      <header className="app-header">
        <h1 >Equilibrium</h1>
      </header>
      <Switch >
        <Route exact path="/" >
          {error 
          ? <ErrorMessage error={error} />
          : <LandingPage />}
        </Route>
        <Route exact path="/outbound">
        {error 
          ? <ErrorMessage error={error} />
          : <OutboundLink />}
        </Route>
        <Route path="/:id"
          render={ ({ match }) => {
            const individualTherapist = data.therapists.find(therapist => therapist.id === match.params.id);
            return (
              <div className="therapist-display"> {
              error
              ? <ErrorMessage error={error} />
              : <TherapistPage 
                id={ individualTherapist.id } 
                key={ individualTherapist.id } 
                name={ individualTherapist.name } 
                address={ individualTherapist.address } 
                phoneNumber={ individualTherapist.phoneNumber } 
                labels={ individualTherapist.labels } 
                imageUrl={ individualTherapist.imageUrl}
                bio={ individualTherapist.bio } 
                practice={individualTherapist.practice }/>
            }
            </div>)
          } } />
      </Switch>
      <Footer />
    </main>
  );
};

export default App;
