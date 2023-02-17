import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, { payload }) {
      return payload;
    },
  },
});
export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;