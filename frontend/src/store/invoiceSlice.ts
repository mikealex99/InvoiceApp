import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";
import { apiClient } from "../api";
import { Invoice, InvoiceState } from "../utils/interfaces";
import { GET_INVOICES } from "../graphql/invoices";

const initialState: InvoiceState = {
  invoices: [],
  loading: false,
  error: null,
};

export const fetchInvoices = createAsyncThunk<
  Invoice[],
  { page: number; pageSize: number },
  { rejectValue: SerializedError }
>("invoices/fetchInvoices", async ({ page, pageSize }, { rejectWithValue }) => {
  try {
    const response = await apiClient.post("", {
      query: GET_INVOICES,
      variables: { page, pageSize },
    });
    return response.data.data.invoices;
  } catch (error) {
    const serializedError: SerializedError = {
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
    return rejectWithValue(serializedError);
  }
});

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchInvoices.fulfilled,
        (state, action: PayloadAction<Invoice[]>) => {
          state.loading = false;
          state.invoices = action.payload;
        }
      )
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch invoices";
      });
  },
});

export default invoiceSlice.reducer;
