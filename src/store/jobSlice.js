import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    title: null,
    position: null,
    description: null,
    specifications: [],
    qualifications: [],
    experience: [],
    salary : null,
    deadline : null
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },

    setPosition: (state, action) => {
      state.position = action.payload;
    },

    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setSalary: (state, action) => {
      state.salary = action.payload;
    },
    setDeadline: (state, action) => {
      state.deadline = action.payload;
    },
    setSpecifications: (state, action) => {
      state.specifications = action.payload;
    },
    setQualifications: (state, action) => {
      state.qualifications = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    removeDataArray: (state) => {
      state.title=null;
      state.position=null;
      state.description=null;
      state.salary=null;
      state.deadline=null;
      state.specifications = [];
      state.qualifications = [];
      state.experience = [];
    },
  },
});

export const { setTitle,setPosition,setDescription,setDeadline,setSalary,setSpecifications,setQualifications,setExperience,removeDataArray} = jobSlice.actions;

export default jobSlice.reducer;
