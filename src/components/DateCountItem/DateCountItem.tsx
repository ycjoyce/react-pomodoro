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

export const getDateString = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};

const DateCountItem: FC<DateCountItemProps> = ({ date, tomatoAmount }) => {
  const renderTomatoGroup = (amount: number) => {
    const tomatoes = [];
    for (let i = 0; i < amount; i++) {
      tomatoes.push(<StyledTomato key={i} />);
    }
    return (
      <StyledTomatoBox>
        {tomatoAmount > 0 && (
          <StyledTomatoTitle>{tomatoAmount}</StyledTomatoTitle>
        )}
        {tomatoes}
      </StyledTomatoBox>
    );
  };

  const renderDate = (date: Date) => {
    const weekday = weekdayMap[date.getDay()];
    return (
      <StyledDate>
        <StyledLabel>{getDateString(date)}</StyledLabel>
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
