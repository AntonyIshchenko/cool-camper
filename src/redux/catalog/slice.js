import { createAction, createSlice, current } from '@reduxjs/toolkit';
// import { setFilter } from '../filter/slice';
import { fetchCatalog, fetchItem, PAGE_LIMIT } from './operations';

let devRun = true;

const initialState = {
  items: [],
  selected: null,
  page: 0,
  isLastPage: false,
  isLoading: false,
  error: null,
};

export const setSelected = createAction('catalog/setSelected');

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(setFilter, state => {
      //   state.page = 0;
      // })
      .addCase(setSelected, (state, action) => {
        state.selected = action.payload;
      })
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        const currentState = current(state);
        const currentItems = [...currentState.items];

        action.payload.forEach(item => {
          const currentItem = currentItems.find(el => el._id === item._id);
          if (!currentItem) currentItems.push(item);
        });

        state.items = currentItems;
        state.page = currentState.page + 1;
        state.isLastPage = action.payload.length < PAGE_LIMIT;
        state.isLoading = false;
        state.error = null;
        if (devRun) {
          devRun = false;
          state.page = 0;
        }
      })
      .addCase(fetchCatalog.rejected, handleRejected)
      .addCase(fetchItem.pending, handlePending)
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.selected = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchItem.rejected, handleRejected);
  },
});

const catalogReducer = catalogSlice.reducer;

export default catalogReducer;
