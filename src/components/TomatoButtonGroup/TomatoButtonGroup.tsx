import React, { FC } from "react";
import TomatoButton from "../TomatoButton/TomatoButton";
import StyledTomatoButtonGroup from "./TomatoButtonGroup.style";

export interface TomatoButtonGroupProps {
  length: number;
  selectedNumber?: number;
  onSelect(number: number): void;
}

const TomatoButtonGroup: FC<TomatoButtonGroupProps> = ({
  length,
  selectedNumber = 0,
  onSelect,
}) => {
  /**
   * 渲染番茄按鈕
   * @param length 總長度
   * @param selectedNumber 選到第幾個
   * @returns
   */
  const renderTomatoButtons = (length: number, selectedNumber: number) => {
    const tomatoes = [];
    for (let i = 0; i < length; i++) {
      tomatoes.push(
        <TomatoButton key={i} number={i + 1} active={i < selectedNumber} />
      );
    }
    return tomatoes;
  };

  /**
   * 判斷點擊的是第幾個番茄
   * @param e
   */
  const handleClick = (e: React.MouseEvent) => {
    const tomato = e.target as HTMLElement;
    if (!tomato.dataset.number) {
      return;
    }
    onSelect(parseInt(tomato.dataset.number));
  };

  return (
    <StyledTomatoButtonGroup onClick={handleClick}>
      {renderTomatoButtons(length, selectedNumber)}
    </StyledTomatoButtonGroup>
  );
};

export default TomatoButtonGroup;
