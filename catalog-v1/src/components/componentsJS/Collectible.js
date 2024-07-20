import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import api from '../../api/axiosConfig';
import "./../componentsCSS/Pile.css"
const USER_URL = '/user';
/***
 * 
 * I wont lie this is the worst page on this site 
 * I was really tired and it got out of hand quickly 
 * to make this work im sorry.
 * 
*/
const Collectible = ({allCards}) => {
    const { auth } = useAuth();

    const [collectibles, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
    const [showAddCards, setShowAddCards] = useState(false);
    const [userId, setUserId] = useState(null);

    let params = useParams();
    const pileId = params.pileId; 

    useEffect(() => {
        getPile(pileId);
        getUserId(); 
        setFilteredCards(allCards);
    }, [userId,pileId,allCards]); 

    // Get the indivdual pile
    const getPile = async (pileId) => {
        try {
                const response = await api.get(`/piles/${pileId}/name`, {

                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            setCards(response.data.cardArr);
        } catch (e) {
            console.error("Failed to get pile", e);
        }
    };
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
    const getPileId = async (pileName) => {
        try {
            const response = await api.get(`/piles/pileid`, {
                params: { userId, pileName },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            return response.data.id;
        } catch (e) {
            console.error("Failed to get pile ID", e);
            return null;
        }
    };

    // First send cardId from click
    const handleCardClick = (cardId) => {
        getSingleCard(cardId);
    }

    // Might be redudant but im keeping it
    const getSingleCard = async (cardId) => {
        try {
            const response = await api.get(`/cards/${cardId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            handleAddCard(response.data.name);
        } catch (e) {
            console.error("Failed to get card", e);
        }
    };

    
    const handleAddCard = async(cardId) => {
        const pileIdResponse = await getPileId(pileId);
        
        if (pileIdResponse) {
            try {
                const response = await api.post(`/piles/${pileIdResponse}/cards`, JSON.stringify({
                    name: cardId,
                    pileId: pileIdResponse
                }), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${auth.accessToken}`
                    }
                });
                setCards(response.data.collectibleArr);
                setShowAddCards(false); 
            } catch (e) {
                console.error("Failed to add Card", e);
            }
        } else {
            console.error("Failed to get pile ID");
        }
    }


    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        const filtered = allCards?.filter(card => 
            card.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredCards(filtered);
    }


    return (
        <div className="user-container">
            <h1>Collectibles for  {pileId}</h1>
            <button className="add-pile-button"onClick={() => setShowAddCards(!showAddCards)}>
                {showAddCards ? "Hide Cards" : "Add a Card"}
            </button>
            {showAddCards && (
                <div className="search-box">
                    <input 
                        className="search-input"
                        type="text" 
                        placeholder="Search cards..." 
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className="pile-list">
                        {filteredCards.map((card, index) => (
                            <div key={index} className="pile-item" onClick={() => handleCardClick(card.name)}>
                                <h2>{card?.name}</h2>
                                <img
                                    src={card?.image}
                                    alt={card?.name}
                                    className="pile-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="user-pile-list">
                <h1>Current Collectibles</h1>
                <div className="pile-list">
                    {collectibles?.map((collectible, index) => (
                        <div key={index} className="pile-item">
                            <h2>{collectible?.name}</h2>
                            <img
                                src={collectible?.image}
                                alt={collectible?.name}
                                className="pile-image"
                            />
                            <h2>{collectible?.description}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collectible;