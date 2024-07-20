import React from 'react';
import { Link } from 'react-router-dom';
import Player from "../components/componentsJS/Player.js"

const Home = ({ randomCards }) => {
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
          <Player randomCards={randomCards} />
        </div>
        <div className="featured-info">
          <h2>Store Your items!</h2>
          <p>Discover a world of possibilities to catalog your collectibles. 
            Our platform allows you to create, manage, and share piles of your favorite items, 
            from baseball cards to rare artifacts.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
