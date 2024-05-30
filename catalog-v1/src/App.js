import React, { useState, useEffect } from 'react';
import './App.css';
import api from './api/axiosConfig';
import AppRoutes from './AppRoutes';

function App() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({});
  const [reviews, setReviews] = useState([]);

  const getCards = async () => {
    try {
      const response = await api.get('/api/v1/cards');
      setCards(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCardData = async (cardId) => {
    try {
      const response = await api.get(`/api/v1/cards/${cardId}`);
      const singleCard = response.data;

      setCard(singleCard);
      setReviews(singleCard.reviewsIds);

    } catch (e) {
      console.error("Get Card Data", e);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className='App'>
      <AppRoutes
        cards={cards}
        getCardData={getCardData}
        reviews={reviews}
        setReviews={setReviews}
        card={card}
      />
    </div>
  );
}

export default App;
