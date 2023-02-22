import { createSlice } from "@reduxjs/toolkit";

uiSlice=createSlice({
    name:'ui',
    initialState: { showCart: false },
    reducers: {
        toggleCart
    }
})