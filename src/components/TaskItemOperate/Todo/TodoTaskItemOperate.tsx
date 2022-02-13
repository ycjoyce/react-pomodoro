import React, { FC } from "react";
import Label from "../../Label/Label";
import TextInput from "../../TextInput/TextInput";
import TomatoButtonGroup from "../../TomatoButtonGroup/TomatoButtonGroup";
import Button from "../../Button/Button";
import { StyledButtonGroup } from "../../Button/Button.style";
import StyledTaskItemOperate from "../TaskItemOperate.style";

export interface TodoTaskItemOperateProps {
  title: string;
  tomatoAmount: number;
  onTitleChange(value: string): void;
  onSelectTomato(number: number): void;
  onDelete(): void;
  onSave(): void;
}

const TodoTaskItemOperate: FC<TodoTaskItemOperateProps> = ({
  title,
  tomatoAmount,
  onTitleChange,
  onSelectTomato,
  onDelete,
  onSave,
}) => {
  return (
    <StyledTaskItemOperate>
      <div>
        <Label>task title</Label>
        <TextInput value={title} onChange={(value) => onTitleChange(value)} />
      </div>
      <div>
        <Label>estimated tomato</Label>
        <TomatoButtonGroup
          length={10}
          selectedNumber={tomatoAmount}
          onSelect={onSelectTomato}
        />
      </div>
      <StyledButtonGroup>
        <Button primary={false} onClick={onDelete}>
          delete
        </Button>
        <Button primary={true} onClick={onSave} large={true}>
          save
        </Button>
      </StyledButtonGroup>
    </StyledTaskItemOperate>
  );
};

export default TodoTaskItemOperate;
