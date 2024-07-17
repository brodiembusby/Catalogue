import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/axiosConfig';
import useAuth from '../../hooks/useAuth';

const COLLECTIBLES_URL = '/collectibles';

const PileDetail = () => {
  const { pileId } = useParams();
  const { auth } = useAuth();
  const [collectibles, setCollectibles] = useState([]);

  useEffect(() => {
    const fetchCollectibles = async () => {
      try {
        const response = await api.get(`${COLLECTIBLES_URL}/${pileId}`, {
          headers: {
            'Authorization': `Bearer ${auth.accessToken}`
          }
        });
        setCollectibles(response.data);
      } catch (error) {
        console.error("Failed to fetch collectibles", error);
      }
    };

    if (auth?.accessToken) {
      fetchCollectibles();
    }
  }, [auth, pileId]);

  return (
    <div>
      <h1>Collectibles in Pile</h1>
      <div className="collectible-list">
        {collectibles.map((collectible, index) => (
          <div key={index} className="collectible-item">
            <img
              src={collectible.image}
              alt={collectible.name}
              className="collectible-image"
            />
            <div>{collectible.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PileDetail;
