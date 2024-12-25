import React, { useState } from 'react';
import axios from 'axios';

const MFAVerification = () => {
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');

    const verifyToken = async () => {
        try {
            const response = await axios.post('http://localhost:5000/verify', { token });
            if (response.data.verified) {
                setMessage('Token verified successfully!');
            } else {
                setMessage('Invalid token. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying token:', error);
        }
    };

    return (
        <div>
            <h1>Verify Token</h1>
            <input
                type="text"
                placeholder="Enter token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            />
            <button onClick={verifyToken}>Verify</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default MFAVerification;
