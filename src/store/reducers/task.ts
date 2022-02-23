import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import connect from "../../apis/connect";
import { Task } from "../../components/TaskItem/TaskItem";
import { convertTask } from "../../utils/convert";

export interface FetchedTask {
  _id: string;
  title: string;
  completed: boolean;
  length: number;
  owner: string;
}

interface TasksState {
  value: Task[];
}

const initialState: TasksState = {
  value: [],
};

interface InputData {
  id?: string;
  title?: string;
  length?: number;
  completed?: boolean;
}

/**
 * 建立案件
 */
export const createTask = createAsyncThunk(
  "tasks/createTask",
  async ({ title, length }: InputData) => {
    const response = await connect({
      path: "/tasks",
      type: "post",
      data: {
        title,
        length,
      },
    });
    const task = await convertTask(response.data);
    return task;
  }
);

/**
 * 更新案件
 */
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, title, length, completed }: InputData) => {
    const response = await connect({
      path: `/tasks/${id}`,
      type: "patch",
      data: {
        title,
        length,
        completed,
      },
    });
    const task = await convertTask(response.data);
    return task;
  }
);

/**
 * 移除案件
 */
export const removeTask = createAsyncThunk(
  "tasks/removeTask",
  async (id: string) => {
    await connect({
      path: `/tasks/${id}`,
      type: "delete",
    });
    return id;
  }
);

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    /**
     * 儲存案件
     * @param state
     * @param action
     */
    save(state, action: PayloadAction<Task>) {
      state.value = state.value.concat(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.value = state.value.concat(action.payload);
    });

    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.value = state.value.map((task) => {
        if (task.id === action.payload.id) {
          task = { ...action.payload };
        }
        return task;
      });
    });

    builder.addCase(removeTask.fulfilled, (state, action) => {
      state.value = state.value.filter(({ id }) => id !== action.payload);
    });
  },
});

export const { save } = taskSlice.actions;

export default taskSlice.reducer;
