// src/components/Layout/Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase'; // Ensure this is imported
import { styled, alpha } from '@mui/material/styles'; // Import styled and alpha
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';

const Header = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.05), // Adjusted for light theme
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.black, 0.1),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#FFF', // Background color
                color: 'black', // Text color
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {/* Logo/Title */}
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    Exclusive
                </Typography>

                {/* Navigation Links */}
                <Box sx={{ flexGrow: 1, display: 'flex', gap: '15px' }}>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/contact">
                        Contact
                    </Button>
                    <Button color="inherit" component={Link} to="/signup">
                        Sign Up
                    </Button>
                </Box>

                {/* Search Box */}
                <Box sx={{ display: 'flex', gap: "15px", alignItems: "center" }}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="What are looking for.."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <FavoriteBorderIcon />
                    <ShoppingCartCheckoutIcon />
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default Header;
