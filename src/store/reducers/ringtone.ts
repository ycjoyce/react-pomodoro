import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import connect from "../../apis/connect";
import { WorkType } from "../../components/Ringtone/Ringtone";
import { Ringtone } from "../../components/RintoneItem/RintoneItem";
import { convertRingtone } from "../../utils/convert";

export interface RingtoneState {
  ringtones: {
    work: Ringtone[];
    break: Ringtone[];
  };
  checked: {
    work: string;
    break: string;
  };
}

export interface FetchRingtone {
  _id: string;
  title: string;
  audio: string;
  type: WorkType;
}

const initialState: RingtoneState = {
  ringtones: {
    work: [],
    break: [],
  },
  checked: {
    work: "",
    break: "",
  },
};

export const fetchRingtones = createAsyncThunk(
  "ringtones/fetchRingtones",
  async () => {
    try {
      const { data } = await connect({ path: "/ringtones" });
      const workData = (data as FetchRingtone[]).filter(
        (r) => r.type === "work"
      );
      const breakData = (data as FetchRingtone[]).filter(
        (r) => r.type === "break"
      );
      return {
        work: workData.map((r) => convertRingtone(r)),
        break: breakData.map((r) => convertRingtone(r)),
      };
    } catch {
      return {
        work: [],
        break: [],
      };
    }
  }
);

export interface InputData {
  type: WorkType;
  id: string;
}

export const saveCheckedRingtone = createAsyncThunk(
  "ringtones/saveCheckedRingtone",
  async ({ type, id }: InputData) => {
    try {
      const response = await connect({
        path: "/ringtones/me",
        type: "post",
        data: { type, id },
      });
      return response.data;
    } catch {
      return {};
    }
  }
);

export const ringtoneSlice = createSlice({
  name: "ringtones",
  initialState,
  reducers: {
    check(state, action) {
      state.checked = {
        ...state.checked,
        [action.payload.type]: action.payload.id,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRingtones.fulfilled, (state, action) => {
      state.ringtones = { ...action.payload };
    });

    builder.addCase(saveCheckedRingtone.fulfilled, (state, action) => {
      state.checked = { ...action.payload };
    });
  },
});

export const { check } = ringtoneSlice.actions;

export default ringtoneSlice.reducer;
