import React, { FC } from "react";
import Title from "../Title/Title";
import Panel from "../Panel/Panel";
import TaskPanelList from "../TaskPanelList/TaskPanelList";
import { Task, TaskMethods } from "../TaskItem/TaskItem";
import { StyledOperate } from "../OperateSection/OperateSection.style";

export interface TaskListProps extends TaskMethods {
  tasks: Task[];
}

const TaskList: FC<TaskListProps> = ({
  tasks,
  onSave = () => {},
  onDelete = () => {},
  onRedo = () => {},
}) => {
  const renderList = (done: boolean) => {
    return (
      <TaskPanelList
        contents={tasks
          .filter((task) => task.done === done)
          .map((item) => ({
            ...item,
            tomatoAmount: item.recordLength,
          }))}
        onSave={onSave}
        onDelete={onDelete}
        onRedo={onRedo}
      />
    );
  };

  return (
    <StyledOperate>
      <Title>task list</Title>

      <Panel
        contents={[
          {
            tab: "todo",
            list: renderList(false),
          },
          {
            tab: "done",
            list: renderList(true),
          },
        ]}
      />
    </StyledOperate>
  );
};

export default TaskList;
