import React, { useEffect, useState } from 'react';
import {
    Container,
    Box,
    Stack,
    Breadcrumbs,
    Typography,
    Link,
    Button,
    Divider,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCart } from '../../features/cart/cartSlice'

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function createData(Product, Price, Quantity, Subtotal) {
    return { Product, Price, Quantity, Subtotal };
}

const rows = [
    createData('Tablet', 159, 6, 24),
    createData('Ear buds', 237, 6, 37),
    createData('watch', 262, 16.0, 24),
    createData('Colgate', 305, 3.7, 67),
    createData('BookNovel', 356, 16.0, 49),
];

const Cart = () => {
    const dispatch = useDispatch()
    const { cartId, userId } = useParams()
    const [cartData, setCartData] = useState([])
    const [totalValue, setTotalValue] = useState(0);
    const navigate = useNavigate()

    const handleCart = async () => {
        const res = await dispatch(getCart(userId))
        setCartData(res?.payload?.data)
    }
    useEffect(() => {
        handleCart()
    }, [])

    useEffect(() => {
        const total = cartData.reduce((acc, row) => {
            return acc + row?.product?.price * row?.quantity;
        }, 0);
        setTotalValue(total);
        
    }, [cartData,dispatch]);

    const handleProcced = () =>{
        navigate(`/checkout/${cartId}/${userId}`)
    }

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
        </Typography>,
    ];

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateAreas: `
                        "row1Section1 row1Section1"
                        "row2Section1 row2Section1"
                        "row3Section1 row3Section1"
                        "row4Section1 row4Section1"
                    `,
                    gridTemplateRows: 'auto 2fr 0fr ',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 4,
                    marginTop: '20px',
                    height: '100%',
                    width: '100%',
                }}
            >
                {/* Breadcrumbs Section */}
                <Stack sx={{ gridArea: 'row1Section1' }}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>

                {/* Example: Add content to row2Section1 */}
                <Box sx={{ gridArea: 'row2Section1', backgroundColor: 'lightgray', padding: 2 }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Subtotal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cartData.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row?.product?.productName}
                                        </TableCell>
                                        <TableCell align="right">{row?.product?.price}</TableCell>
                                        <TableCell align="right">{row?.quantity}</TableCell>
                                        <TableCell align="right">{row?.product?.price * row?.quantity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Box
                    sx={{ gridArea: 'row3Section1' }}
                    display='flex'
                    justifyContent='space-between'
                >
                    <Button
                        sx={{
                            borderRadius: '4px',
                            border: '1px solid rgba(0, 0, 0, 0.50)',
                            color: 'black', // Set the text color here directly
                        }}
                    >
                        <Typography
                            sx={{ color: 'black' }}
                        >
                            Return To Shop
                        </Typography>
                    </Button>

                    <Button
                        sx={{
                            borderRadius: '4px',
                            border: '1px solid rgba(0, 0, 0, 0.50)',
                            color: 'black', // Set the text color here directly
                        }}
                    >
                        <Typography
                            sx={{ color: 'black' }}
                        >
                            Update Cart
                        </Typography>
                    </Button>
                </Box>

                <Box
                    sx={{ gridArea: 'row4Section1', display: 'flex', justifyContent: 'space-between' }}
                >
                    <Box
                        sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}
                    >
                        <TextField id="outlined-basic" label="Coupon Code" variant="outlined" />
                        <Button
                            sx={{ color: "white", background: '#DB4444', height: '55px' }}
                        >
                            Apply Coupon
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            width: '470px',
                            height: '324px',
                            padding: '20px',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                            Cart Total
                        </Typography>
                        <Typography sx={{ fontSize: '16px' }}>
                            Sub Total: ${totalValue}
                        </Typography>
                        <Divider />
                        <Typography sx={{ fontSize: '16px' }}>Shipping: Free</Typography>
                        <Divider />
                        <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                            Total: ${totalValue}
                        </Typography>

                        <Button
                            sx={{
                                color: 'white',
                                background: '#DB4444',
                                height: '55px',
                                '&:hover': { background: '#B33B3B' },
                            }}
                            onClick={handleProcced}
                        >
                            Proceed to Checkout
                        </Button>
                    </Box>
                </Box>


            </Box>
        </Container>
    );
};

export default Cart;
