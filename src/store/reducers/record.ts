import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import connect from "../../apis/connect";
import { dateKey } from "../../utils/convert";

export interface Record {
  date: string;
  count: number;
  task: string;
}

interface RecordState {
  dates: {
    [date: string]: Record[];
  };
  loading: "idle" | "pending";
  currentRequestId: string | undefined;
  error: any;
}

export const fetchRecordsOfDate = createAsyncThunk(
  "records/fetchRecordsOfDate",
  async (date: Date, { getState, requestId }) => {
    const { currentRequestId, loading } = (
      getState() as { records: RecordState }
    ).records;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (loading !== "pending" || requestId !== currentRequestId) {
      return { date: dateKey(date), records: [] };
    }

    const response = await connect({
      path: `/records?date=${year}-${month}-${day}`,
    });

    return { date: dateKey(date), records: response.data };
  }
);

const initialState: RecordState = {
  dates: {},
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    setDate(state, action) {
      state.dates = {
        ...state.dates,
        [dateKey(action.payload.date)]: [],
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRecordsOfDate.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchRecordsOfDate.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.dates = {
            ...state.dates,
            [action.payload.date]: action.payload.records,
          };
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchRecordsOfDate.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export default recordSlice.reducer;
