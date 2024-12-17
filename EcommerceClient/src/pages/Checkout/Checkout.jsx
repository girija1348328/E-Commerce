import React, { useState, useEffect } from 'react';
import { Container, Box, Stack, Breadcrumbs, Typography, Link, Divider, Rating, Button, TextField, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getCart } from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {createCheckout} from '../../features/checkout/checkout'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Checkout = () => {
    const { cartId } = useParams()
    const dispatch = useDispatch()
    const userId = localStorage.getItem("userId")
    console.log(userId, "Here is the userid..!")
    const [cartData, setCartData] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    const [totalValueWithShipping, setTotalValueWithSh] = useState(0);
    const [deliveryOption, setDeliveryOption] = useState('cashOnDelivery');
    const navigate = useNavigate();
    const [address, setAddress] = useState({
        "userId": userId,
        "name": "",
        "companyName": "",
        "address": "",
        "apartment": "",
        "town": "",
        "phoneNumber": "",
        "email": "",
        "deliveryOptions": deliveryOption

    });
    const handleDeliveryOptionChange = (event) => {
        setDeliveryOption(event.target.value);
    };

    const handlePlaceOrder = async () => {
        const res = await dispatch(createCheckout(address));
        if (res?.payload?.status === true) {
            // Show SweetAlert if the order is successfully placed
            Swal.fire({
                title: 'Success!',
                text: 'Your order has been placed.',
                icon: 'success',
                confirmButtonText: 'OK',
            });
            setTimeout(()=>{
                navigate('/')
            },3000)
            
        } else {
            // Handle failure (optional)
            Swal.fire({
                title: 'Error!',
                text: 'There was an issue placing your order. Please try again.',
                icon: 'error',
                confirmButtonText: 'Retry',
            });
        }
    };

    useEffect(() => {
        const total = cartData.reduce((acc, row) => {
            return acc + row?.product?.price * row?.quantity;
        }, 0);
        setTotalValue(total);
        setTotalValueWithSh(total + 50)
    }, [cartData, dispatch]);


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

    const handleCart = async () => {
        const res = await dispatch(getCart(userId))
        setCartData(res?.payload?.data)
    }
    useEffect(() => {
        handleCart()
    }, [])

    const handleAddressChange = (e) => {
        const { id, value } = e.target;
        setAddress((prevData) => ({
            ...prevData,
            [id]: value
        }))

    }

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
                                <TextField fullWidth label="Enter First Name" value={address.name} onChange={handleAddressChange} id="name" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Company Name</Typography>
                                <TextField fullWidth label="Enter Company Name" onChange={handleAddressChange} id="companyName" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Street Address</Typography>
                                <TextField fullWidth label="Enter Street" onChange={handleAddressChange} id="address" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Apartment, Floor, etc.</Typography>
                                <TextField fullWidth label="Enter Apartment" onChange={handleAddressChange} id="apartment" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Town/City</Typography>
                                <TextField fullWidth label="Enter Town Name" onChange={handleAddressChange} id="town" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Phone Number*</Typography>
                                <TextField fullWidth label="Enter Phone Number" onChange={handleAddressChange} id="phoneNumber" />
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="column" gap="8px">
                                <Typography>Email Address*</Typography>
                                <TextField fullWidth label="Enter Email Address" onChange={handleAddressChange} id="email" />
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
                        {cartData && cartData.map((data) => (
                            <Stack
                                display="flex"
                                flexDirection="row"
                                justifyContent="space-between"
                            >
                                <Typography>{data?.product?.productName}</Typography>
                                <Typography>{data?.product?.price * data?.quantity}</Typography>
                            </Stack>
                        ))}


                        {/* <Stack
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Typography>LCD Monitor</Typography>
                            <Typography>650</Typography>
                        </Stack> */}

                        <Stack
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Typography>Subtotal</Typography>
                            <Typography>{totalValue}</Typography>
                        </Stack>
                        <Divider />
                        <Stack
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Typography>Shipping</Typography>
                            <Typography>50</Typography>
                        </Stack>
                        <Divider />

                        <Stack
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Typography>Total</Typography>
                            <Typography>{totalValue + 50}</Typography>
                        </Stack>

                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Choose Delivery Option</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={deliveryOption}  // Bind value to the state
                                onChange={handleDeliveryOptionChange}  // Update state on change
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
                            onClick={handlePlaceOrder}
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