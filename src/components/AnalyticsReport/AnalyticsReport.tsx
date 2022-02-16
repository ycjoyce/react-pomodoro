import React, { FC, useState } from "react";
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
  const today = new Date();
  const [targetDate, setTargetDate] = useState(today);

  const getWeekString = (targetDate: Date) => {
    const weekDates = getWeekDates(targetDate);
    return `${getDateString(weekDates[0])}-${getDateString(weekDates[6])}`;
  };

  const getWeekCount = (date: Date) =>
    getWeekDates(date)
      .map((d) => getTomato(d))
      .reduce((a, e) => (a += e));

  const handlePrev = () => {
    setTargetDate((d) => addDays(d, -7));
  };

  const handleNext = () => {
    setTargetDate((d) => addDays(d, 7));
  };

  return (
    <StyledOperate>
      <Title>analytics report</Title>

      <div>
        <Label>tomatoes of this week</Label>
        <CountPanel
          items={[
            { count: getTomato(today), label: "today" },
            {
              count: getWeekCount(today),
              label: getWeekString(today),
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
