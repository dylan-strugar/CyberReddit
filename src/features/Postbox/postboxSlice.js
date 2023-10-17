import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
    title: "This is a CYBER POST TITLE",
    content: "This is cyber content"
}

const postboxSlice = createSlice({
    name: 'postbox',
    initialState,
    reducers: {
    }
})

export default postboxSlice.reducer;