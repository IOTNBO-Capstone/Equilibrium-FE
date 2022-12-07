import { useUsers } from '../../utilities';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Resources from '../Resources/Resources';
import OutboundLink from '../OutboundLink/OutboundLink';
import TherapistPage from '../TherapistPage/TherapistPage';

const App = () => {

  const { data, error, loading } = useUsers();

  if (loading) return "Loading...";
  if (error) return `${error.message}`;

  console.log(data);

  return (
    <div className="landing">
      <header className="iotnbo">
        <h1>It's Okay To Not Be Okay!</h1>
      </header>
      <LandingPage />
      <Resources />
      <TherapistPage />
      <OutboundLink />
    </div>
  );
};

export default App;
