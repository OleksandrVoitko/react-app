import { createAction } from '@reduxjs/toolkit';

// Creating actions to get a list of contacts
const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

// eslint-disable-next-line
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};
