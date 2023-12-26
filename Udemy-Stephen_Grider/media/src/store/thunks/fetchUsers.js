import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');
    
    // Dev't only!!!
    await pause(2000);

    return response.data;
})

// Dev't only!!!. This is a promise that slows down
// data fetching to confirm loading is working properly

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}