import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  contacts: [],
  isLoading: false,
  isEditing: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(contactsOperations.fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(contactsOperations.fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(contactsOperations.fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(contactsOperations.createContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(contactsOperations.createContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
      .addCase(contactsOperations.createContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(contactsOperations.deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(contactsOperations.deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id,
        );
        state.isLoading = false;
      })
      .addCase(contactsOperations.deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
