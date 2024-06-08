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
        width: '100%', // Set the width to 100% for responsive images
        height: 'auto', // Automatically adjust the height to maintain aspect ratio
        marginBottom: '10px', // Add some margin below the image
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

const UserCollection = ({ cardCollection, onCreateNewCollection }) => {
    const navigate = useNavigate();

    const handleCollectionClick = (id) => {
        navigate(`/collection/${id}`);
    };

    return (
        <div style={styles.container}>
            <h2>User cardCollection</h2>
            <div style={styles.collectionList}>
                {cardCollection.map((collection, index) => (
                    <div
                        key={index}
                        style={styles.collectionItem}
                        onClick={() => handleCollectionClick(collection.name)}
                    >    
                        <img
                            src={collection.image}
                            alt=""
                            style={styles.collectionImage}
                        />
                    </div>
                ))}
            </div>
            <button style={styles.newCollectionButton} onClick={onCreateNewCollection}>
                No Create a collection function yet
            </button>
        </div>
    );
};

export default UserCollection;
