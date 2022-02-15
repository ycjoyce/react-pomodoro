import React, { FC } from "react";
import { Task } from "../TaskItem/TaskItem";
import SectionEmpty from "../SectionEmpty/SectionEmpty";
import TaskTimer from "../TaskTimer/TaskTimer";

export interface TimerSectionProps {
  task?: Task;
  tomatoUnitTime?: number; // 單位：秒
}

const TimerSection: FC<TimerSectionProps> = ({ task, tomatoUnitTime = 60 }) => {
  return (
    <div>
      {task ? (
        <TaskTimer {...task} tomatoUnitTime={tomatoUnitTime} />
      ) : (
        <SectionEmpty />
      )}
    </div>
  );
};

export default TimerSection;
