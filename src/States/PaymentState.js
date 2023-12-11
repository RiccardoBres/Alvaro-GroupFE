import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isPaymentIntentLoading: false,
    paymentIntent: null,
    error: null,
};

export const createPaymentIntent = createAsyncThunk(
    "paymentIntent/createPaymentIntent",
    async (paymentInfo) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_BASE_URL}/create-payment-intent`,
                paymentInfo
            );
            return response.data;
        } catch (error) {
            console.error("Error:", error.message);
            console.log(
                "Error response:",
                error.response ? error.response.data : null
            );
            throw error;
        }
    }
);

export const paymentSlice = createSlice({
    name: "paymentState",
    initialState,
    reducers: {
        resetPaymentState: (state) => {
            state.isPaymentIntentLoading = initialState.isPaymentIntentLoading;
            state.paymentIntent = initialState.paymentIntent;
            state.error = initialState.error;
        },
    },
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
            });
    },
});

export const isPaymentLoading = (state) => state.paymentState.isPaymentIntentLoading;
export const PaymentIntent = (state) => state.paymentState.paymentIntent;
export const PaymentError = (state) => state.paymentState.error;

export const {
    resetPaymentState,
} = paymentSlice.actions;

export default paymentSlice.reducer;
