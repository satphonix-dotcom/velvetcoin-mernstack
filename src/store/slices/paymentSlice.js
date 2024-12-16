import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const processPayment = createAsyncThunk(
  'payment/processPayment',
  async ({ orderId, paymentDetails }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/payments/process`,
        { orderId, paymentDetails },
        { headers: { 'x-auth-token': localStorage.getItem('token') } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    loading: false,
    error: null,
    transactionHash: null,
    paymentStatus: null
  },
  reducers: {
    clearPaymentState: (state) => {
      state.error = null;
      state.transactionHash = null;
      state.paymentStatus = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(processPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(processPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.transactionHash = action.payload.transactionHash;
        state.paymentStatus = action.payload.status;
      })
      .addCase(processPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Payment processing failed';
      });
  }
});

export const { clearPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;