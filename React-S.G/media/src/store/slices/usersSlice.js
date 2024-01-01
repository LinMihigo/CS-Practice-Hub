import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';
import { removeUser } from '../thunks/removeUser';

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builders) {
        // fetchUsers.pending === 'users/fetch/pending' (This is its type, can be observed by running console.log(fetchUsers))
        builders.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });

        // When the request is successful, async thunk automatically assigns a type of 'users/fetch/fulfilled'
        // And response.data is automatically loaded to the action.payload property.
        builders.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }); 

        // When the request fails, an error object is automatically created and it's loaded to the payload as well.
        builders.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        });

        builders.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });

        builders.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });

        builders.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builders.addCase(removeUser.pending, (state, action) => {
            state.isLoading = true;
        });

        builders.addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter((user) => {
                return user.id !== action.payload.id;
            })
        });

        builders.addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
})

export const usersReducer = usersSlice.reducer;