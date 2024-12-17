// features/categories/categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk for creating categories
export const createCategories = createAsyncThunk(
  'categories/createCategories',
  async (categoryData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/createCategories', categoryData);
      return response.data; // Return the response data
    } catch (error) {
      // Handle errors
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get('http://localhost:5000/getCategories');
        return response.data; // Return the response data
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
      }
    }
  );

// Create the slice
const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCategories.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories.push(action.payload); // Add the new category
      })
      .addCase(createCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Handle getCategories lifecycle
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload; // Set fetched categories
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;