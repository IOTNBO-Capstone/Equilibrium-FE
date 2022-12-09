import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Resources from '../Resources/Resources';
import OutboundLink from '../OutboundLink/OutboundLink';
import TherapistPage from '../TherapistPage/TherapistPage';
import { Switch, Route } from 'react-router-dom';
import { useTherapists } from '../../utilities';

const App = () => {
  const { data, loading, error } = useTherapists();

  if (loading && !data) return "Loading...";

  if (error) return `${error.message}`;

  return (
    <main className="app-main">
      <header className="app-header">
        <h1 >Equilibrium</h1>
      </header>
      <Switch >
        <Route exact path="/" >
          <LandingPage />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        <Route path="/:id"
          render={ ({ match }) => {
            const individualTherapist = data.therapists.find(therapist => therapist.id === match.params.id);
            console.log(individualTherapist);
            return <TherapistPage individualTherapist={ individualTherapist } />;
          } } />
        <Route path="/outbound">
          <OutboundLink />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
