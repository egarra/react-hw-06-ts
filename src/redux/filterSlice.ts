import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilter } from '../types/filter';

const initialState: IFilter = {
  filter: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact(state, { payload }: PayloadAction<{ filter: string }> ) {
      return payload;
    },
  },
});
export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;