import { useEffect } from "react";
import { DeviceUUID } from "device-uuid";
import connect from "../apis/connect";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { loginAndFetchToken } from "../store/reducers/token";
import { save, FetchedTask } from "../store/reducers/task";
import { convertTask } from "../utils/convert";
import { fetchRingtones, check } from "../store/reducers/ringtone";
import { WorkType } from "../components/Ringtone/Ringtone";

const useInit = () => {
  const token = useAppSelector((state) => state.token.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 登入並取得 token
    dispatch(loginAndFetchToken(new DeviceUUID().get()));
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      return;
    }

    // 取得 tasks
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

    // 取得鈴聲
    dispatch(fetchRingtones());

    // 設定使用者鈴聲
    connect({
      path: "/ringtones/me",
    }).then((res) => {
      const { data } = res;
      Object.entries(data).forEach(([type, id]) => {
        const ringtoneType = type as WorkType;
        const ringtoneId = id as string;
        dispatch(check({ type: ringtoneType, id: ringtoneId }));
      });
    });
  }, [token, dispatch]);
};

export default useInit;
