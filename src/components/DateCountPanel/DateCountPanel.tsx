import React, { FC, useState, useEffect } from "react";
import DateCountItem from "../DateCountItem/DateCountItem";
import StyledDateCountPanel from "./DateCountPanel.style";
import { dateKey } from "../../utils/convert";

export interface DateCountPanelProps {
  today?: Date;
  getTomato: (date: Date) => Promise<number>;
  // getTomato: (date: Date) => number;
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
  const [tomatoAmounts, setTomatoAmounts] = useState<{
    [date: string]: number;
  }>({});

  useEffect(() => {
    const setTomato = async (date: Date) => {
      const count = await getTomato(date);
      setTomatoAmounts((original) => {
        return {
          ...original,
          [dateKey(date)]: count,
        };
      });
    };

    getWeekDates(today).forEach((date) => {
      setTomato(date);
    });

    return () => {
      setTomatoAmounts({});
    };
  }, [today, getTomato]);

  const renderItems = (dates: Date[]) => {
    return dates.map((date) => {
      return (
        <DateCountItem
          date={date}
          tomatoAmount={tomatoAmounts[dateKey(date)] || 0}
          key={date.toLocaleDateString()}
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
