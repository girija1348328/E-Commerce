import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const createCart = createAsyncThunk(
    'cart/createCart',
    async (cartData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/addToCart', cartData);
            return response.data; // Return the response data
        } catch (error) {
            // Handle errors
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);


export const getCart = createAsyncThunk(
    'cart/getCart',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5000/getCart/${userId}`);
            return response.data; // Return the response data
        } catch (error) {
            // Handle errors
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createCart.pending, (state) => {
            state.status = 'loading',
                state.error = null
        })
            .addCase(createCart.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cart.push(action.payload); // Add the new category
            })
            .addCase(createCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            //
            .addCase(getCart.pending, (state) => {
                state.status = 'loading',
                    state.error = null
            })
                .addCase(getCart.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.cart.push(action.payload); // Add the new category
                })
                .addCase(getCart.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.payload;
                })
    }
})

export default cartSlice.reducer;