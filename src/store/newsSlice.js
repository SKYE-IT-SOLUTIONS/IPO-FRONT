import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        title: "",
        description: [],
        image: "",
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
        setImage: (state, action) => {
            state.image = action.payload;
        }
    }
});

export const { setNews, setTitle, setDescription, setImage } = newsSlice.actions;

export default newsSlice.reducer;

