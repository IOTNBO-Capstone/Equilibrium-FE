// import { useTherapists } from '../../utilities';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Resources from '../Resources/Resources';
import OutboundLink from '../OutboundLink/OutboundLink';
import TherapistPage from '../TherapistPage/TherapistPage';

const App = () => {

  // const { data, error, loading } = useTherapists();
  
  // if (loading && !data) return "Loading...";

  // if (error) return `${error.message}`;

  // console.log(data.therapists)

  return (
    <main className="app-main">
      <header className="app-header">
        <h1>Equilibrium</h1>
      </header>
      <LandingPage />
      <Resources />
      <TherapistPage />
      <OutboundLink />
    </main>
  );
};

export default App;
