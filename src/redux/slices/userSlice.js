import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    isAuth: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        login: (state, action) => {
            state.isAuth = true;
            state.username = action.payload;
        },
        logout: (state) =>{
            state.isAuth = false;
            state.username = "";
        }
    }
})

export const {login,logout} = userSlice.actions;
export default userSlice.reducer;