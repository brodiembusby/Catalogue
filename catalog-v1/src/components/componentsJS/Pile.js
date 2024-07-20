import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import PopUpPile from './PopUpPile'; 
import api from '../../api/axiosConfig';
import useAuth from '../../hooks/useAuth';
import "./../componentsCSS/Pile.css"

const PILE_IMAGE = "https://www.tcdb.com/Images/Cards/Baseball/9739/9739-409350Fr.jpg";
const USER_URL = '/user';
const PILES_URL = '/piles';

const Pile = () => {
    const navigate = useNavigate();
    const { auth } = useAuth();

    const [piles, setPiles] = useState([]);
    const [userId, setUserId] = useState(null);
    // let params = useParams();

    const getUserId = async () => {
        try {
            const response = await api.get(`${USER_URL}/${auth.email}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            setUserId(response.data.id);
        } catch (e) {
            console.error("Failed to get userId", e);
        }
    };

    const getPiles = async (userId) => {
        try {
            const response = await api.get(`${PILES_URL}/${userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            setPiles(response.data);
        } catch (e) {
            console.error("Failed to get Piles", e);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await getUserId(); // Ensure userId is set before calling getPiles
            if (userId) {
                await getPiles(userId);
            }
        };
        fetchData();
    }, [userId]); // Depend on userId so that it updates piles when userId changes

    const handleAddPile = async (newPileName) => {
        try {
            const response = await api.post(PILES_URL, {
                userId: userId,
                image: PILE_IMAGE,
                name: newPileName
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            console.log('Pile added successfully:', response.data);
            getPiles(userId);
        } catch (e) {
            console.error('Add new Pile Error', e);
        }
    };

    const goToPile = (pileId) => {
        navigate(`/piles/${pileId}`);
    }

    return (
        <div className="user-container">
            <h1>{auth.email}</h1>
            <div className="user-pile-list">
                <h1>All Collections</h1>
                <div className="pile-list">
                    {piles.map((pile, index) => (
                        <div key={index} className="pile-item">
                            <h2>{pile.name}</h2>
                            <img
                                onClick={() => goToPile(pile.name)}
                                src={pile.image}
                                alt={pile.name}
                                className="pile-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='add-pile-button'>
                <PopUpPile onSave={handleAddPile} />
            </div>
        </div>
    );
};

export default Pile;
