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
      },
    },
    closeModal: {
      reducer(state) {
        state.isEditing = false;
      },
    },
  },
});

export const { openModal, closeModal } = editingSlice.actions;
export const editingReducer = editingSlice.reducer;
