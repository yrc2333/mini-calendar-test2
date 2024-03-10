import React from "react";
import { useState } from "react";

import "./App.css";

function Calendar() {
  const [date, setDate] = useState(new Date());
  console.log(
    "%c [ date ]-8",
    "font-size:13px; background:pink; color:#bf2c9f;",
    date
  );

  const handPrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const handNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  const montNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  /**
   *
   * @param year 年
   * @param month 月
   * @returns 返回第一天是星期几
   */
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDays = () => {
    const days = [];

    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let i = 1; i <= daysCount; i++) {
      days.push(
        <div key={i} className="day">
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handPrevMonth}>&lt;</button>
        <div>{`${date.getFullYear()}年${montNames[date.getMonth()]}`}</div>
        <button onClick={handNextMonth}>&gt;</button>
      </div>
      <div className="days">{renderDays()}</div>
    </div>
  );
}

export default Calendar;
