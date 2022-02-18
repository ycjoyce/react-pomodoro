import { useEffect } from "react";
import { DeviceUUID } from "device-uuid";
import connect from "../apis/connect";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { loginAndFetchToken } from "../store/reducers/token";
import { save, FetchedTask } from "../store/reducers/task";
import { convertTask } from "../utils/convert";

const useInit = () => {
  const token = useAppSelector((state) => state.token.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loginAndFetchToken(new DeviceUUID().get()));
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      return;
    }
    connect({ path: "/tasks" })
      .then(({ data }) => {
        return Promise.all(data.map((task: FetchedTask) => convertTask(task)));
      })
      .then((tasks) => {
        tasks.forEach((task) => {
          dispatch(save(task));
        });
      })
      .catch((e) => console.log(e));
  }, [token, dispatch]);
};

export default useInit;
