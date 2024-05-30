import React from 'react';
import Player from '../components/player/Player';

const Home = ({ cards }) => {
  return (
    <main>
      <Player cards={cards} />
      
      <section>
        <h1>Welcome to Catalog</h1>
        <p>Just initial setup for the Catalog website</p>
      </section>

      <section>
        <h2>Featured Content</h2>
        <p>Here you will be able to catalog your collections.</p>
      </section>

    </main>
  );
}

export default Home;
