import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserCollection.css'; 

const UserCollection = ({ cards }) => {
    const navigate = useNavigate();

    const handleCollectionClick = (cardId) => {
        navigate(`/cards/${cardId}`);
    };

    const handleAddCollectible = () => {
        // Logic to create a new collection
    };

    return (
        <div className="user-container">
            <h2>[getFirstName] Collections</h2>
            <div className="user-collection-list">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="user-collection-item"
                        onClick={() => handleCollectionClick(card.name)}
                    >
                        <img
                            src={card.image}
                            alt={card.name}
                            className="user-collection-image"
                        />
                        <div>{card.name}</div>
                    </div>
                ))}
            </div>
            <button className="user-new-collection-button" onClick={handleAddCollectible}>
                No Create a collection function yet
            </button>
        </div>
    );
};

export default UserCollection;
