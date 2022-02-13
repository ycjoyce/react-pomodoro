import React, { FC, useState } from "react";
import PanelList from "../PanelList/PanelList";
import PanelItem from "../PanelItem/PanelItem";
import TaskItem, { TaskItemProps } from "../TaskItem/TaskItem";

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
      <PanelItem>
        <TaskItem
          {...item}
          opened={item.title === openedItem}
          onToggle={(toOpen) => handleToggle(item.title, toOpen)}
        />
      </PanelItem>
    ));
  };

  return <PanelList>{renderItems(contents)}</PanelList>;
};

export default TaskPanelList;
