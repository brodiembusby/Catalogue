import React from 'react';
import { useNavigate } from 'react-router-dom';
import PopUpPile from './PopUpPile'; 
import api from '../../api/axiosConfig';
// const EMAIL = getAuth().email
const EMAIL = "brodiembusby@hotmail.com"
const PILE_IMAGE = "https://picsum.photos/200/300"

const PILES_URL = '/piles'
const Pile = () => {
    const navigate = useNavigate();

    const handleAddPile = async (newPileName) => {
        try {
            const response = await api.post(PILES_URL, JSON.stringify({
                email: EMAIL,
                image: PILE_IMAGE,
                name: newPileName
            }), {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${auth.accessToken}`
                }
            });
            console.log('Pile added successfully:', response.data);
            console.log(newPileName);
            // You might want to update your list of piles here
        } catch (e) {
            console.error('Add new Pile Error', e);
        }
    };

    return (
        <div className="user-container">
            <h2>[getFirstName] Piles</h2>
            <div className="user-pile-list">
                {/* Display list of piles here */}
            </div>
            <div className='add-pile-button'>
                <PopUpPile onSave={handleAddPile} />
            </div>
        </div>
    );
};
export default Pile;
