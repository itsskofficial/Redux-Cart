import {configureStore} from red

store = configureStore({
    reducer:{'ui':uiSlice.reducer}
})