import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import connect from "../../apis/connect";
import { Task } from "../../components/TaskItem/TaskItem";

export interface Record {
  date: string;
  count: number;
}

export interface FetchedTask {
  _id: string;
  title: string;
  completed: boolean;
  length: number;
  owner: string;
  records: Record[];
}

interface TasksState {
  value: Task[];
}

const initialState: TasksState = {
  value: [],
};

interface inputData {
  title: string;
  length: number;
}

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async ({ title, length }: inputData) => {
    const response = await connect({
      path: "/tasks",
      type: "post",
      data: {
        title,
        length,
      },
    });
    return { ...response.data, records: [] };
  }
);

export const removeTask = createAsyncThunk(
  "tasks/removeTask",
  async (id: string) => {
    await connect({
      path: "/tasks",
      type: "delete",
    });
    return id;
  }
);

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    save(state, action: PayloadAction<Task>) {
      state.value = state.value.concat(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.value = state.value.concat(action.payload);
    });

    builder.addCase(removeTask.fulfilled, (state, action) => {
      state.value = state.value.filter(({ id }) => id !== action.payload);
    });
  },
});

export const { save } = taskSlice.actions;

export default taskSlice.reducer;
