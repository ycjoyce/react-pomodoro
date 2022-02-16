import React, { FC, useState } from "react";
import PanelList from "../PanelList/PanelList";
import PanelItem from "../PanelItem/PanelItem";
import TaskItem, { TaskItemProps, TaskMethods } from "../TaskItem/TaskItem";
import StyledPanelItem from "../PanelItem/PanelItem.style";

export interface TaskPanelListProps extends TaskMethods {
  contents: TaskItemProps[];
}

const TaskPanelList: FC<TaskPanelListProps> = ({
  contents,
  onSave = () => {},
  onDelete = () => {},
  onRedo = () => {},
}) => {
  const [openedItem, setOpenedItem] = useState("");

  const renderItems = (contents: TaskItemProps[]) => {
    const handleToggle = (title: string, toOpen: boolean) => {
      setOpenedItem(toOpen ? title : "");
    };
    return contents.map((item) => (
      <PanelItem key={item.id}>
        <TaskItem
          {...item}
          opened={item.title === openedItem}
          onToggle={(toOpen) => handleToggle(item.title, toOpen)}
          onSave={onSave}
          onDelete={onDelete}
          onRedo={onRedo}
        />
      </PanelItem>
    ));
  };

  return (
    <PanelList>
      {contents.length > 0 ? (
        renderItems(contents)
      ) : (
        <StyledPanelItem empty={true}>
          You don't have any task now,
          <br />
          please add task first!
        </StyledPanelItem>
      )}
    </PanelList>
  );
};

export default TaskPanelList;
