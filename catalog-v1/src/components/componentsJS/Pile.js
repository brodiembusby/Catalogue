import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import api from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const PILES_URL = '/piles';

const UserProfile = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [piles, setPiles] = useState([]);

  useEffect(() => {
    const fetchPiles = async () => {
      try {
        const response = await api.get(PILES_URL, {
          headers: {
            'Authorization': `Bearer ${auth.accessToken}`
          }
        });
        setPiles(response.data);
      } catch (error) {
        console.error("Failed to fetch piles", error);
      }
    };

    if (auth?.accessToken) {
      fetchPiles();
    }
  }, [auth]);

  const handlePileClick = (pileId) => {
    navigate(`/piles/${pileId}`);
  };

  return (
    <div>
      <h1>User Profile</h1>
      {auth ? (
        <div>
          <p>Email: {auth.email}</p>
          <p>Role: {auth.role}</p>
          <h2>Your Piles</h2>
          <div className="user-pile-list">
            {piles.map((pile, index) => (
              <div
                key={index}
                className="user-pile-item"
                onClick={() => handlePileClick(pile._id)}
              >
                <img
                  src={pile.image}
                  alt={pile.name}
                  className="user-pile-image"
                />
                <div>{pile.name}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
};

export default UserProfile;
