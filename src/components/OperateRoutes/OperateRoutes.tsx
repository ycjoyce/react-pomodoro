import React, { FC } from "react";
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
}

const OperateRoutes: FC<OperateRoutesProps> = ({
  tasks = [],
  ringtones = { work: [], break: [] },
  checkedRingtone = { work: "", break: "" },
  getTomato = () => 0,
  onSaveNewTask = () => {},
  onSelectRingtone = () => {},
}) => {
  const Routes = () =>
    useRoutes([
      {
        path: "/add",
        element: <AddNewTask onSave={onSaveNewTask} />,
      },
      {
        path: "/list",
        element: <TaskList tasks={tasks} />,
      },
      {
        path: "/analysis",
        element: <AnalyticsReport getTomato={getTomato} />,
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
