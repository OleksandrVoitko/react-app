const getContacts = state => state.contacts.contacts;
const getIsLoading = state => state.contacts.isLoading;
const getIsEditing = state => state.contacts.isEditing;
const getError = state => state.contacts.error;

// eslint-disable-next-line
export default {
  getContacts,
  getIsLoading,
  getIsEditing,
  getError,
};
