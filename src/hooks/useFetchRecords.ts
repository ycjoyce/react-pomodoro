import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchRecordsOfDate, Record } from "../store/reducers/record";

const useFetchRecords = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.token.value);
  const records = useAppSelector((state) => state.records.dates);

  const sum = (data: Record[] = []) => {
    let count = 0;
    data.forEach((record) => (count += record.count));
    return count;
  };

  const countRecordsOfDate = async (date: Date) => {
    if (!token) {
      return 0;
    }
    if (!records[date.toLocaleDateString()]) {
      dispatch(fetchRecordsOfDate(date));
    }
    return sum(records[date.toLocaleDateString()] || []);
  };

  return countRecordsOfDate;
};

export default useFetchRecords;
