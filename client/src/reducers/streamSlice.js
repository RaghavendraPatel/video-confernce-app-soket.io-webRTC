import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainStream: null,
    streams: [],
    yourStream: null,
    users : [],
    messages : [],
};

const streamSlice = createSlice({
    name: "stream",
    initialState,
    reducers: {
        setMainStream: (state, action) => {
            state.mainStream = action.payload;
        },
        setStreams: (state, action) => {
            state.streams = action.payload;
        },
        setYourStream: (state, action) => {
            state.yourStream = action.payload;
        },
    },
});

export const { setMainStream, setStreams, setYourStream } = streamSlice.actions;
export default streamSlice.reducer;