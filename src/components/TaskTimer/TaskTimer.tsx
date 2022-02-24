import React, { FC, useState, useRef, useEffect, useCallback } from "react";
import { Task } from "../TaskItem/TaskItem";
import RecordGroup from "../RecordGroup/RecordGroup";
import TimerPie from "../TimerPie/TimerPie";
import PlayButton, { PlayButtonProps } from "../PlayButton/PlayButton";
import CompleteButton from "../CompleteButton/CompleteButton";
import StyledTaskTimer, {
  StyledTitleBox,
  StyledButtonGroup,
  StyledBreaktimeLabel,
} from "./TaskTimer.style";

export interface TaskTimerProps extends Task {
  tomatoUnitTime: number; // 單位：秒
  breaktime?: boolean;
  onReset?: () => void;
  onComplete?: () => void;
  onAddRecord?: (id: string, count: number) => Promise<void>;
}

const TaskTimer: FC<TaskTimerProps> = ({
  id,
  title,
  recordLength,
  tomatoUnitTime,
  breaktime = false,
  onReset = () => {},
  onComplete = () => {},
  onAddRecord = () => {},
}) => {
  // 目前經過了幾個 tomato unit time
  const [curCompletedNumber, setCurCompletedNumber] = useState(0);
  // 目前經過時間
  const [passedTime, setPassedTime] = useState(0);
  // 目前執行的是哪一個按鈕
  const [activeOperate, setActiveOperate] =
    useState<PlayButtonProps["operate"]>();

  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const handleStart = () => {
    // 如果目前已經在執行 start，不要重複執行
    if (activeOperate === "start") {
      return;
    }
    // 設定執行狀態為 start，並設定計時器
    setActiveOperate("start");
    setPassedTime((t) => t + 1);
    timer.current = setInterval(() => {
      setPassedTime((t) => t + 1);
    }, 1000);
  };

  const handlePause = () => {
    // 如果目前已經在執行 pause，不要重複執行
    if (activeOperate === "pause") {
      return;
    }
    // 設定執行狀態為 pause，並清除計時器
    setActiveOperate("pause");
    clearInterval(timer.current as NodeJS.Timeout);
  };

  /**
   * 清除計時器及相關狀態
   */
  const clearTimer = () => {
    setActiveOperate(undefined);
    clearInterval(timer.current as NodeJS.Timeout);
    setCurCompletedNumber(0);
    setPassedTime(0);
  };

  const handleReset = () => {
    clearTimer();
    onReset();
  };

  const handleComplete = useCallback(() => {
    clearTimer();
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // 每當時間經過一個 unit time 就增加一個 completed number
    if (!(passedTime - curCompletedNumber * tomatoUnitTime < tomatoUnitTime)) {
      setCurCompletedNumber((n) => n + 1);
      if (!breaktime) {
        onAddRecord(id, 1);
      }
    }
    // 時間走完
    if (!(passedTime < tomatoUnitTime * recordLength)) {
      handleComplete();
    }
  }, [
    id,
    breaktime,
    passedTime,
    curCompletedNumber,
    tomatoUnitTime,
    recordLength,
    handleComplete,
    onComplete,
    onAddRecord,
  ]);

  const renderPlayButtons = (
    buttons: { operate: PlayButtonProps["operate"]; onClick(): void }[]
  ) => {
    return buttons.map((button) => (
      <PlayButton
        key={button.operate}
        {...button}
        primary={!breaktime}
        active={activeOperate === button.operate}
      />
    ));
  };

  return (
    <StyledTaskTimer>
      <StyledTitleBox>
        <p data-title>{title}</p>
        {breaktime ? (
          <StyledBreaktimeLabel>break</StyledBreaktimeLabel>
        ) : (
          <RecordGroup
            length={recordLength}
            completedNumber={curCompletedNumber}
          />
        )}
      </StyledTitleBox>
      <TimerPie
        totalTime={tomatoUnitTime * recordLength}
        passedTime={passedTime}
        primary={!breaktime}
      />
      <StyledButtonGroup>
        {renderPlayButtons([
          { operate: "start", onClick: handleStart },
          { operate: "pause", onClick: handlePause },
          { operate: "reset", onClick: handleReset },
        ])}
      </StyledButtonGroup>
      <CompleteButton onClick={handleComplete} />
    </StyledTaskTimer>
  );
};

export default TaskTimer;
