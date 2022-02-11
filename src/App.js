import './App.css';
import { Outlet, Link } from "react-router-dom";
import background from './assets/backgrounds/personbackground.jpg';

export default function App() {
  return (
    <div style={{ backgroundColor: '#ccc', height: '100vh' }}>
      <div
        style={{
          backgroundImage: 'url(' + background + ')',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          height: '30%',
          color: 'white',
          padding: '50px',
          textAlign: 'center'
        }}
      >
        <h1 style={{
          fontSize: '48px',
          marginBottom: '50px'
        }}
        > Personal page </h1>
        <nav>
          <Link to="/groups" id='link'> Groups |{" "} </Link>
          <Link to="/skills" id='link'> |{" "} Skills |{" "} </Link>
          <Link to="/wishes" id='link'> |{" "} Wishes </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

