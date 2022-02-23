import React, { FC, useState } from "react";
import { Task } from "../TaskItem/TaskItem";
import SectionEmpty from "../SectionEmpty/SectionEmpty";
import TaskTimer, { TaskTimerProps } from "../TaskTimer/TaskTimer";
import DoneModal, { DoneModalProps } from "../DoneModal/DoneModal";
import { RingtoneProps } from "../Ringtone/Ringtone";
import StyledTimerSection from "./TimerSection.style";

export interface TimerSectionProps {
  task?: Task;
  tomatoUnitTime?: number; // 單位：秒
  ringtones?: RingtoneProps["checkedItem"];
  onTaskComplete?: (id: string) => Promise<void>;
  onAddRecord?: TaskTimerProps["onAddRecord"];
}

const TimerSection: FC<TimerSectionProps> = ({
  task,
  tomatoUnitTime = 60,
  ringtones = { work: "", break: "" },
  onTaskComplete = () => {},
  onAddRecord = () => Promise.resolve(),
}) => {
  // 目前是否為休息時間
  const [breaktime, setBreaktime] = useState(false);
  const [modal, setModal] = useState<DoneModalProps["type"] | undefined>();

  const handleComplete = () => {
    if (breaktime) {
      // 休息結束
      setModal("break");
      return;
    }
    // 工作結束
    setModal("work");
  };

  const handleReset = () => {};

  /**
   * 處理選擇開始休息時間的事件
   */
  const handleBreak = () => {
    setModal(undefined);
    setBreaktime(true);
  };

  /**
   * 處理選擇繼續下個 task 的事件
   */
  const handleTask = () => {
    setModal(undefined);
    setBreaktime(false);
    onTaskComplete(task?.id || ""); // 當前task完成，繼續下一個task
  };

  return (
    <>
      <StyledTimerSection>
        {task ? (
          <TaskTimer
            {...task}
            tomatoUnitTime={tomatoUnitTime}
            breaktime={breaktime}
            onComplete={handleComplete}
            onReset={handleReset}
            onAddRecord={onAddRecord}
          />
        ) : (
          <SectionEmpty />
        )}
      </StyledTimerSection>

      {modal && (
        <DoneModal
          root="modal-root"
          type={modal}
          ringtone={ringtones[modal]}
          onBreak={handleBreak}
          onTask={handleTask}
        />
      )}
    </>
  );
};

export default TimerSection;
