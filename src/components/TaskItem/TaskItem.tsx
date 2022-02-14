import React, { FC, useState } from "react";
import TaskItemTitle from "../TaskItemTitle/TaskItemTitle";
import TodoTaskItemOperate from "../TaskItemOperate/Todo/TodoTaskItemOperate";
import DoneTaskItemOperate from "../TaskItemOperate/Done/DoneTaskItemOperate";
import StyledTaskItem from "./TaskItem.style";

export interface Task {
  title: string;
  recordLength: number; // 記錄的番茄數量
  recordCompletedNumber?: number;
}

export interface TaskItemProps extends Task {
  opened?: boolean;
  done?: boolean;
  tomatoAmount?: number; // 編輯的番茄數量
  onToggle?: (toOpen: boolean) => void;
}

const TaskItem: FC<TaskItemProps> = ({
  opened = false,
  done = false,
  title,
  recordLength,
  recordCompletedNumber = 0,
  tomatoAmount = 0,
  onToggle = () => {},
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

  const handleDelete = () => {};
  const handleSave = () => {};
  const handleRedo = () => {};

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
