import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser) {
            // Check if stored credentials match entered credentials
            if (storedUser.username === username && storedUser.password === password) {
                setError('');
                navigate('/home'); // Redirect to home page on successful login
            } else {
                setError('Invalid credentials');
            }
        } else {
            setError('No user found. Please sign up first.');
        }
    };

    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#0d2b3f',
                padding: '20px'
            }}
        >
            <Box 
                sx={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '40px',
                    borderRadius: '15px',
                    backgroundColor: '#0d3a4f',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
                }}
            >
                <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: '#ffffff' }}>
                    User Login
                </Typography>
                {error && (
                    <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
                        {error}
                    </Typography>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccountCircleIcon style={{ color: '#ffffff', marginRight: '10px' }} />
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        InputProps={{
                            style: { color: '#ffffff' },
                        }}
                        InputLabelProps={{
                            style: { color: '#ffffff' },
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LockIcon style={{ color: '#ffffff', marginRight: '10px' }} />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        InputProps={{
                            style: { color: '#ffffff' },
                        }}
                        InputLabelProps={{
                            style: { color: '#ffffff' },
                        }}
                    />
                </Box>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleLogin}
                    sx={{
                        backgroundColor: '#ffffff',
                        color: '#0d2b3f',
                        '&:hover': {
                            backgroundColor: '#f0f0f0'
                        },
                        fontWeight: 'bold'
                    }}
                    fullWidth
                >
                    LOGIN
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
