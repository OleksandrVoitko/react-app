// import { combineReducers } from '@reduxjs/toolkit';
// import { createReducer } from '@reduxjs/toolkit';

// import actions from './contactsActions';

import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(contactsOperations.featching.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });
  },
});

// // Creating a reducer for the items array in contacts (fetching all contacts, adding and deleting a contact)
// const items = createReducer([], {
//   [actions.fetchContactsSuccess]: (_, { payload }) =>
//     payload.sort((a, b) => a.name.localeCompare(b.name)),
// });

// // Creating a loading indication reducer
// const loading = createReducer(false, {
//   [actions.fetchContactsRequest]: () => true,
//   [actions.fetchContactsSuccess]: () => false,
//   [actions.fetchContactsError]: () => false,
// });

// // Create an error handling reducer
// const error = createReducer(null, {
//   [actions.fetchContactsError]: (_, { payload }) => payload,
//   [actions.fetchContactsRequest]: () => null,
//   [actions.fetchContactsSuccess]: () => null,
// });

// // Exporting all reducers via combine
// export default combineReducers({ items, loading, error });

export const contactsReducer = contactsSlice.reducer;
