import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const PAGE_LIMIT = 4;

axios.defaults.baseURL = 'https://65f6b8a641d90c1c5e0b3247.mockapi.io/api/';
// axios.defaults.headers.common['Content-Type'] = 'application/json';

// const queryStringByState = state => {
//   let query = `?page=${state.catalog.page + 1}&limit=${PAGE_LIMIT}`;

//   if (state.filter.location) {
//     query += `&location=${state.filter.location}`;
//   }

//   if (state.filter.equipment.length) {
//     state.filter.equipment.forEach(item => {
//       query += `&${item}`;
//     });
//   }

//   if (state.filter.type) {
//     query += `&form=${state.filter.type}`;
//   }

//   console.log(query);
//   return query;
// };

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      // const response = await axios.get(`/advert${queryStringByState(state)}`);
      const response = await axios.get(`/advert`, {
        params: {
          page: state.catalog.page + 1,
          limit: PAGE_LIMIT,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchItem = createAsyncThunk(
  'catalog/fetchOne',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/advert/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
