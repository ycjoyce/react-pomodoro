import React, { FC } from "react";
import StyledCircle from "../../styles/components/Circle";

export interface RecordProps {
  completed?: boolean;
}

const Record: FC<RecordProps> = ({ completed = false }) => {
  return <StyledCircle active={completed} />;
};

export default Record;
