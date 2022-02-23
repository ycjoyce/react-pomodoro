import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import login from "../../utils/login";

interface TokenState {
  value: string;
}

const initialState: TokenState = {
  value: "",
};

/**
 * 登入並取得 token
 */
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
    /**
     * 儲存 token
     * @param state
     * @param action
     */
    save(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    /**
     * 移除 token
     * @param state
     */
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
