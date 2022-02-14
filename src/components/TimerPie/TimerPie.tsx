import React, { FC, useState, useEffect } from "react";
import Pie from "../Pie/Pie";
import Timer from "../Timer/Timer";
import { StyledTimerBox } from "./TimerPie.style";

export interface TimerPieProps {
  totalTime: number;
  passedTime: number;
}

const TimerPie: FC<TimerPieProps> = ({ totalTime, passedTime }) => {
  const [convertTotalTime, setConvertTotalTime] = useState(totalTime);
  const [convertPassedTime, setConvertPassedTime] = useState(passedTime);
  const [remaingTime, setRemainingTime] = useState(totalTime - passedTime);
  const [degree, setDegree] = useState((passedTime / totalTime) * 360);

  useEffect(() => {
    setConvertTotalTime(totalTime < 0 ? 0 : totalTime);
    setConvertPassedTime(passedTime < 0 ? 0 : passedTime);
    if (passedTime > totalTime) {
      setConvertPassedTime(totalTime);
    }
  }, [totalTime, passedTime]);

  useEffect(() => {
    setRemainingTime(convertTotalTime - convertPassedTime);
    setDegree((convertPassedTime / convertTotalTime) * 360);
  }, [convertTotalTime, convertPassedTime]);

  return (
    <Pie degree={degree}>
      <StyledTimerBox>
        <Timer remainingTime={remaingTime} />
      </StyledTimerBox>
    </Pie>
  );
};

export default TimerPie;
