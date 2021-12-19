import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        title: null,
        description: [],
        image: null,
        visibility : true
    },
    reducers: {
        setNews: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.image = action.payload.image;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setVisibility: (state, action) => {
            state.visibility = action.payload;
        },
        removeDescription: (state) => {
            state.description = [];
        },
        setImage: (state, action) => {
            state.image = action.payload;
        }
    }
});

export const { setNews, setTitle, setDescription, setImage ,setVisibility,removeDescription } = newsSlice.actions;

export default newsSlice.reducer;

