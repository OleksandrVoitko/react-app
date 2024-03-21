import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  number: '',
  isEditing: false,
};

const editingSlice = createSlice({
  name: 'editing',
  initialState,
  reducers: {
    openModal: {
      reducer(state) {
        state.isEditing = true;
        state.id = '';
        state.name = '';
        state.number = '';
      },
    },
    closeModal: {
      reducer(state) {
        state.isEditing = false;
        state.id = '';
        state.name = '';
        state.number = '';
      },
    },
    addContactForEdit: {
      reducer(state, action) {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.number = action.payload.number;
      },
      prepare(id, name, number) {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },
  },
});

export const { openModal, closeModal, addContactForEdit } =
  editingSlice.actions;
export const editingReducer = editingSlice.reducer;
