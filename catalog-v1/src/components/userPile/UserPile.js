import { useNavigate } from 'react-router-dom';
import './UserPile.css'; 
import api from '../../api/axiosConfig';
import React, { useState } from 'react';
/*

This page is for all user piles 
TODO: separate collectibles and piles 

*/
const PILES_URL = '/piles'
const UserPile = ({collectibles}) => {
    
    const navigate = useNavigate();
    const [ collectionName, setPileName] = useState('');
    const [ collectionImage, setPileImage] = useState('');

    const handlePileClick = (collectibleId) => {
        navigate(`/piles/${collectibleId}`);
    };
    const [newPile, setNewPileData] = useState({
        name: "",
        image: "",
      });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewPileData({
            ...newPile,
            [name]: value,
        })
    }

    const handleAddPiles = async ()  => {
        
        e.preventDefault();
        const rev = revText.current;

        try{
            const response = await api.post(PILES_URL,{
                name: rev.name,
                image: null || rev.image,
                appUserId: UserData.getId(),
            })
        } catch(e){
            console.error("Add new Pile Error",e)
        }
    };


    return (
        <div className="user-container">
            <h2>[getFirstName] Piles</h2>
            <div className="user-pile-list">
                {piles.map((piles, index) => (
                    <div
                        key={index}
                        className="user-pile-item"
                        onClick={() => handlePileClick(piles.name)}
                    >
                        <img
                            src={piles.image}
                            alt={piles.name}
                            className="user-pile-image"
                        />
                        <div>{piles.name}</div>
                    </div>
                ))}
            </div>
            <div className='newButton'> 
                <input type="collectionName" 
                name='collectionName'
                placeholder='Pile Name' 
                value={newPile.name} 
                onChange={handleChange}>
                </input>
                
                {/* <input type="file" 
                name='collectionImage'
                placeholder='Pile Name' 
                value={newPile.name} 
                onChange={handleChange}>
                </input> */}
            <button className="user-new-pile-button" onClick={handleAddPiles}>
                No Create a pile function yet
            </button>
            </div>
        </div>
    );
};

export default UserPile;
