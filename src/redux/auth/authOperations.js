import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

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
const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

// POST @ /users/login
// body: {email, password}
// after successful registration, - add the token to the HTTP-header
const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

// POST @ /users/logout
// headers: Autorization: Bearer token
// after a successful exit, we delete the token from the HTTP-header
const logOut = createAsyncThunk("auth/logout", async (credentials) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

const authOperations = { register, logIn, logOut };

export default authOperations;
