import React, { FC, useState } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";
import TomatoButtonGroup from "../TomatoButtonGroup/TomatoButtonGroup";
import Button from "../Button/Button";
import { StyledButtonGroup } from "../Button/Button.style";
import StyledAddNewTask from "./AddNewTask.style";

export interface AddNewTaskProps {
  onSave?: (title: string, tomato: number) => void;
}

const AddNewTask: FC<AddNewTaskProps> = ({ onSave = () => {} }) => {
  const [title, setTitle] = useState("");
  const [tomato, setTomato] = useState(0);

  const handleSave = () => {
    onSave(title, tomato);
  };

  return (
    <StyledAddNewTask>
      <Title>add new task</Title>

      <div>
        <Label>task title</Label>
        <TextInput value={title} onChange={setTitle} />
      </div>

      <div>
        <Label>estimated tomato</Label>
        <TomatoButtonGroup
          length={10}
          selectedNumber={tomato}
          onSelect={setTomato}
        />
      </div>

      <StyledButtonGroup>
        <Button onClick={handleSave} large>
          ADD TASK
        </Button>
      </StyledButtonGroup>
    </StyledAddNewTask>
  );
};

export default AddNewTask;
