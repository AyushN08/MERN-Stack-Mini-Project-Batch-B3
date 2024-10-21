import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RequestOtp = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const requestOtp = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/otp/request-otp', { email });
            setMessage(response.data.message);
            if (response.status === 200) {
                navigate('/verifyotp', { state: { email } });
            }
        } catch (error) {
            setMessage(error.response?.data.message || 'Error sending OTP. Please try again.');
        }
        setIsLoading(false);
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Doctor Login - Request OTP</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg"
                                        onClick={requestOtp}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Requesting OTP...' : 'Request OTP'}
                                    </button>
                                </div>
                            </form>
                            {message && (
                                <div className="alert alert-info mt-3" role="alert">
                                    {message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestOtp;
