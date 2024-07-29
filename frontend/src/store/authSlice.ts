import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AuthState,
  LoginCredentials,
  LoginResponse,
} from "../utils/interfaces";
import { apiClient } from "../api";
import { LOGIN_QUERY } from "../graphql/auth";

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

export const login = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  const variables = {
    email: credentials.email,
    password: credentials.password,
  };

  try {
    const response = await apiClient.post("/", {
      query: LOGIN_QUERY,
      variables,
    });
    console.log(response);
    return response.data.data.login;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false;
          state.token = action.payload.token;
          state.isAuthenticated = true;
        }
      )
      .addCase(login.rejected, (state, action) => {
        console.log(state, action);
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
