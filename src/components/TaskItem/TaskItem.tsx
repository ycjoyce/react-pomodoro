import React, { FC, useState } from "react";
import TaskItemTitle from "../TaskItemTitle/TaskItemTitle";
import TodoTaskItemOperate from "../TaskItemOperate/Todo/TodoTaskItemOperate";
import DoneTaskItemOperate from "../TaskItemOperate/Done/DoneTaskItemOperate";
import StyledTaskItem from "./TaskItem.style";

export interface TaskItemProps {
  opened?: boolean;
  done?: boolean;
  title: string;
  recordLength: number;
  recordCompletedNumber?: number;
  tomatoAmount?: number;
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
  // const [operateOpened, setOperateOpened] = useState(opened);
  const [taskTitle, setTaskTitle] = useState(title);
  const [selectedTomato, setSelectedTomato] = useState(tomatoAmount);

  const handleToggle = () => {
    // setOperateOpened((o) => !o);
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
