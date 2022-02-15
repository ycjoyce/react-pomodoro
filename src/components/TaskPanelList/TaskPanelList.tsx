import React, { FC, useState } from "react";
import PanelList from "../PanelList/PanelList";
import PanelItem from "../PanelItem/PanelItem";
import TaskItem, { TaskItemProps } from "../TaskItem/TaskItem";
import StyledPanelItem from "../PanelItem/PanelItem.style";

export interface TaskPanelListProps {
  contents: TaskItemProps[];
}

const TaskPanelList: FC<TaskPanelListProps> = ({ contents }) => {
  const [openedItem, setOpenedItem] = useState("");

  const renderItems = (contents: TaskItemProps[]) => {
    const handleToggle = (title: string, toOpen: boolean) => {
      setOpenedItem(toOpen ? title : "");
    };
    return contents.map((item) => (
      <PanelItem key={item.title}>
        <TaskItem
          {...item}
          opened={item.title === openedItem}
          onToggle={(toOpen) => handleToggle(item.title, toOpen)}
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
