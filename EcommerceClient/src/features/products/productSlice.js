import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all products
export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:5000/getProduct');
            return response.data; // Return all products
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong while fetching all products.');
        }
    }
);

// Fetch products by category ID
export const getProductsByCategoryId = createAsyncThunk(
    'products/getProductsByCategoryId',
    async (categoryId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5000/getProduct?categoryId=${categoryId}`);
            return response.data; // Return category-specific products
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong while fetching products by category.');
        }
    }
);

// Fetch a single product by ID
export const getProductById = createAsyncThunk(
    'products/getProductById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5000/getProduct?id=${id}`);
            return response.data; // Return product details
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong while fetching the product.');
        }
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [], // List of all products
        selectedProduct: null, // Details of a single product or category
        status: 'idle', // Request status
        error: null, // Error messages
    },
    reducers: {}, // Currently no direct reducers
    extraReducers: (builder) => {
        builder
            // Handle getProducts (All Products)
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload; // Store all products
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload; // Capture error message
            })

            // Handle getProductsByCategoryId (Category-Specific Products)
            .addCase(getProductsByCategoryId.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getProductsByCategoryId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedProduct = action.payload; // Store products for the specific category
            })
            .addCase(getProductsByCategoryId.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload; // Capture error message
            })

            // Handle getProductById (Single Product Details)
            .addCase(getProductById.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedProduct = action.payload; // Store the specific product details
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload; // Capture error message
            });
    },
});

export default productSlice.reducer;
