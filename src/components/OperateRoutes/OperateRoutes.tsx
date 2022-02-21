import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import AddNewTask, { AddNewTaskProps } from "../AddNewTask/AddNewTask";
import Ringtone, { RingtoneProps } from "../Ringtone/Ringtone";
import TaskList, { TaskListProps } from "../TaskList/TaskList";
import AnalyticsReport, {
  AnalyticsReportProps,
} from "../AnalyticsReport/AnalyticsReport";

export interface OperateRoutesProps {
  tasks?: TaskListProps["tasks"];
  ringtones?: RingtoneProps["ringtones"];
  checkedRingtone?: RingtoneProps["checkedItem"];
  getTomato?: AnalyticsReportProps["getTomato"];
  onSaveNewTask?: AddNewTaskProps["onSave"];
  onSelectRingtone?: RingtoneProps["onSelect"];
  onEditTask?: TaskListProps["onSave"];
  onDeleteTask?: TaskListProps["onDelete"];
  onRedoTask?: TaskListProps["onRedo"];
}

const OperateRoutes: FC<OperateRoutesProps> = ({
  tasks = [],
  ringtones = { work: [], break: [] },
  checkedRingtone = { work: "", break: "" },
  getTomato = () => Promise.resolve(0),
  onSaveNewTask = () => {},
  onSelectRingtone = () => {},
  onEditTask = () => {},
  onDeleteTask = () => {},
  onRedoTask = () => {},
}) => {
  return (
    <Routes>
      <Route path="/add" element={<AddNewTask onSave={onSaveNewTask} />} />
      <Route
        path="/list"
        element={
          <TaskList
            tasks={tasks}
            onSave={onEditTask}
            onDelete={onDeleteTask}
            onRedo={onRedoTask}
          />
        }
      />
      <Route
        path="/analysis"
        element={<AnalyticsReport getTomato={getTomato} />}
      />
      <Route
        path="/ringtone"
        element={
          <Ringtone
            ringtones={ringtones}
            checkedItem={checkedRingtone}
            onSelect={onSelectRingtone}
          />
        }
      />
      <Route path="*" element={<AddNewTask onSave={onSaveNewTask} />} />
    </Routes>
  );
};

export default OperateRoutes;
