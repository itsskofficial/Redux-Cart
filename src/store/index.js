import { configureStore } from @reduxjs/toolkit

store = configureStore({
    reducer:{'ui':uiSlice.reducer}
})