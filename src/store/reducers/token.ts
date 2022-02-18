import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import login from "../../utils/login";

interface TokenState {
  value: string;
}

const initialState: TokenState = {
  value: "",
};

export const loginAndFetchToken = createAsyncThunk(
  "token/loginAndFetchToken",
  async (device: string) => {
    return await login(device);
  }
);

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    save(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    remove(state) {
      state.value = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(loginAndFetchToken.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { save, remove } = tokenSlice.actions;

export default tokenSlice.reducer;
