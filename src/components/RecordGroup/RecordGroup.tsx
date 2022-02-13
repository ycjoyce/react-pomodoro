import React, { FC } from "react";
import Record from "../Record/Record";
import StyledRecordGroup from "./RecordGroup.style";

export interface RecordGroupProps {
  length: number;
  completedNumber: number;
}

const RecordGroup: FC<RecordGroupProps> = ({ length, completedNumber }) => {
  /**
   * 渲染紀錄圖示
   * @param length 總長度
   * @param completedNumber 目前完成幾個
   * @returns
   */
  const renderRecords = (length: number, completedNumber: number) => {
    const records = [];
    for (let i = 0; i < length; i++) {
      records.push(<Record key={i} completed={i < completedNumber} />);
    }
    return records;
  };

  return (
    <StyledRecordGroup>
      {renderRecords(length, completedNumber)}
    </StyledRecordGroup>
  );
};

export default RecordGroup;
