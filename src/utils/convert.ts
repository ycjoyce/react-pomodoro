import { FetchedTask } from "../store/reducers/task";
import { Record } from "../store/reducers/record";
import { Task } from "../components/TaskItem/TaskItem";
import { Ringtone } from "../components/RintoneItem/RintoneItem";
import { FetchRingtone } from "../store/reducers/ringtone";
import connect from "../apis/connect";

/**
 * 取得指定案件的所有紀錄
 * @param task
 * @returns
 */
const fetchRecords = async (task: string): Promise<Record[]> => {
  const response = await connect({
    path: `/records/task/${task}`,
  });
  return response.data;
};

/**
 * 將 fetch 回來的案件轉換為所需格式
 * @param task
 * @returns
 */
export const convertTask = async (task: FetchedTask): Promise<Task> => {
  const records = await fetchRecords(task._id);
  const count = records.reduce((a, e) => (a += e.count), 0);
  return {
    id: task._id,
    title: task.title,
    recordLength: task.length,
    done: task.completed,
    recordCompletedNumber: count,
  };
};

/**
 * 將 date 物件轉換為指定格式的字串
 * @param date
 * @returns 作為以 date 作為 key 的 key 值
 */
export const dateKey = (date: Date) => {
  return date.toLocaleDateString();
};

/**
 * 將 fetch 回來的鈴聲轉換為所需格式
 * @param ringtone
 * @returns
 */
export const convertRingtone = (ringtone: FetchRingtone): Ringtone => {
  return {
    id: ringtone._id,
    title: ringtone.title,
    ringtone: ringtone.audio,
  };
};
