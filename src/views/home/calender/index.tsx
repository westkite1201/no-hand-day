"use client";

import React from "react";
import CalendarHeader from "./CalenderHeader";
import CalendarContent from "./CalenderContent";

const Calendar = () => {
  return (
    <div className="border border-gray-600 p-4 rounded">
      <CalendarHeader />
      <CalendarContent />
    </div>
  );
};

export default Calendar;
