import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    customerData: [],
    isLoading: null,
    error: null,
    sent: false, 
};

export const getCustomers = createAsyncThunk(
    'allCustomers/getCustomers',
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/customers`);
            const data = await response.data;
            return data;
        } catch (error) {
            console.error("An error occurred:", error);
            throw new Error("Failed to get customer");        }
    }
);

export const createCustomer = createAsyncThunk(
    'customer/createCustomer',
    async (payload) => {
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/customers/create`, payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/customers`);
            const data = response.data;

            return data;
        } catch (error) {
            throw new Error("Failed to create customer");
        }
    }
);


export const setOrderAsSent = createAsyncThunk(
    'customer/setOrderAsSent',
    async (customerId) => {
        try {
            await axios.put(`${process.env.REACT_APP_SERVER_BASE_URL}/${customerId}/markAsSent`);
            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/customers`);
            const data = response.data;
            return data; 
        } catch (error) {
            throw new Error(error);
        }
    }
);

const CustomersSlice = createSlice({
    name: 'customerState',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getCustomers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCustomers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.customerData = action.payload;
            })
            .addCase(getCustomers.rejected, (state) => {
                state.isLoading = false;
                state.error = "Failed to fetch merch";
            })
            .addCase(setOrderAsSent.fulfilled, (state, action) => {
                state.customerData = action.payload; 
            })
    },
});

export const allCustomers = (state) => state.customerState.customerData;
export const isCustomerLoading = (state) => state.customerState.isLoading;
export const customerError = (state) => state.customerState.error;

export const { setSent, setNotSent } = CustomersSlice.actions; 

export default CustomersSlice.reducer;
