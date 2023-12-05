import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formVisible: false,
    formType: '',
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        showForm(state, action) {
            state.formVisible = true;
            state.formType = action.payload;
        },
        hideForm(state) {
            state.formVisible = false;
            state.formType = '';
        },
    },
});

export const { showForm, hideForm } = formSlice.actions;

export default formSlice.reducer;

