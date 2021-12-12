import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId : '',
        isUserLoggedIn : false,
        userRole : ''
    },
    reducers: {
        setUserId : (state, action) => {
            state.userId = action.payload;
        },
        setUserLoggedIn : (state, action) => {
            state.isUserLoggedIn = action.payload;
        },
        setUserRole : (state, action) => {
            state.userRole = action.payload;
        }
    }
});

export const { setUserId, setUserLoggedIn, setUserRole } = userSlice.actions;

export default userSlice.reducer;