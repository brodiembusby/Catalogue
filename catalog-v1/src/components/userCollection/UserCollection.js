import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    },
    collectionList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        margin: '20px 0',
    },
    collectionItem: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
    },
    collectionImage: {
        width: '100%',
        height: 'auto', 
        marginBottom: '10px', 
    },
    newCollectionButton: {
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
    },
};

const UserCollection = ({ cards }) => {
    const navigate = useNavigate();

    const handleCollectionClick = (cardId) => {
        console.log("Navigating to card ID:", cardId); // Debugging line
        navigate(`/cards/${cardId}`);
    };

    const handleCreateNewCollection = () => {
        // Logic to create a new collection
    };

    return (
        <div style={styles.container}>
            <h2>User cardCollection</h2>
            <div style={styles.collectionList}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={styles.collectionItem}
                        onClick={() => handleCollectionClick(card.name)}
                    >
                        <img
                            src={card.image}
                            alt={card.name}
                            style={styles.collectionImage}
                        />
                        <div>{card.name}</div>
                    </div>
                ))}
            </div>
            <button style={styles.newCollectionButton} onClick={handleCreateNewCollection}>
                No Create a collection function yet
            </button>
        </div>
    );
};

export default UserCollection;
