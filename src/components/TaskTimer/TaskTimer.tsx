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
}

const TaskTimer: FC<TaskTimerProps> = ({
  title,
  recordLength,
  recordCompletedNumber = 0,
  tomatoUnitTime,
  breaktime = false,
  onReset = () => {},
  onComplete = () => {},
}) => {
  const [curCompletedNumber, setCurCompletedNumber] = useState(
    recordCompletedNumber
  );

  const [passedTime, setPassedTime] = useState(
    recordCompletedNumber * tomatoUnitTime
  );

  const [activeOperate, setActiveOperate] =
    useState<PlayButtonProps["operate"]>();

  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const handleStart = () => {
    if (activeOperate === "start") {
      return;
    }

    setActiveOperate("start");
    setPassedTime((t) => t + 1);

    timer.current = setInterval(() => {
      setPassedTime((t) => t + 1);
    }, 1000);
  };

  const handlePause = () => {
    if (activeOperate === "pause") {
      return;
    }

    setActiveOperate("pause");
    clearInterval(timer.current as NodeJS.Timeout);
  };

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
    }
    // 時間走完
    if (!(passedTime < tomatoUnitTime * recordLength)) {
      handleComplete();
    }
  }, [
    passedTime,
    curCompletedNumber,
    tomatoUnitTime,
    recordLength,
    handleComplete,
    onComplete,
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
