import React, { FC, useMemo, useEffect } from "react";
import { useRoutes } from "react-router-dom";
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
  const MemoAnalyticsReport = useMemo(
    () => <AnalyticsReport getTomato={getTomato} />,
    [getTomato]
  );

  // useEffect(() => {
  //   console.log(getTomato);
  // }, [getTomato]);

  const Routes = () =>
    useRoutes([
      {
        path: "/add",
        element: <AddNewTask onSave={onSaveNewTask} />,
      },
      {
        path: "/list",
        element: (
          <TaskList
            tasks={tasks}
            onSave={onEditTask}
            onDelete={onDeleteTask}
            onRedo={onRedoTask}
          />
        ),
      },
      {
        path: "/analysis",
        element: MemoAnalyticsReport,
      },
      {
        path: "/ringtone",
        element: (
          <Ringtone
            ringtones={ringtones}
            checkedItem={checkedRingtone}
            onSelect={onSelectRingtone}
          />
        ),
      },
      { path: "*", element: <AddNewTask onSave={onSaveNewTask} /> },
    ]);

  return <Routes />;
};

export default OperateRoutes;
