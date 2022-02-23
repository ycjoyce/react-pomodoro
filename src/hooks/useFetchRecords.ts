import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchRecordsOfDate, Record } from "../store/reducers/record";
import { dateKey } from "../utils/convert";

const useFetchRecords = () => {
  const dispatch = useAppDispatch();
  const { token, records } = useAppSelector((state) => ({
    token: state.token.value,
    records: state.records.dates,
  }));

  /**
   * 計算紀錄總和
   * @param data
   * @returns
   */
  const sum = (data: Record[] = []) => {
    return data.reduce((a, e) => (a += e.count), 0);
  };

  /**
   * 計算指定日期的紀錄總和
   */
  const countRecordsOfDate = useCallback(
    async (date: Date) => {
      if (!token) {
        return 0;
      }
      // 如果還沒有這一天的紀錄，就先 fetch 這天的紀錄資料
      if (!records[dateKey(date)]) {
        dispatch(fetchRecordsOfDate(date));
      }
      return sum(records[dateKey(date)] || []);
    },
    [dispatch, records, token]
  );

  return countRecordsOfDate;
};

export default useFetchRecords;
