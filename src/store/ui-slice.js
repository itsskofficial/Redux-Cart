import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState: { showCart: false, notification: null },
    reducers: {
        toggle(state) {
            state.showCart=!state.showCart
        }

        notification

    }
})

export const uiActions = uiSlice.actions
export default uiSlice