import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity:0
    },
    reducers: {
        addItem(state,action) {
            const newItem = action.payload
            
        }
    }
})