
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  lastMessageTimestamp: 0,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = messageSlice.actions;

export default messageSlice.reducer;
