import React, { FC, useState, useRef } from "react";
import { Task } from "../TaskItem/TaskItem";
import RecordGroup from "../RecordGroup/RecordGroup";
import TimerPie from "../TimerPie/TimerPie";
import PlayButton from "../PlayButton/PlayButton";
import CompleteButton from "../CompleteButton/CompleteButton";

export interface TimerSectionProps {
  task?: Task;
  tomatoUnitTime?: number; // 單位：秒
}

const TimerSection: FC<TimerSectionProps> = ({ task, tomatoUnitTime = 60 }) => {
  const [passedTime, setPassedTime] = useState(
    task ? (task.recordCompletedNumber || 0) * tomatoUnitTime : 0
  );

  const [curCompletedNumber, setCurCompletedNumber] = useState(
    task ? task.recordCompletedNumber || 0 : 0
  );

  const renderEmptySection = () => {
    return (
      <>
        <div>POMODORO</div>
        <p>
          You don't have any task now,
          <br />
          please add task first!
        </p>
      </>
    );
  };

  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const renderTaskSection = (
    { title, recordLength }: Task,
    passedTime: number
  ) => {
    const handleStart = () => {
      setPassedTime((t) => t + 1);

      timer.current = setInterval(() => {
        setPassedTime((t) => t + 1);
      }, 1000);
      console.log("start");
    };

    const handlePause = () => {
      clearInterval(timer.current as NodeJS.Timeout);
      console.log("pause");
    };

    const handleReset = () => {};

    return (
      <>
        <div>
          <p>{title}</p>
          <RecordGroup
            length={recordLength}
            completedNumber={curCompletedNumber}
          />
        </div>
        <TimerPie
          totalTime={tomatoUnitTime * recordLength}
          passedTime={passedTime}
        />
        <div>
          <PlayButton operate="start" onClick={handleStart} />
          <PlayButton operate="pause" onClick={handlePause} />
          <PlayButton operate="reset" onClick={handleReset} />
        </div>
        <CompleteButton />
      </>
    );
  };

  return (
    <div>
      {task ? renderTaskSection(task, passedTime) : renderEmptySection()}
    </div>
  );
};

export default TimerSection;
