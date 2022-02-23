import React, { FC, useState } from "react";
import TaskItemTitle from "../TaskItemTitle/TaskItemTitle";
import TodoTaskItemOperate from "../TaskItemOperate/Todo/TodoTaskItemOperate";
import DoneTaskItemOperate from "../TaskItemOperate/Done/DoneTaskItemOperate";
import StyledTaskItem from "./TaskItem.style";

export interface Task {
  id: string;
  title: string;
  recordLength: number; // 記錄的番茄數量
  recordCompletedNumber?: number;
  done?: boolean;
}

export interface TaskMethods {
  onSave?: (id: string, title: string, tomato: number) => void;
  onDelete?: (id: string) => void;
  onRedo?: (id: string) => void;
}

export interface TaskItemProps extends Task, TaskMethods {
  opened?: boolean;
  tomatoAmount?: number; // 編輯的番茄數量
  onToggle?: (toOpen: boolean) => void;
}

const TaskItem: FC<TaskItemProps> = ({
  opened = false,
  id,
  done = false,
  title,
  recordLength,
  recordCompletedNumber = 0,
  tomatoAmount = 0,
  onToggle = () => {},
  onSave = () => {},
  onDelete = () => {},
  onRedo = () => {},
}) => {
  const [taskTitle, setTaskTitle] = useState(title);
  const [selectedTomato, setSelectedTomato] = useState(tomatoAmount);

  const handleToggle = () => {
    onToggle(!opened);
  };

  const handleTitleChange = (value: string) => {
    setTaskTitle(value);
  };

  const handleSelectTomato = (number: number) => {
    setSelectedTomato(number);
  };

  const handleSave = () => {
    onSave(id, taskTitle, selectedTomato);
    handleToggle();
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleRedo = () => {
    onRedo(id);
  };

  return (
    <StyledTaskItem>
      <TaskItemTitle
        opened={opened}
        done={done}
        title={title}
        recordLength={recordLength}
        recordCompletedNumber={recordCompletedNumber}
        onToggle={handleToggle}
      />

      {opened && (
        <>
          <hr />
          {done ? (
            <DoneTaskItemOperate onDelete={handleDelete} onRedo={handleRedo} />
          ) : (
            <TodoTaskItemOperate
              title={taskTitle}
              tomatoAmount={selectedTomato}
              onTitleChange={handleTitleChange}
              onSelectTomato={handleSelectTomato}
              onDelete={handleDelete}
              onSave={handleSave}
            />
          )}
        </>
      )}
    </StyledTaskItem>
  );
};

export default TaskItem;
