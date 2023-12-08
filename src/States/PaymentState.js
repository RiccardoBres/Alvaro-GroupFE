import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isPaymentIntentLoading: false,
    paymentIntent: null,
    error: null,
};

export const createPaymentIntent = createAsyncThunk(
    'paymentIntent/createPaymentIntent',
    async (paymentInfo, { dispatch }) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/create-payment-intent`, paymentInfo);
            return response.data;
        }catch (error) {
            console.error('Error:', error.message); 
            console.log('Error response:', error.response ? error.response.data : null);
            throw error;
        }
    }
  );

const PaymentSlice = createSlice({
        name: 'paymentState',
        initialState,
        extraReducers: (builder) => {
            builder
                .addCase(createPaymentIntent.pending, (state) => {
                    state.isPaymentIntentLoading = true;
                })
                .addCase(createPaymentIntent.fulfilled, (state, action) => {
                    state.isPaymentIntentLoading = false;
                    state.paymentIntent = action.payload;
                })
                .addCase(createPaymentIntent.rejected, (state, action) => {
                    state.isPaymentIntentLoading = false;
                    state.error = action.error.message;
                })
        }
    }
)

export const isPaymentLoading = (state) => state.paymentState.isPaymentIntentLoading;
export const PaymentIntent = (state) => state.paymentState.paymentIntent;
export const PaymentError = (state) => state.paymentState.error;


export default PaymentSlice.reducer;