import React, { useState, useEffect } from 'react';
import './App.css';
import api from './api/axiosConfig';
import AppRoutes from './AppRoutes';

function App() {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);

// Helper function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getCards = async () => {
  try {
    const response = await api.get('/cards');
    const allCards = response.data;
    
    const shuffledCards = shuffleArray(allCards);
    const randomCards = shuffledCards.slice(0, 20);

    setCards(randomCards);
    setAllCards(allCards); 
    
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className='App'>
      <AppRoutes
        cards={cards}
      />
    </div>
  );
}

export default App;
