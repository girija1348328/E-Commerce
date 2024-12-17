import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const SignUp = createAsyncThunk('SignUp',
    async (data,{rejectWithValue}) =>{
        try {
            const response = await axios.post('http://localhost:5000/register',data);
            return response.data;
        } catch(error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');

        }
    }
)

const signUpSlice = createSlice({
    name:'signup',
    initialState:{
        signup:[],
        status:'idle',
        error:null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(SignUp.pending,(state)=>{
            state.status = "loading";
            state.error = null;
        })
        .addCase(SignUp.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.signup.push(action);
           
        })
        .addCase(SignUp.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })
    }
})

export default signUpSlice.reducer;