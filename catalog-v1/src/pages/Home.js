import React from 'react';
import { Link } from 'react-router-dom';
import Player from '../components/player/Player';

const Home = ({ cards }) => {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Catalog</h1>
          <p>Organize and explore your favorite collections with ease.</p>
          <Link to="/login" className="btn btn-primary">Get Started</Link>
        </div>
      </section>

      <section className="featured-section">
        <div className="featured-carousel">
          <Player cards={cards} />
        </div>
        <div className="featured-info">
          <h2>Featured Collections</h2>
          <p>Discover a world of possibilities to catalog your collections. Our platform allows you to create, manage, and share collections of your favorite items, from baseball cards to rare artifacts.</p>
          <Link to="/User" className="btn btn-secondary">View All Collections</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
