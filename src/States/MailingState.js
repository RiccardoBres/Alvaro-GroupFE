import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    email: [],
    isLoading: false,
    error: null
}

export const getEmails = createAsyncThunk(
    'emails/getEmails',
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/mailing-list`);
            return response.data;
        } catch (error) {
            console.error("An error occurred while fetching emails:", error);
            throw error;
        }
    }
)


export const addToMailing = createAsyncThunk(
    'newEmail/addNewEmail',
    async (email) => {
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/mailing-list/subscribe`, email, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/mailing-list`);
            const data = response.data;
            return data;
        } catch (error) {
            throw new Error("Failed to create email");
        }
    }
)

const CustomersSlice = createSlice({
    name: 'mailingState',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getEmails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEmails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload;
            })
            .addCase(getEmails.rejected, (state) => {
                state.isLoading = false;
                state.error = "Failed to fetch emails";
            })
    },
});

export const allEmail = (state) => state.mailingState.email;
export const isMailingLoading = (state) => state.mailingState.isLoading;
export const mailingError = (state) => state.mailingState.error;

export default CustomersSlice.reducer; 