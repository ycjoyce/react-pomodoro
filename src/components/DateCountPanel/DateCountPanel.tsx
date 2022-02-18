import React, { FC, useState, useEffect } from "react";
import DateCountItem from "../DateCountItem/DateCountItem";
import StyledDateCountPanel from "./DateCountPanel.style";

export interface DateCountPanelProps {
  today?: Date;
  // getTomato: (date: Date) => Promise<number>;
  getTomato: (date: Date) => number;
}

/**
 * 取得與初始日期間隔指定天數的date
 * @param origianl 初始的 date
 * @param day 要取得間隔幾天的 date
 * @returns
 */
export const addDays = (origianl: Date, day: number): Date => {
  const ms = day * 24 * 60 * 60 * 1000;
  return new Date(new Date().setTime(origianl.getTime() + ms));
};

/**
 * 由今日日期取得本週所有日期
 * @param today
 * @returns
 */
export const getWeekDates = (today: Date): Date[] => {
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

const DateCountPanel: FC<DateCountPanelProps> = ({
  today = new Date(),
  getTomato,
}) => {
  //   const [tomatoAmount, setTomatoAmount] = useState(0);
  //
  //   const setTomato = async (date: Date) => {
  //     const count = await getTomato(date);
  //     setTomatoAmount(count);
  //   };

  const renderItems = (dates: Date[]) => {
    return dates.map((date) => {
      // setTomato(date);
      return (
        <DateCountItem
          date={date}
          // tomatoAmount={tomatoAmount}
          tomatoAmount={getTomato(date)}
          key={date.toString()}
        />
      );
    });
  };

  return (
    <StyledDateCountPanel>
      {renderItems(getWeekDates(today))}
    </StyledDateCountPanel>
  );
};

export default DateCountPanel;
