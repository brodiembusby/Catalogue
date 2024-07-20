import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import api from '../../api/axiosConfig';
import "./../componentsCSS/Pile.css"

const Collectible = ({allCards}) => {
    const { auth } = useAuth();
    let params = useParams();
    const pileId = params.pileId; 
    const [collectibles, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
    const [showAddCards, setShowAddCards] = useState(false);

    // Get the indivdual pile
    const getPile = async (pileId) => {
        try {
            const response = await api.get(`/piles/669b0f5b21be1c36eb50c4d7/single`, {
                // const response = await api.get(`/api/v1/piles/${pileId}/single`, {

                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            console.log(pileId);
            setCards(response.data.cardArr);
        } catch (e) {
            console.error("Failed to get pile", e);
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
            handleAddCard(response.data.id);
        } catch (e) {
            console.error("Failed to get card", e);
        }
    };

    // Then add the card to the collection
    const handleAddCard = async(cardId) => {
        try {
            const response = await api.post(`/piles/${pileId}/cards`, JSON.stringify({
                cardId: cardId,
                pileId: pileId
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
    }


    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        const filtered = allCards.filter(card => 
            card.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredCards(filtered);
    }

    useEffect(() => {
        getPile(pileId);
        setFilteredCards(allCards);
    }, [pileId, allCards]);

    return (
        <div className="user-container">
            <h1>Collectibles for Pile {pileId}</h1>
            <button onClick={() => setShowAddCards(!showAddCards)}>
                {showAddCards ? "Hide Cards" : "Add a Card"}
            </button>
            {showAddCards && (
                <div className="search-box">
                    <input 
                        type="text" 
                        placeholder="Search cards..." 
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className="pile-list">
                        {filteredCards.map((card, index) => (
                            <div key={index} className="pile-item" onClick={() => handleCardClick(card._id)}>
                                <h2>{card.name}</h2>
                                <img
                                    src={card.image}
                                    alt={card.name}
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
                    {collectibles.map((collectible, index) => (
                        <div key={index} className="pile-item">
                            <h2>{collectible.name}</h2>
                            <img
                                src={collectible.image}
                                alt={collectible.name}
                                className="pile-image"
                            />
                            <h2>{collectible.description}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collectible;