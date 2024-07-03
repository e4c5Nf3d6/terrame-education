import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const initialState = {
    id: null,
    username: null,
    role: null,
    token: null
};

export const login = createAsyncThunk(
    "user/login", 
    async (values) => {
        const response = await axios.post("https://6288-99-176-5-175.ngrok-free.app/login", values);
        await SecureStore.setItemAsync("userToken", response.data.token)
        return response.data;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.id = action.payload.id;
                state.username = action.payload.username;
                state.role = action.payload.role;
                state.token = action.payload.token;
            })
    }
});

export const selectUser = state => state.user;

export default userSlice.reducer;