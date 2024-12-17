import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createCheckout = createAsyncThunk(
    'checkout/createCheckout',
    async (checkoutData, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:5000/checkout', checkoutData);
        return response.data; // Return the response data
      } catch (error) {
        // Handle errors
        return rejectWithValue(error.response?.data || 'Something went wrong');
      }
    }
  );

  const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: {
        checkout: [],
        status: 'idle',
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(createCheckout.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })

        .addCase(createCheckout.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.checkout.push(action.payload); // Add the new category
          })

          .addCase(createCheckout.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
          })
        
    }
  })

  export default checkoutSlice.reducer;