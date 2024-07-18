import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUpPile from './PopUpPile'; 
import api from '../../api/axiosConfig';
import useAuth from '../../hooks/useAuth';

const PILE_IMAGE = "https://picsum.photos/200/300";
const USER_URL = '/user';
const PILES_URL = '/piles'
const Pile = () => {
    const navigate = useNavigate();
    const { auth } = useAuth();

    const [piles, setPiles] = useState([]);
    
    const getPiles = async (userId) => {
        try {
            const response = await api.get(`${USER_URL}/${userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            const singlePile = response.data;
            setPiles(singlePile.pilesArr);
        } catch (e) {
            console.error("Failed to get Piles", e);
        }
    };

    useEffect(() => {
        if (auth.email) {
            getPiles(auth.email);
        }
    }, [auth.email]);

    const handleAddPile = async (newPileName) => {
        try {
            const response = await api.post(PILES_URL, JSON.stringify({
                email: auth.email,
                image: PILE_IMAGE,
                name: newPileName
            }), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            console.log('Pile added successfully:', response.data);
            setPiles([...piles, response.data]);  // Update piles list with the new pile
        } catch (e) {
            console.error('Add new Pile Error', e);
        }
    };

    return (
        <div className="user-container">
            <h2>{auth.email} Piles</h2>
            <div className="user-pile-list">
                <div>
                    <h1>All Collections</h1>
                    <div className="pile-list">
                        {piles.map((pile, index) => (
                            <div key={index} className="pile-item">
                                <img
                                    src={pile.image}
                                    alt={pile.name}
                                    className="pile-image"
                                />
                                <div>{pile.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='add-pile-button'>
                <PopUpPile onSave={handleAddPile} />
            </div>
        </div>
    );
};

export default Pile;
