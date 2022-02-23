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
  // 經過轉換的 totalTime
  const [convertTotalTime, setConvertTotalTime] = useState(totalTime);
  // 經過轉換的 passedTime
  const [convertPassedTime, setConvertPassedTime] = useState(passedTime);
  // pie 旋轉的角度
  const [degree, setDegree] = useState((passedTime / totalTime) * 360);

  useEffect(() => {
    // 如果 props 傳進來的為負值，則設為 0
    setConvertTotalTime(totalTime < 0 ? 0 : totalTime);
    setConvertPassedTime(passedTime < 0 ? 0 : passedTime);
    // 如果 props 傳進來的 passedTime 大於 totalTime，
    // 則將經過轉換的 passedTime 設為 totalTime
    if (passedTime > totalTime) {
      setConvertPassedTime(totalTime);
    }
  }, [totalTime, passedTime]);

  useEffect(() => {
    setDegree((convertPassedTime / convertTotalTime) * 360);
  }, [convertTotalTime, convertPassedTime]);

  return (
    <Pie
      degree={degree}
      color={primary ? theme.color.primary : theme.color.emphasize}
    >
      <StyledTimerBox>
        <Timer remainingTime={convertTotalTime - convertPassedTime} />
      </StyledTimerBox>
    </Pie>
  );
};

export default TimerPie;
