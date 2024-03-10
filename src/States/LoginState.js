import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isAuthenticated: false,
    user: [],
    error: null,
    isLoading: false
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (loginFormData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/login`, loginFormData);
            const token = response.data.token;
            localStorage.setItem('userLoggedIn', JSON.stringify(token));
            return token;
        } catch (error) {
            console.log(error.response.data.message);
            return rejectWithValue(error.response.data.message);
        }
    }
);


const authSlice = createSlice({
    initialState,
    name: 'loginState',
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isAuthenticated = false;
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
                state.isLoading = false
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.payload;
                state.isLoading = false
            });
    },
});


export const isAuthenticated = (state) => state.loginState.isAuthenticated;
export const LoginUser = (state) => state.loginState.user;
export const loginLoading = (state) => state.loginState.isLoading;
export const loginError = (state) => state.loginState.error;

export default authSlice.reducer;