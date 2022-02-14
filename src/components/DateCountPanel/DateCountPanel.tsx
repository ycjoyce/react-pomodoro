import React, { FC } from "react";
import DateCountItem from "../DateCountItem/DateCountItem";
import StyledDateCountPanel from "./DateCountPanel.style";

export interface DateCountPanelProps {
  today?: Date;
}

/**
 * 由今日日期取得本週所有日期
 * @param today
 * @returns
 */
export const getWeekDates = (today: Date): Date[] => {
  const addDays = (origianl: Date, day: number): Date => {
    return new Date(new Date().setDate(origianl.getDate() + day));
  };

  const dates: Date[] = new Array(7);
  const todayWeekday = today.getDay();

  dates[todayWeekday] = today;

  for (let i = 0; i < todayWeekday; i++) {
    dates[i] = addDays(today, i - todayWeekday);
  }

  for (let i = todayWeekday + 1; i <= 6; i++) {
    dates[i] = addDays(today, i - todayWeekday);
  }

  return dates;
};

const DateCountPanel: FC<DateCountPanelProps> = ({ today = new Date() }) => {
  const renderItems = (dates: Date[]) => {
    return dates.map((date) => (
      <DateCountItem
        date={date}
        tomatoAmount={date.getDay()} // temp
        key={date.toString()}
      />
    ));
  };

  return (
    <StyledDateCountPanel>
      {renderItems(getWeekDates(today))}
    </StyledDateCountPanel>
  );
};

export default DateCountPanel;
