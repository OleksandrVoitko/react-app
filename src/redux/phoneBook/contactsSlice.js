import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  contacts: [1, 2],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(
      contactsOperations.fetchContacts.fulfilled,
      (state, action) => {
        state.contacts = action.payload;
      },
    );
  },
});

export const contactsReducer = contactsSlice.reducer;
