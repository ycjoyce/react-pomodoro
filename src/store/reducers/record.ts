import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
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

const initialState: RecordState = {
  dates: {},
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

/**
 * 取得指定日期的紀錄
 */
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

export const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    /**
     * 儲存紀錄至指定日期
     * @param state
     * @param action
     */
    saveRecordOfDate(
      state,
      action: PayloadAction<{ date: string; record: Record }>
    ) {
      const { date, record } = action.payload;
      let records: Record[] = [];

      if (state.dates[date]) {
        records = records.concat(state.dates[date]);
      }

      state.dates = {
        ...state.dates,
        [date]: [...records, record],
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

export const { saveRecordOfDate } = recordSlice.actions;

export default recordSlice.reducer;
