import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { IContact } from '../Components/types/contact';

interface ContactsState {
    contacts: IContact[];
}

const initialState: ContactsState = { contacts: [{name: 'harry', number: '2131331', id: nanoid()}]}
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<IContact>) {
      state.contacts.push(action.payload)
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(({id}) => id !== payload);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
