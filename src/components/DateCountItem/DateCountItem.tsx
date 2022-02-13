import React, { FC } from "react";
import { StyledLabel } from "../CountPanelItem/CountPanelItem.style";
import StyledDateCountItem, {
  StyledTomato,
  StyledTomatoBox,
  StyledTomatoTitle,
  StyledDate,
} from "./DateCountItem.style";

export interface DateCountItemProps {
  date: Date;
  tomatoAmount: number;
}

export const weekdayMap: { [idx: number]: string } = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT",
};

const DateCountItem: FC<DateCountItemProps> = ({ date, tomatoAmount }) => {
  const renderTomatoGroup = (amount: number) => (
    <StyledTomatoBox>
      <StyledTomatoTitle>{tomatoAmount}</StyledTomatoTitle>
      {new Array(amount).fill(<StyledTomato />)}
    </StyledTomatoBox>
  );

  const renderDate = (date: Date) => {
    const weekday = weekdayMap[date.getDay()];
    const dateString = date.toLocaleDateString().substring(5);
    return (
      <StyledDate>
        <StyledLabel>{dateString}</StyledLabel>
        <StyledLabel>{weekday}</StyledLabel>
      </StyledDate>
    );
  };

  return (
    <StyledDateCountItem>
      {renderTomatoGroup(tomatoAmount)}
      {renderDate(date)}
    </StyledDateCountItem>
  );
};

export default DateCountItem;
