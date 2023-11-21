import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    merch: [],
    isMerchLoading: false,
    error: null,
};


export const getMerch = createAsyncThunk(
    'allMerch/getMerch',
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/merchandising`);
            const data = response.data;
            console.log(data);
            return data;
        } catch (error) {
            throw error;
        }
    }
    
)

export const createMerch = createAsyncThunk(
    'merch/createMerch',
    async (merch, { dispatch }) => {
        const form = new FormData();
        form.append("name", merch.name);
        form.append("image", merch.image);
        form.append("size", merch.size);
        form.append("price", merch.price);
        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/merch/create`, form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            const updatedMerchList = await dispatch(getMerch());
            return updatedMerchList;
        } catch (error) {
            throw error;
        }
    }
);


export const resetMerchError = createAction('merch/resetMerchError');

const MerchSlice = createSlice({
    name: 'merchState',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMerch.pending, (state) => {
                state.isMerchLoading = true;
            })
            .addCase(getMerch.fulfilled, (state, action) => {
                state.isMerchLoading = false;
                state.merch = action.payload;
            })
            .addCase(getMerch.rejected, (state) => {
                state.isMerchLoading = false;
                state.error = "Failed to fetch merch";
            })
            .addCase(createMerch.pending, (state) => {
                state.isMerchLoading = true;
            })
            .addCase(createMerch.fulfilled, (state, action) => {
                state.isMerchLoading = false;
                state.merch = action.payload;
            })
            .addCase(createMerch.rejected, (state) => {
                state.isMerchLoading = false;
                state.error = "Failed to create merch";
            })
            .addCase(resetMerchError, (state) => {
                state.error = null;
            });
    },
});


export const allMerch = (state) => state.merchState.merch;
export const isMerchLoading = (state) => state.merchState.isMerchLoading;
export const merchError = (state) => state.merchState.error;

export default MerchSlice.reducer;
