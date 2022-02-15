import React, { FC, useState, useEffect } from "react";
import theme from "../../styles/abstracts/theme";
import Pie from "../Pie/Pie";
import Timer from "../Timer/Timer";
import { StyledTimerBox } from "./TimerPie.style";

export interface TimerPieProps {
  totalTime: number;
  passedTime: number;
  primary?: boolean;
}

const TimerPie: FC<TimerPieProps> = ({
  totalTime,
  passedTime,
  primary = true,
}) => {
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
    <Pie
      degree={degree}
      color={primary ? theme.color.primary : theme.color.emphasize}
    >
      <StyledTimerBox>
        <Timer remainingTime={remaingTime} />
      </StyledTimerBox>
    </Pie>
  );
};

export default TimerPie;
