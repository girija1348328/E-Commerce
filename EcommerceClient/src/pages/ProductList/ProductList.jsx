import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CircularProgress,
    CardActionArea,
} from "@mui/material";
import { getProductsByCategoryId } from "../../features/products/productSlice";

const ProductList = () => {
    const { categoryId } = useParams(); // Extract category ID from URL
    const dispatch = useDispatch();

    // Access state from Redux
    const { selectedProduct, status, error } = useSelector((state) => state.products);

    useEffect(() => {
        if (categoryId) {
            dispatch(getProductsByCategoryId(categoryId)); // Fetch products by category ID
        }
    }, [dispatch, categoryId]);

    // Handle product click with the passed id
    const handleProductClick = (id) => {
        console.log(`Product clicked with ID: ${id}`);
        // Perform any desired action, e.g., navigate to a details page
    };

    if (status === "loading") {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="70vh"
            >
                <CircularProgress />
            </Box>
        );
    }

    if (status === "failed") {
        return (
            <Box textAlign="center" py={4} px={2}>
                <Typography variant="h6" color="error">
                    Error: {error}
                </Typography>
            </Box>
        );
    }

    if (!selectedProduct?.data?.length) {
        return (
            <Box textAlign="center" py={4} px={2}>
                <Typography variant="h6" color="textSecondary">
                    No products found for this category.
                </Typography>
            </Box>
        );
    }

    return (
        <Box maxWidth="1200px" mx="auto" py={6} px={2}>
            <Grid container spacing={3}>
                {selectedProduct.data.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: 2,
                                transition: "transform 0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: 4,
                                },
                            }}
                        >
                            {/* Use CardActionArea for navigation */}
                            <CardActionArea
                                component={RouterLink}
                                to={`/product/${product.id}`}
                            // onClick={() => handleProductClick(product.id)} // Handle product click
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={
                                        product.image ||
                                        "https://via.placeholder.com/150"
                                    }
                                    alt={product.productName}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        {product.productName}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        mb={2}
                                    >
                                        {product.description}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="success.main"
                                        fontWeight="bold"
                                        mb={2}
                                    >
                                        ₹{product.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#DB4444", // Custom color
                                    color: "white", // Text color
                                    '&:hover': {
                                        backgroundColor: "#B33B3B", // Darker shade on hover
                                    },
                                }}
                                fullWidth
                                onClick={() => handleAddToCart(product.id)}
                            >
                                Add to Cart
                            </Button>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

// Mock function for adding products to cart
const handleAddToCart = (id) => {
    console.log(`Product with ID ${id} added to cart`);
};

export default ProductList;
