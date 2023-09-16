"use client";

import { useState } from "react";
import moment, { Moment } from "moment";
import Calendar from "@views/home/calender";
import MainImage from "@views/home/MainImage";
import MainTitle from "@views/home/MainTitle";
import MainInformation from "@views/home/MainInformation";
import { checkIsHandDay, lunarDate } from "@utils/date";
import { ALL } from "@constants/default";
import useDateStore from "@store/useDateStore";
import useDarkMode from "@hooks/queries/useDarkMode";

const Home = () => {
  const { targetDate } = useDateStore();
  console.log(targetDate);
  const year = targetDate.year();
  const month = targetDate.month() + 1;
  const day = targetDate.date();
  console.log("year month day", year, month, day);
  const date = lunarDate(year, month, day);
  console.log("date.day =  ", date.day);
  const isHandDay = checkIsHandDay(ALL, date?.day) as boolean;
  //const [dark, toggleDarkMode] = useDarkMode();

  return (
    <div className="w-full flex-col item-center text-center">
      {/* <button onClick={toggleDarkMode}>
        {dark ? "현재 Dark모드" : "현재 light모드"}
      </button> */}
      <MainTitle />
      <MainImage isHandDay={isHandDay} />
      <MainInformation isHandDay={isHandDay} targetDate={targetDate} />
      <Calendar />
    </div>
  );
};

export default Home;
