import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./reducers/token";
import taskReducer from "./reducers/task";
import recordReducer from "./reducers/record";

const store = configureStore({
  reducer: {
    token: tokenReducer,
    tasks: taskReducer,
    records: recordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
