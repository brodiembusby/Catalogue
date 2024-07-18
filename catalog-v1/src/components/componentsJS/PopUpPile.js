import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopUpPile({ onSave }) {
    const [pileName, setPileName] = useState('');
    const [open, setOpen] = useState(false);
    
    const handleSave = () => {
        onSave(pileName);
        setPileName('');
        setOpen(false);
    };

    return (
        <Popup 
            trigger={<button className='btn btn-primary'> Add Collection </button>} 
            position="right center"
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
        >
            <div>
                <h4>Create New Pile</h4>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={pileName} 
                        onChange={(e) => setPileName(e.target.value)} 
                    />
                </label>
                <button onClick={handleSave}>Save</button>
            </div>
        </Popup>
    );
}
