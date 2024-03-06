import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

// POST @ /users/signup
// body: {name, email, password}
// after successful registration, - add the token to the HTTP-header
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

// POST @ /users/login
// body: {email, password}
// after successful registration, - add the token to the HTTP-header
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

// POST @ /users/logout
//
// headers: Autorization: Bearer token
// after a successful exit, we delete the token from the HTTP-header
const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

// GET @ /user/current
// headers: Autorization: Bearer token
// 1. We take the token from the state through getState
// 2. If there is no token - exit
// 3. If there is a token - add it to the HTTP-header and perform the operation
const fetchCurrentUser = createAsyncThunk(
  'auth/reftesh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

// eslint-disable-next-line
export default { register, logIn, logOut, fetchCurrentUser };
