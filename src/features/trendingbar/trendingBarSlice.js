import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
    type: "hot",
    title: "The hottest posts.",
    hot: true,
    new: false,
    best: false,
    top: false
}

const trendingBarSlice = createSlice({
    name: 'postbox',
    initialState,
    reducers: {
        enableHot: (state) => { state.hot = true; state.new = false; state.best = false; state.top = false; state.type = "hot"; state.title = "The hottest posts."},
        enableNew: (state) => { state.hot = false; state.new = true; state.best = false; state.top = false; state.type = "new"; state.title = "The newest posts."},
        enableBest: (state) => { state.hot = false; state.new = false; state.best = true; state.top = false; state.type = "best"; state.title = "The best posts."},
        enableTop: (state) => { state.hot = false; state.new = false; state.best = false; state.top = true; state.type = "top"; state.title = "The top posts."},
    }
})

export default trendingBarSlice.reducer;
export const { enableBest, enableHot, enableNew, enableTop } = trendingBarSlice.actions;
export const trendingBarType = (state) => state.postbox.type;
