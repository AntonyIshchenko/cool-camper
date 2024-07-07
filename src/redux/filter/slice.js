import { createAction, createSlice } from '@reduxjs/toolkit';

export const setFilter = createAction('filter/set');

const initialState = {
  location: '',
  equipment: [],
  type: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  extraReducers: builder => {
    builder.addCase(setFilter, (state, action) => {
      state = { ...action.payload };
    });
  },
});

const filterReducer = filterSlice.reducer;

export default filterReducer;
