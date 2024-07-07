import { createAction, createSlice } from '@reduxjs/toolkit';

export const addFavorites = createAction('favorites/add');
export const deleteFavorites = createAction('favorites/delete');

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addFavorites, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteFavorites, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload);
      });
  },
});

const favoritesReducer = favoritesSlice.reducer;

export default favoritesReducer;
