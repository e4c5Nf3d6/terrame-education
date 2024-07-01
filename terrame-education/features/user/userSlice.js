import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    id: null,
    username: null,
    role: null
};

export const login = createAsyncThunk(
    "user/login", 
    async (values) => {
        const response = await axios.post("https://6288-99-176-5-175.ngrok-free.app/login", values);
        return response.data;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.role = action.payload.role;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.id = action.payload.id;
                state.username = action.payload.username;
                state.role = action.payload.role;
            })
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;