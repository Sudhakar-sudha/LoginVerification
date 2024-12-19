import React, { useState } from 'react';
import axios from 'axios';

const MFASetup = () => {
    const [qrCode, setQrCode] = useState(null);

    const generateQRCode = async () => {
        try {
            const response = await axios.get('http://localhost:5000/generate');
            setQrCode(response.data.qrCode);
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    };

    return (
        <div>
            <h1>Setup Multi-Factor Authentication</h1>
            <button onClick={generateQRCode}>Generate QR Code</button>
            {qrCode && (
                <div>
                    <h3>Scan this QR code with Google Authenticator</h3>
                    <img src={qrCode} alt="QR Code" />
                </div>
            )}
        </div>
    );
};

export default MFASetup;
