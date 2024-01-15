import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//GET @ /contacts
const fetchContacts = createAsyncThunk('contacts/featching', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return error;
  }
});

// POST @ /contacts
const createContact = createAsyncThunk('contacts/add', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    return error;
  }
});

// DEL @ /contacts
const deleteContact = createAsyncThunk('contacts/del', async contactId => {
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  } catch (error) {
    return error;
  }
});

// eslint-disable-next-line
export default { fetchContacts, createContact, deleteContact };
