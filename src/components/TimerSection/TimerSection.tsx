import React, { FC, useState } from "react";
import { Task } from "../TaskItem/TaskItem";
import SectionEmpty from "../SectionEmpty/SectionEmpty";
import TaskTimer from "../TaskTimer/TaskTimer";
import DoneModal, { DoneModalProps } from "../DoneModal/DoneModal";

export interface TimerSectionProps {
  task?: Task;
  tomatoUnitTime?: number; // 單位：秒
  onTaskComplete?: () => {};
}

const TimerSection: FC<TimerSectionProps> = ({
  task,
  tomatoUnitTime = 60,
  onTaskComplete = () => {},
}) => {
  const [breaktime, setBreaktime] = useState(false);
  const [modal, setModal] = useState<DoneModalProps["type"] | undefined>();

  const handleComplete = () => {
    if (breaktime) {
      // 休息結束
      setModal("break");
      return;
    }
    // 工作結束
    setModal("task");
  };

  const handleReset = () => {};

  const handleBreak = () => {
    setModal(undefined);
    setBreaktime(true);
  };

  const handleTask = () => {
    setModal(undefined);
    setBreaktime(false);
    onTaskComplete(); // 當前task完成，繼續下一個task
  };

  return (
    <>
      <div>
        {task ? (
          <TaskTimer
            {...task}
            tomatoUnitTime={tomatoUnitTime}
            breaktime={breaktime}
            onComplete={handleComplete}
            onReset={handleReset}
          />
        ) : (
          <SectionEmpty />
        )}
      </div>

      {modal && (
        <DoneModal type={modal} onBreak={handleBreak} onTask={handleTask} />
      )}
    </>
  );
};

export default TimerSection;
