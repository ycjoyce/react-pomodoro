import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./reducers/token";
import taskReducer from "./reducers/task";

const store = configureStore({
  reducer: {
    token: tokenReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
