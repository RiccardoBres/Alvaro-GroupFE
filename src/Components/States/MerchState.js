import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    merch: [],
    isMerchLoading: false,
    error: null,
};

export const createMerch = createAsyncThunk(
    'merch/createMerch',
    async (merch) => {
        const form = new FormData();
        form.append("name", merch.name);
        form.append("image", merch.image);
        form.append("size", merch.size);
        form.append("price", merch.price);
        console.log(...form);
        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/merch/create`, form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(res);
            return res.data;
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
            .addCase(createMerch.pending, (state, action) => {
                state.isMerchLoading = true;
            })
            .addCase(createMerch.fulfilled, (state, action) => {
                state.isMerchLoading = false;
                state.merch = action.payload;
            })
            .addCase(createMerch.rejected, (state) => {
                state.isMerchLoading = false;
                state.error = "Not possible create merch";
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
