import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState: { showCart: false, showNotification: null },
    reducers: {
        toggle(state) {
            state.showCart=!state.showCart
        }
        
    }
})

export const uiActions = uiSlice.actions
export default uiSlice