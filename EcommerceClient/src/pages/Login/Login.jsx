import { React } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

const Login = () => {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateAreas: `
                        "row1Section1 row1Section2"
                    `,
                    gridTemplateRows: 'auto',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 4,
                    height: '100%',
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        gridArea: 'row1Section1',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: 606,
                            width: 619,
                            maxHeight: { xs: 500, md: 1030 },
                            maxWidth: { xs: 350, md: 1150 },
                        }}
                        alt="The house from the offer."
                        src="../src/assets/Side_Image.png"
                    />
                </Box>

                <Box
                    sx={{
                        gridArea: 'row1Section2',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        margin: '50px'
                    }}
                >
                    <Typography
                        sx={{
                            color: "var(--Text2, #000)",
                            fontFamily: "Inter",
                            fontSize: "36px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "30px",
                            letterSpacing: "1.44px"
                        }}
                    >
                        Log in to Exclusive
                    </Typography>

                    <Typography
                        sx={{
                            color: "var(--Text2, #000)",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "30px",
                            letterSpacing: "1.44px"
                        }}
                    >
                        Enter your details below
                    </Typography>
                    <TextField id="standard-basic" label="Email Or Phonenumber" variant="standard" />
                    <TextField id="standard-basic" label="Password" variant="standard" />
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Button
                            sx={{
                                background: 'var(--Button2, #DB4444)',
                                borderRadius: '4px',
                                color: 'white',
                                marginTop: '20px',
                                width: '150px',
                                minWidth: '150px',
                                padding: '10px 20px',
                                textAlign: 'center'
                            }}
                        >
                            LOGIN
                        </Button>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%', // Ensures it spans the full width of its parent
                                marginTop: '20px' // Optional, adds spacing
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "var(--Secondary-2, #DB4444)",
                                    cursor: 'pointer' // Optional, indicates clickable behavior
                                }}
                            >
                                Forget Password?
                            </Typography>
                        </Box>


                    </Box>

                </Box>
            </Box>
        </Container >
    );
};

export default Login;
