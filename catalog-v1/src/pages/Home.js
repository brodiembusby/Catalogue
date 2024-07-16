import React from 'react';
import { Link } from 'react-router-dom';
import Player from '../components/player/Player';

const Home = ({ collectibles }) => {
  return (
    <main>
      <section className="player-section">
        <div className="player-content">
          <h1>Welcome to Catalog</h1>
          <p>Organize and explore your favorite piles with ease.</p>
          <Link to="/login" className="btn btn-primary">Get Started</Link>
        </div>
      </section>

      <section className="featured-section">
        <div className="featured-carousel">
          <Player collectibles={collectibles} />
        </div>
        <div className="featured-info">
          <h2>Featured Piles</h2>
          <p>Discover a world of possibilities to catalog your piles. Our platform allows you to create, manage, and share piles of your favorite items, from baseball collectibles to rare artifacts.</p>
          <Link to="/User" className="btn btn-secondary">View All Piles</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
