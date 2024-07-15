import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserCollection.css'; 
import api from 'src/api/axiosConfig.js'

const UserCollection = ({ collectibles, UserData }) => {
    
    const navigate = useNavigate();
    const handleCollectionClick = (cardId) => {
        navigate(`/collectibles/${cardId}`);
    };
    const [newCollection, setNewCollectionData] = useState({
        name: "",
        image: "",
      });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewCollectionData({
            ...newCollection,
            [name]: value,
        })
    }

    const handleAddCollectible = async ()  => {
        
        e.preventDefault();
        const rev = revText.current;

        try{
            const response = await api.post("/collections",{
                name: rev.name,
                image: null || rev.image,
                appUserId: UserData.getId(),
            })
        } catch(e){
            console.error("Add new Collection Error",e)
        }
    };


    return (
        <div className="user-container">
            <h2>[{UserData.getFirstName()}] Collections</h2>
            <div className="user-collection-list">
                {collectibles.map((collectible, index) => (
                    <div
                        key={index}
                        className="user-collection-item"
                        onClick={() => handleCollectionClick(collectible.name)}
                    >
                        <img
                            src={collectible.image}
                            alt={collectible.name}
                            className="user-collection-image"
                        />
                        <div>{collectible.name}</div>
                    </div>
                ))}
            </div>
            <div className='newButton'> 
                <input type="collectionName" 
                name='collectionName'
                placeholder='Collection Name' 
                value={newCollection.name} 
                onChange={handleChange}>
                </input>
                
                {/* <input type="file" 
                name='collectionImage'
                placeholder='Collection Name' 
                value={newCollection.name} 
                onChange={handleChange}>
                </input> */}
            <button className="user-new-collection-button" onClick={handleAddCollectible}>
                No Create a collection function yet
            </button>
            </div>
        </div>
    );
};

export default UserCollection;
