import { FetchedTask } from "../store/reducers/task";
import { Record } from "../store/reducers/record";
import { Task } from "../components/TaskItem/TaskItem";
import { Ringtone } from "../components/RintoneItem/RintoneItem";
import { FetchRingtone } from "../store/reducers/ringtone";
import connect from "../apis/connect";

const fetchRecords = async (task: string): Promise<Record[]> => {
  const response = await connect({
    path: `/records/task/${task}`,
  });
  return response.data;
};

export const convertTask = async (task: FetchedTask): Promise<Task> => {
  const records = await fetchRecords(task._id);
  let count = 0;

  records.forEach((record) => (count += record.count));

  return {
    id: task._id,
    title: task.title,
    recordLength: task.length,
    done: task.completed,
    recordCompletedNumber: count,
  };
};

export const dateKey = (date: Date) => {
  return date.toLocaleDateString();
};

export const convertRingtone = (ringtone: FetchRingtone): Ringtone => {
  return {
    id: ringtone._id,
    title: ringtone.title,
    ringtone: ringtone.audio,
  };
};
