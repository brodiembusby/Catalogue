import React, { useState, useEffect } from 'react';
import './App.css';
import api from './api/axiosConfig';
import AppRoutes from './AppRoutes';

function App() {
  const [collectibles, setCollectibles] = useState();
  const [collectible, setCollectible] = useState();
  const [reviews, setReviews] = useState([]);

  const getCollectibles = async () => {
    try {
      const response = await api.get('/collectibles');
      setCollectibles(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCollectibleData = async (collectibleId) => {
    try {
      const response = await api.get(`/collectibles/${collectibleId}`);
      const singleCollectible = response.data;

      setCollectible(singleCollectible);
      setReviews(singleCollectible.reviewIds);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCollectibles();
  }, []);

  return (
    <div className='App'>
      <AppRoutes
        collectible={collectible}
        collectibles={collectibles}
        getCollectibleData={getCollectibleData}
        reviews={reviews}
        setReviews={setReviews}
      />
    </div>
  );
}

export default App;
