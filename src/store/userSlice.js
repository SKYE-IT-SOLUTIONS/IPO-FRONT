import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId : '',
        iuli : "SSNB",
        userRoles : []
    },
    reducers: {
        setUserId : (state, action) => {
            state.userId = action.payload;
        },
        setUserLoggedIn : (state, action) => {
            state.iuli = action.payload;
        },
        setUserRole : (state, action) => {
            state.userRoles = action.payload;
        }
    }
});

export const { setUserId, setUserLoggedIn, setUserRole } = userSlice.actions;

export default userSlice.reducer;