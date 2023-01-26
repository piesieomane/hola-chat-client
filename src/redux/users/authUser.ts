import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_USER = 'USER/LOGIN_USER';
const LOGOUT_USER = 'USER/LOGOUT_USER';
const SIGNUP_USER = 'USER/SIGNUP_USER';

const api = 'https://localhost:8000/';

const initialState = {
  user: null,
  isLogin: false,
  isSignup: false,
  isLogout: false,
};
