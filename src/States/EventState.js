import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    event: [],
    isLoading: false,
    error: null,
}

export const getEvents = createAsyncThunk(
    'allEvent/getEvents',
    
       async()=>{
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/events`);
            const data = await response.data;
            return data;    
            
        } catch (error) {
            throw new Error(error); 
        }
    }
)

export const createEvent = createAsyncThunk(
    "event/createEvent",
    async (event, {dispatch}) => {
        const form = new FormData()
        form.append("name", event.name);
        form.append("location", event.location);
        form.append("image", event.image);
        form.append("generalInfo", event.generalInfo);
        form.append("date", event.date);
        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/event/create`, form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            const updatedEventList = await dispatch(getEvents());
            return updatedEventList;
        } catch (error) {
            throw new error()
        }
    }
);

export const resetEventError = createAction('event/resetError');


const EventSlice = createSlice({
    name: 'eventState',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getEvents.pending, (state) => {
            state.isEventLoading = true;
        })
        .addCase(getEvents.fulfilled, (state, action) => {
            state.isEventLoading = false;
            state.event = action.payload;
        })
        .addCase(getEvents.rejected, (state) => {
            state.isEventLoading = false;
            state.error = "Failed to fetch event";
        })
            .addCase(createEvent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.event = action.payload;  
            })
            .addCase(createEvent.rejected, (state) => {
                state.isLoading = false;
                state.error = "Not possible create event"
            })
            .addCase(resetEventError, (state) => {
                state.error = null;
            });
    }
})

export const allEvents = (state) => state.eventState.event;
export const isLoading = (state) => state.eventState.isLoading;
export const eventError = (state) => state.eventState.error;

export default EventSlice.reducer;