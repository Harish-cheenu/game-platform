import React from 'react';
import { useClerk } from '@clerk/clerk-react';
import { USER_DETAILS, GAMES } from '../../constants/content';
import { Images } from '../../assets/images';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ isSignedIn, user }) => {
  const { openSignIn } = useClerk();

  return (
    <div className="home-page">
      <section className="welcome-section">
        {!isSignedIn ? (
          <h1>Welcome to the Game Platform</h1>
        ) : (
          <h1>Welcome {user?.firstName}, to the Game Platform</h1>
        )}
        <p>Select a game from the sidebar to start playing!</p>
        {!isSignedIn && (
          <button onClick={() => openSignIn({})} className="btn sign-in-button">
            Sign In
          </button>
        )}
      </section>

      <section className="games-section">
        <h2>Games</h2>
        <div className="games-container">
          {GAMES.map((game, index) => (
            <div key={index} className={`game-card ${game.status === 'Upcoming' ? 'upcoming' : ''}`}>
              <img src={Images[game?.image]} alt={game?.name} className="game-video" />
              <h3>{game.name}</h3>
              <p><strong>Number of players:</strong> {game.players}</p>
              <p><strong>Status:</strong> {game.status}</p>
              <p>{game.description}</p>
              <button className={`play-btn ${game.status === 'Upcoming' ? 'disabled' : ''}`} disabled={game.status === 'Upcoming'}>
                {game.status === 'Upcoming' ? 'Coming Soon' : 
                  <Link to={game?.url} className='no-style-link'>
                    Play Now
                  </Link>}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="details-section">
        <h2>About Me</h2>
        <div className="details">

          <div className="profile-pic">
            <img src={Images[USER_DETAILS.image]} alt="Personal" className="personal-image" />
          </div>
          <div className="details-content">
            <p><strong>Name:</strong> {USER_DETAILS.name}</p>
            <p><strong>Role:</strong> {USER_DETAILS.role}</p>
            <p><strong>Experience:</strong> {USER_DETAILS.experience}</p>
            <p><strong>Skills:</strong> {USER_DETAILS.skills.join(', ')}</p>
            <p><strong>About Me:</strong> {USER_DETAILS.about}</p>
            <p><strong>Contact:</strong> <a href={`mailto:${USER_DETAILS.contact}`}>{USER_DETAILS.contact}</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
