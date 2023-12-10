import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    isPaymentIntentLoading: false,
    paymentIntent: null,
    error: null,
    customerInfo: [],
};

export const createPaymentIntent = createAsyncThunk(
    "paymentIntent/createPaymentIntent",
    async (paymentInfo, { dispatch }) => {
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

const paymentSlice = createSlice({
    name: "paymentState",
    initialState,
    reducers: {
        setCustomerInfo: (state, action) => {
            const { product, paymentId, customerInfo } = action.payload;
            const existingCustomerInfo = state.customerInfo.find(
                (info) => info.paymentId === paymentId
            );
            const orderDate = new Date();
            if (existingCustomerInfo) {
                Object.assign(existingCustomerInfo, {
                    ...customerInfo,
                    orderDate,
                });
            } else {
                state.customerInfo.push({
                    product,
                    paymentId,
                    ...customerInfo,
                    orderDate,
                    sent: false,
                });
            }
        },
        markItemAsSent: (state, action) => {
            const paymentId = action.payload;
            const existingCustomerInfo = state.customerInfo.find(info => info.paymentId === paymentId);
            if (existingCustomerInfo) {
                existingCustomerInfo.sent = true;
            }
        },
        resetCustomerInfo: (state) => {
            state.customerInfo = initialState.customerInfo;
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

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["customerInfo"],
};

const persistedReducer = persistReducer(persistConfig, paymentSlice.reducer);

export const {
    setCustomerInfo,
    markItemAsSent,
    resetCustomerInfo,
} = paymentSlice.actions;



export const isPaymentLoading = (state) =>
    state.paymentState.isPaymentIntentLoading;
export const PaymentIntent = (state) => state.paymentState.paymentIntent;
export const PaymentError = (state) => state.paymentState.error;
export const CustomerInfo = (state) => state.paymentState.customerInfo;

export default persistedReducer;
