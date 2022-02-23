import React, { FC } from "react";
import StyledTimer from "./Timer.style";

export interface TimerProps {
  remainingTime?: number; // 單位：秒
}

/**
 * 將秒數轉為時間字串
 * @param time 秒數
 * @returns 時間字串，如 01:42:33
 */
export const formatTime = (time: number): string => {
  let convertTime = time;
  if (time < 0) {
    convertTime = 0;
  }
  const hour = Math.floor(convertTime / 3600);
  const min = Math.floor((convertTime % 3600) / 60);
  const sec = convertTime - hour * 3600 - min * 60;
  const timeString = {
    hour: hour < 10 ? `0${hour}` : hour,
    min: min < 10 ? `0${min}` : min,
    sec: sec < 10 ? `0${sec}` : sec,
  };
  return `${hour < 1 ? "" : timeString.hour + ":"}${timeString.min}:${
    timeString.sec
  }`;
};

const Timer: FC<TimerProps> = ({ remainingTime = 0 }) => {
  return <StyledTimer>{formatTime(remainingTime)}</StyledTimer>;
};

export default Timer;
