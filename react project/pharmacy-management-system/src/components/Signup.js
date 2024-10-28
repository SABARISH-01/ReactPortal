import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        if (!username || !email || !password) {
            setError('All fields are required.');
            return;
        }
        
        const user = { username, email, password };
        localStorage.setItem('user', JSON.stringify(user)); // Store the user info in localStorage

        setError(''); // Clear any previous error
        navigate('/login'); // Redirect to login page after successful signup
    };

    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#282c34',
                padding: '20px'
            }}
        >
            <Box 
                sx={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '40px',
                    borderRadius: '15px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
                }}
            >
                <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: '#333' }}>
                    Sign Up
                </Typography>
                {error && (
                    <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
                        {error}
                    </Typography>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccountCircleIcon style={{ color: '#673ab7', marginRight: '10px' }} />
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon style={{ color: '#2196f3', marginRight: '10px' }} />
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LockIcon style={{ color: '#ff5722', marginRight: '10px' }} />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                </Box>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleSignup}
                    sx={{
                        backgroundColor: '#673ab7',
                        '&:hover': {
                            backgroundColor: '#5e35b1'
                        }
                    }}
                    fullWidth
                >
                    Create Account
                </Button>
            </Box>
        </Box>
    );
};

export default Signup;
