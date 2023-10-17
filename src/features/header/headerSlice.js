import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
    title: "This is a CYBER REDDIT TITLE"
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
    }
})

export default headerSlice.reducer;