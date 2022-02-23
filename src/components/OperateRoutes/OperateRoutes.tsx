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

export const paths = {
  add: "/add",
  list: "/list",
  analysis: "/analysis",
  ringtone: "/ringtone",
};

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
  const addNewTaskComponent = <AddNewTask onSave={onSaveNewTask} />;

  return (
    <Routes>
      <Route path={paths.add} element={addNewTaskComponent} />
      <Route
        path={paths.list}
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
        path={paths.analysis}
        element={<AnalyticsReport getTomato={getTomato} />}
      />
      <Route
        path={paths.ringtone}
        element={
          <Ringtone
            ringtones={ringtones}
            checkedItem={checkedRingtone}
            onSelect={onSelectRingtone}
          />
        }
      />
      <Route path="*" element={addNewTaskComponent} />
    </Routes>
  );
};

export default OperateRoutes;
