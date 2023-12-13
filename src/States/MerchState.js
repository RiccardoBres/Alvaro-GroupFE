import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    merch: [],
    isMerchLoading: false,
    error: null,
    selectedMerch: [],
};


export const getMerch = createAsyncThunk(
    'allMerch/getMerch',
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/merchandising`);
            const data = response.data;
            return data;
        } catch (error) {
            throw error;
        }
    }
)
export const getMerchById = createAsyncThunk(
    'merch/getMerchById',
    async (id) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/merchandising/${id}`);
            return response.data.merchById;
        } catch (error) {
            throw error;
        }
    }
);


export const createMerch = createAsyncThunk(
    'merch/createMerch',
    async (merch, { dispatch }) => {
        const form = new FormData();
        form.append("name", merch.name);
        form.append("image", merch.image);
        form.append("size", merch.size);
        form.append("price", merch.price);
        form.append("description", merch.description);
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
export const resetMerch = createAction('merch/resetMerch');

const MerchSlice = createSlice({
    name: 'merchState',
    initialState,
    reducers: {
        resetMerch: (state) => {
            return initialState
        },
    },
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
            })
            .addCase(getMerchById.pending, (state) => {
                state.isMerchLoading = true;
            })
            .addCase(getMerchById.fulfilled, (state, action) => {
                state.isMerchLoading = false;
                state.selectedMerch = action.payload;
            })
            .addCase(getMerchById.rejected, (state) => {
                state.isMerchLoading = false;
                state.error = "Failed to fetch merch by ID";
            });

    },
});


export const allMerch = (state) => state.merchState.merch;
export const isMerchLoading = (state) => state.merchState.isMerchLoading;
export const merchError = (state) => state.merchState.error;
export const selectedMerch = (state) => state.merchState.selectedMerch;

export default MerchSlice.reducer;
