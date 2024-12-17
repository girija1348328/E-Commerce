import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for login
export const createLogin = createAsyncThunk(
  'loginUser', // Action prefix (ensure consistent naming)
  async (data, { rejectWithValue }) => {
    console.log('Data received in thunk:', data); // Debug log
    try {
      const response = await axios.post('http://localhost:5000/login', data);
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const loginSlice = createSlice({
  name: 'loginUser', // Slice name matches the prefix in the thunk
  initialState: {
    login: [], // To store login data
    status: 'idle', // Status for the async thunk
    error: null, // Error message
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLogin.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear previous errors
      })
      .addCase(createLogin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.login.push(action.payload); // Store login data
      })
      .addCase(createLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Store error message
      });
  },
});

export default loginSlice.reducer;
