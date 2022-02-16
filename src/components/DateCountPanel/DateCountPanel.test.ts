import { addDays, getWeekDates } from "./DateCountPanel";

describe("應該回傳正確的date", () => {
  test("應該正確加天數", () => {
    expect(addDays(new Date(2022, 1, 15), 1)).toEqual(new Date(2022, 1, 16));
  });

  test("應該正確減天數", () => {
    expect(addDays(new Date(2022, 1, 15), -1)).toEqual(new Date(2022, 1, 14));
  });

  test("應該可以跨月份", () => {
    expect(addDays(new Date(2022, 1, 22), 7)).toEqual(new Date(2022, 2, 1));
    expect(addDays(new Date(2022, 2, 1), -7)).toEqual(new Date(2022, 1, 22));
  });
});

describe("應該回傳該週日期", () => {
  test("應該正確回傳該週日期", () => {
    const today = new Date(2022, 1, 15);
    expect(getWeekDates(today)).toHaveLength(7);
    expect(getWeekDates(today)).toEqual([
      new Date(2022, 1, 13),
      new Date(2022, 1, 14),
      new Date(2022, 1, 15),
      new Date(2022, 1, 16),
      new Date(2022, 1, 17),
      new Date(2022, 1, 18),
      new Date(2022, 1, 19),
    ]);
  });

  test("應該可以跨月份", () => {
    const week = [
      new Date(2022, 1, 27),
      new Date(2022, 1, 28),
      new Date(2022, 2, 1),
      new Date(2022, 2, 2),
      new Date(2022, 2, 3),
      new Date(2022, 2, 4),
      new Date(2022, 2, 5),
    ];
    expect(getWeekDates(new Date(2022, 1, 28))).toEqual(week);
    expect(getWeekDates(new Date(2022, 2, 3))).toEqual(week);
  });
});
