import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer, //enables songsSlice to be altered. Changes are stored to the piece of state "songs".
  },
});

export { store, addSong, removeSong, addMovie, removeMovie, reset };
