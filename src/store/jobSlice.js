import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    title: "",
    position: "",
    description: "",
    specifications: [],
    qualifications: [],
    experience: [],
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },

    setPosition: (state, action) => {
      state.position = action.position;
    },

    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setSpecifications: (state, action) => {
      state.specifications = [...state.specifications, action.payload];
    },
    setQualifications: (state, action) => {
      state.qualifications = [...state.qualifications, action.payload];
    },
    setExperience: (state, action) => {
      state.experience = [...state.experience, action.payload];
    },
    removeDataArray: (state) => {
      state.specifications = [];
      state.qualifications = [];
      state.experience = [];
    },
  },
});

export const { setTitle,setPosition,setDescription,setSpecifications,setQualifications,setExperience,removeDataArray} = jobSlice.actions;

export default jobSlice.reducer;
