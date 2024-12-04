import React, { useState, useEffect } from 'react';
import { Container, Box, Stack, Breadcrumbs, Typography, Link, Divider, Rating, Button, TextField, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio } from '@mui/material';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Checkout = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            MUI
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Core
        </Link>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            Breadcrumb
        </Typography>
    ];

    return (
        <Container
            sx={{
                maxWidth: 'lg',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateAreas: `
                    "row1Section1"
                    "row2Section1"
                    "row3Section1"
                `,
                    gridTemplateRows: 'auto 1fr auto', // Ensure the form and summary take up space
                    gridTemplateColumns: '1fr',
                    gap: 4,
                    marginTop: '20px',
                    height: '100%', // Full height container
                    width: '100%',
                }}
            >
                {/* Breadcrumb Section */}
                <Stack gridArea="row1Section1">
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>

                {/* Main Content: Form + Summary */}
                <Stack
                    gridArea="row2Section1"
                    direction="row"
                    gap="20px"
                    sx={{
                        flexGrow: 1, // Allow this section to expand
                        height: '100%',
                    }}
                >
                    {/* Billing Form Section */}
                    <Stack
                        display="flex"
                        flexDirection="column"
                        gap="20px"
                        sx={{
                            flex: 2, // Adjust relative width
                            overflowY: 'auto', // Add scroll if content overflows
                        }}
                    >
                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>First Name*</Typography>
                                <TextField fullWidth label="Enter First Name" id="enterFirstName" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Company Name</Typography>
                                <TextField fullWidth label="Enter Company Name" id="enterCompanyName" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Street Address</Typography>
                                <TextField fullWidth label="Enter Street" id="enterStreetName" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Apartment, Floor, etc.</Typography>
                                <TextField fullWidth label="Enter Apartment" id="enterApartmentName" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Town/City</Typography>
                                <TextField fullWidth label="Enter Town Name" id="enterTownName" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Phone Number*</Typography>
                                <TextField fullWidth label="Enter Phone Number" id="enterPhoneNumber" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Email Address*</Typography>
                                <TextField fullWidth label="Enter Email Address" id="enterEmailAddress" />
                            </Stack>
                        </Box>
                    </Stack>

                    {/* Order Summary Section */}
                    <Stack
                        flexDirection="column"
                        display="inline-flex"
                        gap="32px"
                        width="300px"
                        sx={{
                            flex: 1, // Adjust relative width
                            height: '100%',
                            overflowY: 'auto', // Add scroll if content overflows
                            background: '#f9f9f9', // Optional background for clarity
                            padding: '20px',
                            borderRadius: '8px',
                        }}
                    >
                        <Stack
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Typography>LCD Monitor</Typography>
                            <Typography>650</Typography>
                        </Stack>

                        <Stack
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Typography>LCD Monitor</Typography>
                            <Typography>650</Typography>
                        </Stack>

                        <Stack
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Typography>Subtotal</Typography>
                            <Typography>1250</Typography>
                        </Stack>
                        <Divider />
                        <Stack
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Typography>Shipping</Typography>
                            <Typography>650</Typography>
                        </Stack>
                        <Divider />

                        <Stack
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Typography>Total</Typography>
                            <Typography>650</Typography>
                        </Stack>

                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Choose Delivery Option</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="Bank" control={<Radio />} label="Bank" />
                                <FormControlLabel value="cashOnDelivery" control={<Radio />} label="Cash On Delivery" />
                            </RadioGroup>
                        </FormControl>

                        <Button
                            sx={{
                                color: 'white',
                                background: '#DB4444',
                                height: '55px',
                                borderRadius: '8px',
                            }}
                        >
                            Place Order
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Container>

    )
}

export default Checkout