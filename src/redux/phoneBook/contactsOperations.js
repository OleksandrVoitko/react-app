import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//GET @ /contacts
const fetchContacts = createAsyncThunk('contacts/featching', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

// eslint-disable-next-line
export default { fetchContacts };
