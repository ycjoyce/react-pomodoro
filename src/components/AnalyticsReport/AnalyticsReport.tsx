import React, { FC, useState, useEffect, useRef } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";
import CountPanel from "../CountPanel/CountPanel";
import DateCountPanel, {
  DateCountPanelProps,
  getWeekDates,
  addDays,
} from "../DateCountPanel/DateCountPanel";
import { getDateString } from "../DateCountItem/DateCountItem";
import Button from "../Button/Button";
import { StyledOperate } from "../OperateSection/OperateSection.style";
import { StyledButtonGroup } from "./AnalyticsReport.style";

export interface AnalyticsReportProps {
  getTomato: DateCountPanelProps["getTomato"];
}

const AnalyticsReport: FC<AnalyticsReportProps> = ({ getTomato }) => {
  const today = useRef(new Date());
  const [targetDate, setTargetDate] = useState(today.current);
  const [todayCount, setTodayCount] = useState(0);
  const [weekCount, setWeekCount] = useState(0);

  useEffect(() => {
    const getWeekCount = async (date: Date) => {
      const counts = await Promise.all(
        getWeekDates(date).map((d) => getTomato(d))
      );
      return counts.reduce((a, e) => (a += e));
    };

    getTomato(today.current).then((count) => {
      setTodayCount(count);
      // console.log("call");
    });
    getWeekCount(today.current).then((count) => setWeekCount(count));
  }, [getTomato]);

  const getWeekString = (targetDate: Date) => {
    const weekDates = getWeekDates(targetDate);
    return `${getDateString(weekDates[0])}-${getDateString(weekDates[6])}`;
  };

  // const getWeekCount = (date: Date) =>
  //   getWeekDates(date)
  //     .map((d) => getTomato(d))
  //     .reduce((a, e) => (a += e));

  const handlePrev = () => {
    setTargetDate((d) => {
      console.log("prev", d);
      return addDays(d, -7);
    });
  };

  const handleNext = () => {
    setTargetDate((d) => {
      console.log("next", d);
      return addDays(d, 7);
    });
  };

  // useEffect(() => {
  //   console.log(targetDate);
  // }, [targetDate]);

  return (
    <StyledOperate>
      <Title>analytics report</Title>

      <div>
        <Label>tomatoes of this week</Label>
        <CountPanel
          items={[
            {
              // count: getTomato(today.current),
              count: todayCount,
              label: "today",
            },
            {
              // count: getWeekCount(today.current),
              count: weekCount,
              label: getWeekString(today.current),
            },
          ]}
        />
      </div>

      <div>
        <Label>{`chart ${getWeekString(targetDate)}`}</Label>
        <DateCountPanel today={targetDate} getTomato={getTomato} />
      </div>

      <StyledButtonGroup>
        <Button outline primary onClick={handlePrev}>
          PREV
        </Button>
        <Button outline primary={false} onClick={handleNext}>
          NEXT
        </Button>
      </StyledButtonGroup>
    </StyledOperate>
  );
};

export default AnalyticsReport;
