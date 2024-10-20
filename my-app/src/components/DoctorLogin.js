import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const DoctorLogin = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // For button loading state
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Function to request OTP
    const requestOtp = async () => {
        setIsLoading(true); // Start loading state
        try {
            const response = await axios.post('http://localhost:8080/otp/request-otp', { email });
            setMessage(response.data.message);
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage('Error sending OTP. Please try again.');
            }
        }
        setIsLoading(false); // End loading state
    };

    // Function to verify OTP
    const verifyOtp = async () => {
        setIsLoading(true); // Start loading state
        try {
            const response = await axios.post('http://localhost:8080/otp/verify-otp', { email, otp });
            setMessage(response.data.message);

            // If OTP is verified successfully, redirect to doctor's dashboard
            if (response.status === 200) {
                navigate('/Doctor'); // Redirect to dashboard or another route
            }
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage('Error verifying OTP. Please try again.');
            }
        }
        setIsLoading(false); // End loading state
    };

    return (
        <div>
            <h2>Doctor Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button onClick={requestOtp} disabled={isLoading}>
                {isLoading ? 'Requesting OTP...' : 'Request OTP'}
            </button>

            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
            />
            <button onClick={verifyOtp} disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Verify OTP'}
            </button>

            {message && <p>{message}</p>}
        </div>
    );
};

export default DoctorLogin;
