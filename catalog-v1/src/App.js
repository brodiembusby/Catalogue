import React, { useState, useEffect } from 'react';
import './App.css';
import api from './api/axiosConfig';
import AppRoutes from './AppRoutes';

function App() {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    try {
      const response = await api.get('/api/v1/cards');
      setCards(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className='App'>
      <AppRoutes cards={cards} />
    </div>
  );
}

export default App;
