import React, { FC } from "react";
import Button from "../../Button/Button";
import { StyledButtonGroup } from "../../Button/Button.style";
import StyledTaskItemOperate from "../TaskItemOperate.style";

export interface DoneTaskItemOperateProps {
  onDelete(): void;
  onRedo(): void;
}

const DoneTaskItemOperate: FC<DoneTaskItemOperateProps> = ({
  onDelete,
  onRedo,
}) => {
  return (
    <StyledTaskItemOperate>
      <StyledButtonGroup>
        <Button primary={false} onClick={onDelete}>
          delete
        </Button>
        <Button primary={true} onClick={onRedo} large={true}>
          redo
        </Button>
      </StyledButtonGroup>
    </StyledTaskItemOperate>
  );
};

export default DoneTaskItemOperate;
